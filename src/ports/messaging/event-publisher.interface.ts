export interface EventPublisher {
  publishEvent(eventName: string, payload: Record<string, any>): Promise<void>;
}
