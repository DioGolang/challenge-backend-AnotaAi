export interface SQSPort {
  sendMessage(message: string): Promise<void>;
  receiveMessage(): Promise<string[]>;
}
