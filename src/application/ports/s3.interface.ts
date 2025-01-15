export interface S3Port{
  uploadFile(key: string, data: string): Promise<void>;
  downloadFile(key: string): Promise<string>;
}
