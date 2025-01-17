export abstract class Entity {
  private readonly _id: string;

  protected constructor(id: string) {
    this._id = id;
  }

  public get id(): string {
    return this._id;
  }
}
