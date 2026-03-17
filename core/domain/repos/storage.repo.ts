export interface IStorageRepo {
  getUploadURL: (fileKey: string, expiresIn?: number) => Promise<string>;
}
