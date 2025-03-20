import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PriceDto {
  @IsNotEmpty()
  @IsNumber()
  public readonly amount: number;

  @IsNotEmpty()
  @IsString()
  public readonly currency: string;
}
