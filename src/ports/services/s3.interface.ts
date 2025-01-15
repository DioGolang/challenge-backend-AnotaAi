export interface S3Interface {
  uploadFile(key: string, data: string): Promise<void>;
  downloadFile(key: string): Promise<string>;
}
