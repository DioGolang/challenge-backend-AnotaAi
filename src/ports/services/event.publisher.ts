export interface EventPublisher {
  publish(event: string, payload: any): Promise<void>;
}
