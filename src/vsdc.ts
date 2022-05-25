import axios, { AxiosError, AxiosInstance } from 'axios';
import { BranchController } from './branches/branch.controller';
import {
  GenericServerException,
  NoCredentialsProvidedException,
  NotFoundException,
  UnauthorizedException,
} from './helpers/exceptions';
import {
  GetOptions,
  PostOptions,
  PutOptions,
  VsdcOptions,
} from './helpers/interfaces';
import { InfoController } from './info/info.controller';
import { ItemController } from './items/item.controller';
import { PurchaseController } from './purchases/purchase.controller';
import { SaleController } from './sales/sale.controller';
import { StockController } from './stock/stock.controller';
const VERSION = '0.1.0';
export default class Vsdc {
  readonly branchController = new BranchController(this);
  readonly infoController = new InfoController(this);
  readonly itemController = new ItemController(this);
  readonly purchaseController = new PurchaseController(this);
  readonly saleController = new SaleController(this);
  readonly stockController = new StockController(this);

  private readonly client: AxiosInstance;

  apiHostname: string;

  tin: string;
  branchId: string;
  deviceSerialNo: string;
  lastRequestTime: string;

  constructor(readonly options: VsdcOptions) {
    if (!options.tin || !options.deviceSerialNo) {
      throw new NoCredentialsProvidedException();
    }

    this.tin = options.tin;
    this.branchId = options.branchId || '00';
    this.deviceSerialNo = options.deviceSerialNo;
    this.lastRequestTime = options.lastRequestTime || new Date().toISOString();

    this.apiHostname = options.apiHostname
      ? options.apiHostname
      : options.isProduction
      ? 'https://api-ebm.rra.gov.rw'
      : 'https://sdcsandbox.rra.gov.rw';

    this.client = axios.create({
      baseURL: this.apiHostname,
      headers: { 'User-Agent': `kayko-node/${VERSION}` },
    });
  }

  get = async (path: string, options: GetOptions) => {
    try {
      const { accessToken } = options;

      return await this.client.get(path, {
        headers: accessToken
          ? { Authorization: `Bearer ${accessToken}` }
          : undefined,
      });
    } catch (error) {
      const { response } = error as AxiosError;
      if (response) {
        const { status, data } = response;

        switch (status) {
          case 401:
            throw new UnauthorizedException();

          case 404:
            throw new NotFoundException(path);

          default:
            throw new GenericServerException(status, data);
        }
      }
      throw error;
    }
  };

  post = async (path: string, entity: any, options: PostOptions) => {
    try {
      const requestHeaders: any = {};
      if (options.idempotencyKey) {
        requestHeaders['Idempotency-Key'] = options.idempotencyKey;
      }

      return await this.client.post(path, entity, {
        params: options.query,
        headers: requestHeaders,
      });
    } catch (error) {
      const { response } = error as AxiosError;
      if (response) {
        const { status, data } = response;

        switch (status) {
          case 401:
            throw new UnauthorizedException();

          case 404:
            throw new NotFoundException(path);

          default:
            throw new GenericServerException(status, data);
        }
      }
      throw error;
    }
  };

  put = async (path: string, entity: any, options: PutOptions) => {
    try {
      const requestHeaders: any = {};
      if (options.idempotencyKey) {
        requestHeaders['Idempotency-Key'] = options.idempotencyKey;
      }

      return await this.client.put(path, entity, {
        params: options.query,
        headers: requestHeaders,
      });
    } catch (error) {
      const { response } = error as AxiosError;
      if (response) {
        const { status, data } = response;

        switch (status) {
          case 401:
            throw new UnauthorizedException();

          case 404:
            throw new NotFoundException(path);

          default:
            throw new GenericServerException(status, data);
        }
      }
      throw error;
    }
  };

  delete = async (path: string, query?: any) => {
    try {
      return await this.client.delete(path, { params: query });
    } catch (error) {
      const { response } = error as AxiosError;
      if (response) {
        const { status, data } = response;

        switch (status) {
          case 401:
            throw new UnauthorizedException();

          case 404:
            throw new NotFoundException(path);

          default:
            throw new GenericServerException(status, data);
        }
      }
      throw error;
    }
  };
}
