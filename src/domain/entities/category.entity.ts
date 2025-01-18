import { Entity } from './entity';

export class Category extends Entity {
  constructor(
    id: string,
    public title: string,
    public description: string,
    public readonly ownerId: string,
  ) {
    super(id);
  }

  updateDetails(title: string, description: string): void {
    if (title) this.title = title;
    if (description) this.description = description;
  }
}
