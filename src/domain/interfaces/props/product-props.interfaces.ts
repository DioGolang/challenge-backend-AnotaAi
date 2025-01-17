import { Price } from '../../value-objects/price.vo';

export interface ProductProps {
  title: string;
  description: string;
  price: Price;
  ownerId: string;
  categoryId: string;
}
