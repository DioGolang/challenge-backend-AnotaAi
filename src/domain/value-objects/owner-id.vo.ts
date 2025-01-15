export class OwnerId {
  private readonly _value: string;

  constructor(value: string) {
    this.notEmpty(value);
    this.isValid(value);
    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  private isValid(value: string): boolean {
    return typeof value === 'string' && value.length > 0;
  }

  private notEmpty(value: string): void {
    if (!value || value.trim() === '') {
      throw new Error('Category ID cannot be empty');
    }
  }

  toString(): string {
    return this._value;
  }

  equals(other: OwnerId): boolean {
    return other && this._value === other.value;
  }
}
