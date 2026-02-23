// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import * as MarketsAPI from '../markets';
import * as AccountsAPI from './accounts';
import {
  AccountRetrieveCollateralsParams,
  AccountRetrieveCollateralsResponse,
  AccountRetrieveDebtsParams,
  AccountRetrieveDebtsResponse,
  AccountRetrieveHealthParams,
  AccountRetrieveHealthResponse,
  AccountRetrieveParams,
  AccountRetrieveResponse,
  Accounts,
  UserAccountHealth,
  UserBorrowMarketAccount,
  UserCollateralAssetPool,
} from './accounts';
import * as LookupAPI from './lookup';
import {
  Lookup,
  LookupRetrieveCollateralParams,
  LookupRetrieveCollateralResponse,
  LookupRetrieveDebtParams,
  LookupRetrieveDebtResponse,
} from './lookup';
import * as SumAPI from './sum';
import {
  Sum,
  SumRetrieveCollateralsParams,
  SumRetrieveCollateralsResponse,
  SumRetrieveDebtsParams,
  SumRetrieveDebtsResponse,
} from './sum';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Borrow extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  sum: SumAPI.Sum = new SumAPI.Sum(this._client);
  lookup: LookupAPI.Lookup = new LookupAPI.Lookup(this._client);

  /**
   * Get user borrow portfolio
   */
  list(
    address: string,
    query: BorrowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BorrowListResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow`, { query, ...options });
  }
}

export interface BorrowListResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserMarket`
   */
  data?: MarketsAPI.UserMarket | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface BorrowListParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

Borrow.Accounts = Accounts;
Borrow.Sum = Sum;
Borrow.Lookup = Lookup;

export declare namespace Borrow {
  export { type BorrowListResponse as BorrowListResponse, type BorrowListParams as BorrowListParams };

  export {
    Accounts as Accounts,
    type UserAccountHealth as UserAccountHealth,
    type UserBorrowMarketAccount as UserBorrowMarketAccount,
    type UserCollateralAssetPool as UserCollateralAssetPool,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountRetrieveCollateralsResponse as AccountRetrieveCollateralsResponse,
    type AccountRetrieveDebtsResponse as AccountRetrieveDebtsResponse,
    type AccountRetrieveHealthResponse as AccountRetrieveHealthResponse,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountRetrieveCollateralsParams as AccountRetrieveCollateralsParams,
    type AccountRetrieveDebtsParams as AccountRetrieveDebtsParams,
    type AccountRetrieveHealthParams as AccountRetrieveHealthParams,
  };

  export {
    Sum as Sum,
    type SumRetrieveCollateralsResponse as SumRetrieveCollateralsResponse,
    type SumRetrieveDebtsResponse as SumRetrieveDebtsResponse,
    type SumRetrieveCollateralsParams as SumRetrieveCollateralsParams,
    type SumRetrieveDebtsParams as SumRetrieveDebtsParams,
  };

  export {
    Lookup as Lookup,
    type LookupRetrieveCollateralResponse as LookupRetrieveCollateralResponse,
    type LookupRetrieveDebtResponse as LookupRetrieveDebtResponse,
    type LookupRetrieveCollateralParams as LookupRetrieveCollateralParams,
    type LookupRetrieveDebtParams as LookupRetrieveDebtParams,
  };
}
