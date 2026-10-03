export type FilesResult = { success: true; files: string[] } | { success: false; error: string };
export type FileContentResult = { success: true; data: string } | { success: false; error: string };

export interface IFileRepo {
  getFiles(): Promise<FilesResult>;
  readFileContent(filePath: string): Promise<FileContentResult>;
}
