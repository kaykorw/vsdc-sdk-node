import Vsdc from '..';
import { SaveSale } from './interfaces/save-sale.interface';

export class SaleController {
  tin: string;
  host: string;

  constructor(private readonly vsdc: Vsdc) {
    this.tin = this.vsdc.tin;
    this.host = this.vsdc.vsdcHostname;
  }

  saveSale = async (sale: SaveSale) => {
    return JSON.stringify({ sale });
  };
}
