import { RegisterProductDto } from '../dto/register.product.dto';
import { Command } from '@nestjs/cqrs';

export class RegisterProductCommand extends Command<void> {
  constructor(public readonly createProductDto: RegisterProductDto) {
    super();
  }
}
// Herança do Command a classe é opcional. Só é necessário se você quiser definir o tipo de retorno do comando.
