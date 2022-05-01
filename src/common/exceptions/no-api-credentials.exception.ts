export class NoApiCredentialsProvidedException extends Error {
  readonly status: number = 500;
  readonly name: string = 'NoApiKeyProvidedException';
  readonly message: string;

  constructor() {
    super();

    this.message = `Missing API Credentials. Pass it to the constructor (new Vsdc({ credentials }))`;
  }
}
