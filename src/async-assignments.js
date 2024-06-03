import fs, { stat } from "fs";
import { reject } from "lodash";
import path, { resolve } from "path";

/**
 * Synchronously calculates the size of a file or directory at the given path.
 * If the path points to a file, returns the size of the file.
 * If the path points to a directory, returns the total size of all files in the directory and its subdirectories.
 *
 * @param {string} filePath - The path to the file or directory.
 * @returns {number} The size of the file or directory.
 */
export function sizeOfFileAtPathSync(path) {
  const stat = fs.statSync(path);

  if (stat.isFile()) {
    return stat.size; // base case
  } else if (stat.isDirectory()) {
    const files = fs.readdirSync(path);
    let size = 0;
    for (let file of files) {
      const pathOfFile = path + "/" + file;
      size += sizeOfFileAtPathSync(pathOfFile);
    }
    return size;
  }
}

/**
 * Asynchronously calculates the size of a file or directory at the given path.
 * If the path points to a file, calls the callback with the size of the file.
 * If the path points to a directory, calls the callback with the total size of all files in the directory and its subdirectories.
 *
 * @param {string} filePath - The path to the file or directory.
 * @param {function} callback - The callback function to be called with the result or error.
 */
export function sizeOfFileAtPathAsync(filePath, callback) {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      callback(0, err);
      return;
    }
    if (stats.isFile()) {
      callback(stats.size);
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        if (err) {
          callback(0, err);
          return;
        }
        let totalSize = 0;
        let filesProcessed = 0;
        if (files.length === 0) {
          callback(totalSize);
          return;
        }
        files.forEach((file) => {
          const nestedFilePath = filePath.join(filePath, file);
          sizeOfFileAtPathAsync(nestedFilePath, (size, err) => {
            if (err) {
              callback(0, err);
              return;
            }
            totalSize += size;
            filesProcessed++;
            if (filesProcessed === files.length) {
              callback(totalSize);
            }
          });
        });
      });
    }
  });
}

/**
 * Synchronously flattens the file hierarchy starting from the given directory path.
 *
 * @param {string} filePath - The path to the directory to flatten.
 * @returns {Array<string>} An array containing the paths of all files in the directory and its subdirectories.
 */
export function flattenFileHierarchySync(filePath) {
  let result = [];

  function traverseDirectorySync(currentPath) {
    const items = fs.readdirSync(currentPath);
    items.forEach((item) => {
      const itemPath = path.join(currentPath, item);
      const stats = fs.statSync(itemPath);
      if (stats.isFile()) {
        result.push(itemPath);
      } else if (stats.isDirectory()) {
        traverseDirectorySync(itemPath);
      }
    });
  }

  traverseDirectorySync(filePath);
  return result;
}

/**
 * Asynchronously flattens the file hierarchy starting from the given directory path.
 * Calls the callback with an array containing the paths of all files in the directory and its subdirectories.
 *
 * @param {string} filePath - The path to the directory to flatten.
 * @param {function} callback - The callback function to be called with the result or error.
 */
export function flattenFileHierarchyAsync(filePath, callback) {
  const result = [];

  function traverseDirectory(currentPath, callback) {
    fs.readdir(currentPath, (err, items) => {
      if (err) {
        return callback(err);
      }

      let pending = items.length;
      if (pending === 0) {
        return callback();
      }

      items.forEach((item) => {
        const itemPath = path.join(currentPath, item);
        fs.stat(itemPath, (err, stats) => {
          if (err) {
            return callback(err);
          }

          if (stats.isFile()) {
            result.push(itemPath);
          } else if (stats.isDirectory()) {
            traverseDirectory(itemPath, (err) => {
              if (err) {
                return callback(err);
              }
              if (--pending === 0) {
                callback();
              }
            });
            return;
          }

          if (--pending === 0) {
            callback();
          }
        });
      });
    });
  }

  traverseDirectory(filePath, (err) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
}
/**
 * Promisifies the fs.stat function, returning a promise that resolves with the file stats or rejects with an error.
 *
 * @param {string} path - The path to the file or directory.
 * @returns {Promise<fs.Stats>} A promise that resolves with the file stats or rejects with an error.
 */
export function promisifiedStat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    });
  });
}
/**
 * Promisified version of fs.readdir.
 * Reads the contents of a directory.
 *
 * @param {string} path - The path to the directory.
 * @returns {Promise<string[]>} A promise that resolves with an array of filenames in the directory.
 */
export function promisifiedReaddir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

// Implementing async programing using promises for functions findingSize at given path and flattening file hierarchy

/**
 * Finds the size of a file at the given path using promises.
 * @param {string} filePath - The path to the file.
 * @returns {Promise} - A promise that resolves to the size of the file in bytes.
 * @throws {Error} - Throws an error if the path is not a file or if an error occurs while getting the file size.
 */
export function sizeOfFileAtPathUsingPromises(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (error, stats) => {
      if (error) {
        reject(error);
        return;
      }
      if (stats.isFile()) {
        resolve(stats.size);
      } else if (stats.isDirectory()) {
        fs.readdir(filePath, (error, files) => {
          if (error) {
            reject(error);
            return;
          }
          if (files.length === 0) {
            resolve(0);
            return;
          }
          let totalSize = 0;
          let filesProcessed = 0;
          files.forEach((file) => {
            const subFilePath = path.join(filePath, file);
            sizeOfFileAtPathUsingPromises(subFilePath)
              .then((size) => {
                totalSize += size;
                filesProcessed++;
                if (filesProcessed === files.length) {
                  resolve(totalSize);
                }
              })
              .catch((error) => reject(error));
          });
        });
      }
    });
  });
}

/**
 * Collects the file hierarchy asynchronously using Promises
 * @param {String} filePath - The starting path to collect the file hierarchy
 * @returns {Promise} -  A promise that resolves to the file hierarchy of the file in an array.
 * @throws {Error} - Throws an error if the path is not a file or if an error occurs while getting the file hierarchy.
 */
export function flattenFileHeirarchyUsingPromises(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (error, stats) => {
      if (error) {
        reject(error);
        return;
      }
      if (stats.isFile()) {
        resolve([filePath]);
        return;
      }
      fs.readdir(filePath, (error, files) => {
        if (error) {
          reject(error);
          return;
        }
        if (files.length === 0) {
          resolve([]);
          return;
        }
        let result = [];
        let filesProcessed = 0;
        files.forEach((file) => {
          const itemPath = path.join(filePath, file);
          flattenFileHeirarchyUsingPromises(itemPath)
            .then((subHierarchy) => {
              result = result.concat(subHierarchy);
              filesProcessed++;
              if (filesProcessed === files.length) {
                resolve(result);
              }
            })
            .catch((error) => reject(error));
        });
      });
    });
  });
}
/**
 * Fetches the information of a Star Wars character by their ID using asynchronous requests.
 * @param {number} personId - The ID of the Star Wars character.
 * @returns {Promise<Object>} A promise that resolves to the information of the character.
 * @throws {Error} If the response status is not 200 (OK).
 */
export async function getStarWarsPersonNameUsingAsyncAwait(personId) {
  const baseURL = "https://swapi.dev/api/people";
  const url = `${baseURL}/${personId}`;
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("Invalid response");
  }
  const data = await response.json();
  return data.name;
}
/**
 * Fetches the names of Star Wars characters sequentially based on their IDs.
 * @returns {Promise<Array<string>>} A promise that resolves to an array containing the names of the characters.
 * Each name corresponds to the ID in the same order as specified in the `personIds` array.
 */
export async function fetchPersonNamesFromOneToThree(personIdCount) {
  const names = [];
  for (let personId = 1; personId <= personIdCount; personId++) {
    try {
      const personInfo = await getStarWarsPersonNameUsingAsyncAwait(personId);
      names.push(personInfo);
    } catch (error) {
      console.error(`Failed to fetch person with ID ${personId}`);
    }
  }
  return names;
}
