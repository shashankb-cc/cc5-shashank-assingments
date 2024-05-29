import { describe, expect, test } from "vitest";
import {
  sizeOfFileAtPathSync,
  sizeOfFileAtPathAsync,
  flattenFileHierarchySync,
  flattenFileHierarchyAsync,
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
        expect(result).toEqual([
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
});
