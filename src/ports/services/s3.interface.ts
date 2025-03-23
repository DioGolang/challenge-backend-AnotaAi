export interface S3 {
  uploadFile(ownerId: string, data: string): Promise<void>;
  downloadFile(ownerId: string): Promise<string>;
  getFileUrl(ownerId: string): Promise<{ url: string }>;
}
