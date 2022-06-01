import Vsdc from '..';
import { SaveStockMaster } from './interfaces/save-stock-master.interface';
import { SaveStock } from './interfaces/save-stock.interface';

export class StockController {
  tin: string;
  host: string;

  constructor(private readonly vsdc: Vsdc) {
    this.tin = this.vsdc.tin;
    this.host = this.vsdc.vsdcHostname;
  }

  lookupStock = async () => {
    return JSON.stringify({});
  };

  saveStockMaster = async (master: SaveStockMaster) => {
    return JSON.stringify({ master });
  };

  saveStock = async (stock: SaveStock) => {
    return JSON.stringify({ stock });
  };
}
