import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PriceDto } from '../../shared/dto/price.dto';

export class RegisterProductDto {
  @IsString()
  public readonly title: string;

  @IsString()
  public readonly description: string;

  @ValidateNested()
  @Type(() => PriceDto)
  public readonly price: PriceDto;

  @IsString()
  public readonly ownerId: string;

  @IsString()
  public readonly categoryId: string;
}
