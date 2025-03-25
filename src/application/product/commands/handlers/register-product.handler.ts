import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterProductCommand } from '../register-product.command';

@CommandHandler(RegisterProductCommand)
export class RegisterProductHandler
  implements ICommandHandler<RegisterProductCommand>
{
  constructor() {}

  execute(command: RegisterProductCommand): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
