export class ProductId {
  private readonly _id: string;

  constructor(id: string) {
    if (!id || id.trim().length === 0) {
      throw new Error('ID cannot be null or empty');
    }
    this._id = id;
  }

  public hashCode(): number {
    let hash = 0;
    for (let i = 0; i < this._id.length; i++) {
      hash = (hash << 5) - hash + this._id.charCodeAt(i);
    }
    return hash;
  }

  public toString(): string {
    return this._id;
  }

  public equals(other: ProductId): boolean {
    if (!(other instanceof ProductId)) {
      return false;
    }
    return this._id === other._id;
  }

  get id(): string {
    return this._id;
  }
}
