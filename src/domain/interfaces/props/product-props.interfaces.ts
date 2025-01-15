import { Price } from '../../value-objects/price.vo';
import { CategoryId } from '../../value-objects/category-id.vo';
import { OwnerId } from '../../value-objects/owner-id.vo';

export interface ProductProps {
  title: string;
  description: string;
  price: Price;
  ownerId: OwnerId;
  categoryId: CategoryId;
}
