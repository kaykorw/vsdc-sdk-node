export class NotFoundException extends Error {
  readonly status: number = 404;
  readonly name: string = 'NotFoundException';
  readonly message: string;

  constructor(path: string) {
    super();
    this.message = `The requested path ${path} could not be found.`;
  }
}
