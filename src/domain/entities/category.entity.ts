export class Category {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public readonly ownerId: string,
  ) {}

  updateDetails(title: string, description: string): void {
    this.title = title;
    this.description = description;
  }
}
