export interface IStorageRepo {
  getUploadURL: (fileKey: string, expiresIn?: number) => Promise<string>;
  deleteFile: (fileKey: string) => Promise<void>;
  deleteFiles: (fileKeys: string[]) => Promise<void>;
}
