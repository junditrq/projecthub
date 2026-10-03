import { FileContentResult, FilesResult, IFileRepo } from './file.repo.interface';
import fs from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import path from 'path';

export class FileRepo implements IFileRepo {
  private readonly _dataPath: string;

  constructor(dataPath: string) {
    this._dataPath = dataPath;
  }

  async getFiles(): Promise<FilesResult> {
    try {
      const files = await fs.readdir(this._dataPath);
      return {
        success: true,
        files: files,
      };
    } catch {
      return {
        success: false,
        error: 'Failed to read files from the data directory.',
      };
    }
  }

  async readFileContent(filePath: string): Promise<FileContentResult> {
    const fullPath = path.resolve(this._dataPath, filePath);
    try {
      const rawData = await readFile(fullPath, 'utf8');
      return {
        success: true,
        data: rawData,
      };
    } catch {
      return {
        success: false,
        error: `Failed to read file content from path: ${filePath}.`,
      };
    }
  }
}
