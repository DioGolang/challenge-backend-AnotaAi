import { Type } from 'class-transformer';
import { PriceDto } from '../../shared/dto/price.dto';

export class ProductDto {
  public readonly title: string;

  public readonly description: string;

  @Type(() => PriceDto)
  public readonly price: PriceDto;

  public readonly ownerId: string;

  public readonly categoryId: string;
}
