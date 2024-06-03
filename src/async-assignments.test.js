import { describe, expect, getRunningMode, test } from "vitest";
import {
  sizeOfFileAtPathSync,
  sizeOfFileAtPathAsync,
  flattenFileHierarchySync,
  flattenFileHierarchyAsync,
  sizeOfFileAtPathUsingPromises,
  promisifiedReaddir,
  promisifiedStat,
  flattenFileHeirarchyUsingPromises,
  getStarWarsPersonNameUsingAsyncAwait,
  fetchPersonNamesFromOneToThree,
} from "./async-assignments";

describe("TO find the size of files or directory ", () => {
  test("Finding size of a file or directory Synchronous programming ", () => {
    const fileSize = sizeOfFileAtPathSync(
      "/home/shashankb/Node-project/src/Stack.js"
    );
    expect(fileSize).toBe(392);
  });

  test("Finding size of a file or directory Asynchronous programming", async () => {
    const aPath = "/home/shashankb/Node-project/src/Stack.js";
    sizeOfFileAtPathAsync(aPath, (fileSize, error) => {
      expect(error).toBeUndefined();
      expect(fileSize).toBe(392);
    });
  });
  test("flattenFileHeirarchySync test", () => {
    const directoryPath = "/home/shashankb/main-dir/";
    const result = flattenFileHierarchySync(directoryPath);
    expect(result).toEqual([
      "/home/shashankb/main-dir/file-1.txt",
      "/home/shashankb/main-dir/file2.txt",
      "/home/shashankb/main-dir/sub-dir/file-1.txt",
      "/home/shashankb/main-dir/sub-dir/file2.txt",
      "/home/shashankb/main-dir/sub-dir/sub-dir-2/file-1.txt",
      "/home/shashankb/main-dir/sub-dir/sub-dir-2/file2.txt",
    ]);
  });

  test("flattenFileHeirarchyAsync test", async () => {
    const filePath = "/home/shashankb/main-dir/";
    flattenFileHierarchyAsync(filePath, (error, result) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Result:", result);
        expect(result).toStrictEqual([
          "/home/shashankb/main-dir/file-1.txt",
          "/home/shashankb/main-dir/file2.txt",
          "/home/shashankb/main-dir/sub-dir/file-1.txt",
          "/home/shashankb/main-dir/sub-dir/file2.txt",
          "/home/shashankb/main-dir/sub-dir/sub-dir-2/file-1.txt",
          "/home/shashankb/main-dir/sub-dir/sub-dir-2/file2.txt",
        ]);
      }
    });
  });
  test("Tests for promisified fs.stat()", () => {
    const filePath = "/home/shashankb/Node-project/src/Stack.js";
    expect(promisifiedStat(filePath)).resolves.toMatchObject({ size: 392 });
  });
  test("Tests for promisified fs.readdir()", () => {
    const directoryPath = "/home/shashankb/main-dir/";
    expect(promisifiedReaddir(directoryPath)).resolves.toEqual([
      "file-1.txt",
      "file2.txt",
      "sub-dir",
    ]);
  });
  test("Tests for promisified getting file size at given path", () => {
    //For a single file
    const filePath = "/home/shashankb/Node-project/src/Stack.js";
    expect(sizeOfFileAtPathUsingPromises(filePath)).resolves.toBe(392);

    //For a folder
    const directoryPath = "/home/shashankb/main-dir/";
    expect(sizeOfFileAtPathUsingPromises(directoryPath)).resolves.toBe(44);
  });
  test("Tests for getting file hierarchy using promises", () => {
    const filePath = "/home/shashankb/main-dir/";
    expect(flattenFileHeirarchyUsingPromises(filePath)).resolves.toStrictEqual([
      "/home/shashankb/main-dir/file-1.txt",
      "/home/shashankb/main-dir/file2.txt",
      "/home/shashankb/main-dir/sub-dir/file-1.txt",
      "/home/shashankb/main-dir/sub-dir/file2.txt",
      "/home/shashankb/main-dir/sub-dir/sub-dir-2/file-1.txt",
      "/home/shashankb/main-dir/sub-dir/sub-dir-2/file2.txt",
    ]);
  });
  test("Tests to get the person with id 3", async () => {
    const personId = 3;
    const personInfo = await getStarWarsPersonNameUsingAsyncAwait(personId);
    expect(personInfo).toBe("R2-D2");
  });
  test("Tests to get the names of the first three persons", async () => {
    const names = await fetchPersonNamesFromOneToThree(3);
    expect(names).toEqual(["Luke Skywalker", "C-3PO", "R2-D2"]);
  });
});
