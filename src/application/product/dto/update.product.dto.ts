import { RegisterProductDto } from './register.product.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(RegisterProductDto) {
  @IsString()
  public readonly ownerId: string;

  @IsString()
  public readonly categoryId: string;
}
