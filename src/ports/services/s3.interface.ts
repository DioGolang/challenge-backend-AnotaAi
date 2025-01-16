export interface S3 {
  uploadFile(key: string, data: string): Promise<void>;
  downloadFile(key: string): Promise<string>;
  getFileUrl(key: string): Promise<{ url: string }>;
}
