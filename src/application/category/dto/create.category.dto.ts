import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  public readonly title: string;

  @IsNotEmpty()
  @IsString()
  public readonly description: string;

  @IsNotEmpty()
  @IsString()
  public readonly ownerId: string;
}
