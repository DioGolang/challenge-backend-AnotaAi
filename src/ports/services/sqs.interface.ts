export interface SQS {
  sendMessage(message: string): Promise<void>;
  receiveMessage(): Promise<string[]>;
}
