import fs from "fs";
import path from "path";

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


