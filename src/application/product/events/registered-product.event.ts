import { RegisterProductDto } from '../dto/register.product.dto';

export class RegisteredProductEvent {
  constructor(public readonly productDto: RegisterProductDto) {}
}