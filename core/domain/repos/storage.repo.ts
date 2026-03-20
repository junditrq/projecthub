export interface IStorageRepo {
  getUploadURL: (
    fileKey: string,
    fileType: string,
    expiresIn?: number,
  ) => Promise<string>;
  deleteFile: (fileKey: string) => Promise<void>;
  deleteFiles: (fileKeys: string[]) => Promise<void>;
}
