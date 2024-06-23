import { describe, test, expect } from "vitest";
import { FileSystem } from "./file-system";

describe("FileSystem", () => {
  test("constructor", () => {
    const fileSystem = new FileSystem();
    expect(fileSystem.root.name).toBe("root");
    expect(fileSystem.root.size).toBe(0);
    expect(fileSystem.root.parent).toBeNull();
  });
  test("File system", () => {
    const fileSystem = new FileSystem();
    fileSystem.createFileItem("sub-folder1/sub-folder2/example.txt");
    expect(fileSystem.root.toString()).toBe(
      "Folder(name: root,size:0, contents: [Folder(name: sub-folder1,size:0, contents: [Folder(name: sub-folder2,size:0, contents: [File(name: example.txt,size:0, path: root/sub-folder1/sub-folder2/example.txt)])])])"
    );
    fileSystem.createFileItem("folder1/hello.txt");
    expect(fileSystem.root.toString()).toBe(
      "Folder(name: root,size:0, contents: [Folder(name: sub-folder1,size:0, contents: [Folder(name: sub-folder2,size:0, contents: [File(name: example.txt,size:0, path: root/sub-folder1/sub-folder2/example.txt)])]), Folder(name: folder1,size:0, contents: [File(name: hello.txt,size:0, path: root/folder1/hello.txt)])])"
    );
  });
});
