export abstract class EntityBuilder<Entity> {
  protected _id: string;

  setId(id: string): this {
    this._id = id;
    return this;
  }

  abstract build(): Promise<Entity>;
  protected abstract validateRequiredProperties(): void;
  protected abstract addRelationshipsToEntities(entity: Entity): void;
}
