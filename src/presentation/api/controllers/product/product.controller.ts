import { Body, Controller, Post } from '@nestjs/common';
import { RegisterProductDto } from '../../../../application/product/dto/register.product.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegisterProductCommand } from '../../../../application/product/commands/register-product.command';

@Controller('product')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createProduct(@Body() productDto: RegisterProductDto): Promise<void> {
    const productCommand = new RegisterProductCommand(productDto);
    await this.commandBus.execute(productCommand);
  }
}
