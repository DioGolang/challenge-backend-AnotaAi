import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Category, CategorySchema } from './category.schema';

type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  owner: string;

  @Prop()
  title: string;

  @Prop({ CategorySchema })
  category: Category;

  @Prop()
  price: number;

  @Prop()
  description: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
