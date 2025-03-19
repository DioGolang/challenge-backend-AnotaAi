import { Price } from '../../../value-objects/price.vo';

export interface ProductData {
  id: string;
  title: string;
  description: string;
  price: Price;
  ownerId: string;
  categoryId: string;
}
