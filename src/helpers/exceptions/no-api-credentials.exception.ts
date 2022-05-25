export class NoCredentialsProvidedException extends Error {
  readonly status: number = 500;
  readonly name: string = 'NoCredentialsProvidedException';
  readonly message: string;

  constructor() {
    super();

    this.message = `Missing Credentials. Pass it to the constructor (new Vsdc({ credentials }))`;
  }
}
