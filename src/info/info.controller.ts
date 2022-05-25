import Vsdc from '..';
import { Branch } from './interfaces/branch.interface';
import { Code } from './interfaces/code.interfaces';
import { Customer } from './interfaces/customer.interface';
import { InitialInfo } from './interfaces/initial-info.interface';
import { ItemClassification } from './interfaces/item-classification.interface';
import { Notice } from './interfaces/notice.interface';

export class InfoController {
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

  /**
   * Lookup initial setup information of VSDC Device.
   * @returns
   */
  initialInfo = async (): Promise<InitialInfo | any> => {
    return JSON.stringify({});
  };

  /**
   * Lookup list of common codes registered on the RRA server.
   * @returns
   */
  lookupCodes = async (): Promise<Code | any> => {
    return JSON.stringify({});
  };

  /**
   * Lookup list of item classification registered on the RRA server.
   * @returns
   */
  lookupItemClassification = async (): Promise<ItemClassification | any> => {
    return JSON.stringify({});
  };

  /**
   * Retrieve information about a customer by their Tax Identifier Number
   * @param customerTin
   * @returns
   */
  lookupCustomerByTin = async (
    customerTin: string
  ): Promise<Customer | any> => {
    return JSON.stringify({
      customerTin,
    });
  };

  /**
   * Lookup list of current user's branch information.
   * @returns
   */
  lookupBranch = async (): Promise<Branch | any> => {
    return JSON.stringify({});
  };

  /**
   * Lookup list of notices from the RRA.
   * @returns
   */
  lookupNotices = async (): Promise<Notice | any> => {
    return JSON.stringify({});
  };
}
