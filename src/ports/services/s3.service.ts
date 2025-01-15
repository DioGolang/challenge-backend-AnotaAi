export interface S3Service {
  uploadJson(
    bucketName: string,
    objectKey: string,
    jsonData: any,
  ): Promise<void>;
}
