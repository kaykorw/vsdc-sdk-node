import Vsdc from '..';
import { SaveCustomer } from './interfaces/save-customer.interface';
import { SaveInsurance } from './interfaces/save-insurance.interface';
import { SaveUser } from './interfaces/save-user.interface';

export class BranchController {
  host: string;
  tin: string;
  branchId: string;
  deviceSerialNo: string;
  lastRequestTime: string;

  /**
   * Initialize the VSDC
   * @param vsdc
   */
  constructor(private readonly vsdc: Vsdc) {
    this.tin = this.vsdc.tin;
    this.host = this.vsdc.apiHostname;
    this.branchId = this.vsdc.branchId;
    this.deviceSerialNo = this.vsdc.deviceSerialNo;
    this.lastRequestTime = this.vsdc.lastRequestTime;
  }

  saveCustomer = async (customer: SaveCustomer) => {
    return JSON.stringify({ customer });
  };

  saveUser = async (user: SaveUser) => {
    return JSON.stringify({ user });
  };

  saveInsurance = async (insurance: SaveInsurance) => {
    return JSON.stringify({ insurance });
  };
}
