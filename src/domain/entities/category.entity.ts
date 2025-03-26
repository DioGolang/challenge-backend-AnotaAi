import { Entity } from './entity';
import { CategoryProps } from '../interfaces/props/category-props.interface';
import { ValidationError } from '../exceptions/validation-error';

export class Category extends Entity {
  constructor(
    id: string,
    public readonly _props: CategoryProps,
  ) {
    super(id);
    this.validate();
  }

  updateTitle(newTitle: string): void {
    this.validateTitle();
    this._props.title = newTitle;
  }

  updateDescription(newDescription: string): void {
    this.validateDescription();
    this._props.description = newDescription;
  }

  private validate(): void {
    this.validateTitle();
    this.validateDescription();
  }

  private validateDescription(): void {
    if (!this._props.description.trim())
      throw new ValidationError('Description cannot be empty.');
  }

  private validateTitle(): void {
    if (!this._props.title.trim())
      throw new ValidationError('Title cannot be empty.');
    if (this._props.title.length < 3)
      throw new ValidationError('Title is too short.');
  }
}
