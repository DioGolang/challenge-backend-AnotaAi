import { Injectable } from '@nestjs/common';
import { SQS } from '../../../../ports/services/sqs.interface';

@Injectable()
export class SqsService implements SQS {
  sendMessage(message: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  receiveMessage(): Promise<string[]> {
    throw new Error('Method not implemented.');
  }
}
