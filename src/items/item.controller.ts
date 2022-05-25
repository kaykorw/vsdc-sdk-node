import Vsdc from '..';
import { SaveItemComposition } from './interfaces/save-item-composition.interface';
import { SaveImportedItem } from './interfaces/save-item-import.interface';
import { SaveItem } from './interfaces/save-item.interface';

export class ItemController {
  tin: string;
  host: string;

  constructor(private readonly vsdc: Vsdc) {
    this.tin = this.vsdc.tin;
    this.host = this.vsdc.apiHostname;
  }

  lookupItem = async () => {
    return JSON.stringify({});
  };

  lookupImportedItem = async () => {
    return JSON.stringify({});
  };

  saveItem = async (item: SaveItem) => {
    return JSON.stringify({ item });
  };

  saveItemComposition = async (item: SaveItemComposition) => {
    return JSON.stringify({ item });
  };

  saveImportedItem = async (item: SaveImportedItem) => {
    return JSON.stringify({ item });
  };
}
