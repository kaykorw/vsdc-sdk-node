export class GenericServerException extends Error {
  readonly name: string = 'GenericServerException';
  readonly message: string = 'The request could not be completed.';

  constructor(readonly status: number, message: any) {
    super();

    if (message.message) {
      this.message = message.message;
    } else {
      this.message = message;
    }
  }
}
