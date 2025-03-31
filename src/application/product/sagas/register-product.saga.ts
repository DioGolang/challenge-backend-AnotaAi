import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { RegisteredProductEvent } from '../events/registered-product.event';

@Injectable()
export class RegisterProductSaga {
  @Saga()
  registeredProduct = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(RegisteredProductEvent),
      map((event: RegisteredProductEvent) => {
        return [
          // Here you can handle the event and return commands
          // For example, you might want to send a message to SQS
          // new SendMessageToSqsCommand(event),
        ];
      }),
    );
  };
}
