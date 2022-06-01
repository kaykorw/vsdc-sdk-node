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
    this.host = this.vsdc.vsdcHostname;
    this.branchId = this.vsdc.branchId;
    this.deviceSerialNo = this.vsdc.deviceSerialNo;
    this.lastRequestTime = this.vsdc.lastRequestTime;
  }

  /**
   * Lookup initial setup information of VSDC Device.
   * @returns
   */
  initialInfo = async (): Promise<InitialInfo> => {
    try {
      const result = await this.vsdc.post(
        `${this.host}/initializer/selectInitInfo`,
        {
          tin: this.tin,
          bhfId: this.branchId,
          dvcSrlNo: this.deviceSerialNo,
        },
        {}
      );

      return result.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Lookup list of common codes registered on the RRA server.
   * @returns
   */
  lookupCodes = async (): Promise<Code> => {
    try {
      const result = await this.vsdc.post(
        `${this.host}/code/selectCodes`,
        {
          tin: this.tin,
          bhfId: this.branchId,
          lastReqDt: this.lastRequestTime,
        },
        {}
      );

      return result.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Lookup list of item classification registered on the RRA server.
   * @returns
   */
  lookupItemClassification = async (): Promise<ItemClassification> => {
    try {
      const result = await this.vsdc.post(
        `${this.host}/itemClass/selectItemsClass`,
        {
          tin: this.tin,
          bhfId: this.branchId,
          lastReqDt: this.lastRequestTime,
        },
        {}
      );

      return result.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Retrieve information about a customer by their Tax Identifier Number
   * @param customerTin
   * @returns
   */
  lookupCustomerByTin = async (customerTin: string): Promise<Customer> => {
    try {
      const result = await this.vsdc.post(
        `${this.host}/customers/selectCustomer`,
        {
          tin: this.tin,
          bhfId: this.branchId,
          custmTin: customerTin,
        },
        {}
      );

      return result.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Lookup list of current user's branch information.
   * @returns
   */
  lookupBranch = async (): Promise<Branch> => {
    try {
      const result = await this.vsdc.post(
        `${this.host}/branches/selectBranches`,
        {
          tin: this.tin,
          bhfId: this.branchId,
          lastReqDt: this.lastRequestTime,
        },
        {}
      );

      return result.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Lookup list of notices from the RRA.
   * @returns
   */
  lookupNotices = async (): Promise<Notice> => {
    try {
      const result = await this.vsdc.post(
        `${this.host}/notices/selectNotices`,
        {
          tin: this.tin,
          bhfId: this.branchId,
          lastReqDt: this.lastRequestTime,
        },
        {}
      );

      return result.data;
    } catch (error) {
      throw error;
    }
  };
}
