import Vsdc from '..';
import { SavePurchase } from './interfaces/save-purchase.interface';

export class PurchaseController {
  tin: string;
  host: string;

  constructor(private readonly vsdc: Vsdc) {
    this.tin = this.vsdc.tin;
    this.host = this.vsdc.vsdcHostname;
  }

  lookupPurchase = async () => {
    return JSON.stringify({});
  };

  savePurchase = async (purchase: SavePurchase) => {
    return JSON.stringify({ purchase });
  };
}
