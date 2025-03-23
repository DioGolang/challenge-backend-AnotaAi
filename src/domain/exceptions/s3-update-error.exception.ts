export class S3UpdateErrorException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'S3UpdateErrorException';
  }
}
