export interface EventPublisherInterface {
  publish(event: string, payload: any): Promise<void>;
}
