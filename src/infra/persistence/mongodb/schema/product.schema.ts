import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Category, CategorySchema } from './category.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  owner: string;

  @Prop()
  title: string;

  @Prop({ type: CategorySchema })
  category: Category;

  @Prop({ type: Object })
  price: { amount: number; currency: string };

  @Prop()
  description: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
