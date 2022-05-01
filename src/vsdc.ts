import { NoApiCredentialsProvidedException } from './common/exceptions';
import { VsdcOptions } from './common/interfaces';

export class Vsdc {
  tin: string;
  apiHostname: string;

  constructor(readonly options: VsdcOptions) {
    if (!options.tin) {
      throw new NoApiCredentialsProvidedException();
    }

    this.tin = options.tin;
    this.apiHostname = options.apiHostname
      ? options.apiHostname
      : options.isProduction
      ? 'https://api-ebm.rra.gov.rw'
      : 'https://sdcsandbox.rra.gov.rw';
  }

  async selectInitInfo() {
    return true;
  }
}
