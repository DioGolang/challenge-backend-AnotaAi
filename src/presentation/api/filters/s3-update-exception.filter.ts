import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { S3UpdateErrorException } from '../../../domain/exceptions/s3-update-error.exception';
import { Response } from 'express';

@Catch(S3UpdateErrorException)
export class S3UpdateExceptionFilter implements ExceptionFilter {
  catch(exception: S3UpdateErrorException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = HttpStatus.BAD_REQUEST;
    const message = exception.message;

    response.status(status).json({
      statusCode: status,
      message: message,
      error: 'S3 Update Error',
    });
  }
}
