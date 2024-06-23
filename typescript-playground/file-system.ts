/**
 * Interface representing a file system item (file or folder).
 */
interface IFile {
  name: string;
  size: number;
  parent: Folder | null;
  getSize(): number;
  getPath(): string;
  toString(): string;
}

/**
 * Class representing a file in the file system.
 *
 * @implements {IFile}
 */
export class File implements IFile {
  public size: number;

  /**
   * Creates an instance of File.
   *
   * @param {string} name - The name of the file.
   * @param {number} size - The size of the file.
   * @param {string} content - The content of the file.
   * @param {Folder | null} [parent=null] - The parent folder of the file.
   */
  constructor(
    public name: string,
    public content: string,
    public parent: Folder | null = null
  ) {
    this.size = this.getActualSize();
  }

  /**
   * Gets the size of the file.
   *
   * @returns {number} The size of the file.
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Gets the actual size of the file based on its content.
   *
   * @returns {number} The actual size of the file.
   */
  getActualSize(): number {
    return this.content.length;
  }

  /**
   * Gets the path of the file in the file system.
   *
   * @returns {string} The path of the file.
   */
  getPath(): string {
    if (this.parent) {
      return `${this.parent.getPath()}/${this.name}`;
    }
    return this.name;
  }

  /**
   * Returns a string representation of the file.
   *
   * @returns {string} A string representing the file.
   */
  toString(): string {
    return `File(name: ${this.name},size:${this.size}, path: ${this.getPath()})`;
  }
}

/**
 * Class representing a folder in the file system.
 *
 * @implements {IFile}
 */
class Folder implements IFile {
  public contents: IFile[] = [];

  /**
   * Creates an instance of Folder.
   *
   * @param {string} name - The name of the folder.
   * @param {Folder | null} [parent=null] - The parent folder of the folder.
   * @param {number} [size=0] - The size of the folder.
   */
  constructor(
    public name: string,
    public parent: Folder | null = null,
    public size: number = 0
  ) {}

  /**
   * Gets the size of the folder.
   *
   * @returns {number} The size of the folder.
   */
  getSize(): number {
    return this.getActualSize();
  }

  /**
   * Adds a file or folder to the folder.
   *
   * @param {IFile} file - The file or folder to add.
   */
  addFile(file: IFile): void {
    file.parent = this;
    this.contents.push(file);
  }

  /**
   * Gets the contents of the folder.
   *
   * @returns {IFile[]} An array containing the contents of the folder.
   */
  getContents(): IFile[] {
    return this.contents;
  }

  /**
   * Gets the actual size of the folder based on its contents.
   *
   * @returns {number} The actual size of the folder.
   */
  getActualSize(): number {
    let totalSize = 0;
    for (const item of this.contents) {
      totalSize += item.getSize();
    }
    return totalSize;
  }

  /**
   * Returns a string representation of the folder.
   *
   * @returns {string} A string representing the folder.
   */
  toString(): string {
    const contentsStr = this.contents.map((item) => item.toString()).join(", ");
    return `Folder(name: ${this.name},size:${this.size}, contents: [${contentsStr}])`;
  }

  /**
   * Gets the path of the folder in the file system.
   *
   * @returns {string} The path of the folder.
   */
  getPath(): string {
    if (this.parent) {
      return `${this.parent.getPath()}/${this.name}`;
    }
    return this.name;
  }
}

/**
 * Class representing the file system.
 */
export class FileSystem {
  root: Folder;

  /**
   * Creates an instance of FileSystem with a root folder.
   */
  constructor() {
    this.root = new Folder("root");
  }

  /**
   * Creates a file or folder item in the file system at the specified path.
   *
   * @param {string} path - The path where the file or folder should be created.
   * @param {string} [content=""] - The content of the file (if creating a file).
   * @returns {IFile} The created file or folder.
   * @throws {Error} If the file already exists at the specified path.
   */
  createFileItem(path: string, content: string = ""): IFile {
    const segments = path.split("/").filter((part) => part.length > 0);
    let currentFolder: Folder = this.root;

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const isFile = i === segments.length - 1 && this.isFile(segment);

      if (isFile) {
        const existingFile = currentFolder.contents.find(
          (item) => item instanceof File && item.name === segment
        );

        if (existingFile) {
          throw new Error(`File already exists at path: ${path}`);
        }
        const file = new File(segment, content, currentFolder);
        currentFolder.addFile(file);
        return file;
      } else {
        let folder = currentFolder.contents.find(
          (item) => item instanceof Folder && item.name === segment
        ) as Folder;

        if (!folder) {
          folder = new Folder(segment, currentFolder);
          currentFolder.addFile(folder);
        }
        currentFolder = folder;
      }
    }

    return currentFolder;
  }

  /**
   * Determines if the given name represents a file.
   *
   * @private
   * @param {string} name - The name to check.
   * @returns {boolean} True if the name represents a file, otherwise false.
   */
  private isFile(name: string): boolean {
    return name.includes(".");
  }
}
