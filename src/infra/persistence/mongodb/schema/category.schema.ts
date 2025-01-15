import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type categoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  ownerId: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
