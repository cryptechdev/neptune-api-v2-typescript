// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import * as MarketsAPI from '../markets';
import * as AccountsAPI from './accounts';
import {
  AccountGetCollateralsParams,
  AccountGetCollateralsResponse,
  AccountGetDebtsParams,
  AccountGetDebtsResponse,
  AccountGetHealthParams,
  AccountGetHealthResponse,
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
  LookupGetCollateralAccountsParams,
  LookupGetCollateralAccountsResponse,
  LookupGetDebtAccountsParams,
  LookupGetDebtAccountsResponse,
} from './lookup';
import * as SumAPI from './sum';
import {
  Sum,
  SumGetCollateralsParams,
  SumGetCollateralsResponse,
  SumGetDebtsParams,
  SumGetDebtsResponse,
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
  getPortfolio(
    address: string,
    query: BorrowGetPortfolioParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BorrowGetPortfolioResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow`, { query, ...options });
  }
}

export interface BorrowGetPortfolioResponse {
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

export interface BorrowGetPortfolioParams {
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
  export {
    type BorrowGetPortfolioResponse as BorrowGetPortfolioResponse,
    type BorrowGetPortfolioParams as BorrowGetPortfolioParams,
  };

  export {
    Accounts as Accounts,
    type UserAccountHealth as UserAccountHealth,
    type UserBorrowMarketAccount as UserBorrowMarketAccount,
    type UserCollateralAssetPool as UserCollateralAssetPool,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountGetCollateralsResponse as AccountGetCollateralsResponse,
    type AccountGetDebtsResponse as AccountGetDebtsResponse,
    type AccountGetHealthResponse as AccountGetHealthResponse,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountGetCollateralsParams as AccountGetCollateralsParams,
    type AccountGetDebtsParams as AccountGetDebtsParams,
    type AccountGetHealthParams as AccountGetHealthParams,
  };

  export {
    Sum as Sum,
    type SumGetCollateralsResponse as SumGetCollateralsResponse,
    type SumGetDebtsResponse as SumGetDebtsResponse,
    type SumGetCollateralsParams as SumGetCollateralsParams,
    type SumGetDebtsParams as SumGetDebtsParams,
  };

  export {
    Lookup as Lookup,
    type LookupGetCollateralAccountsResponse as LookupGetCollateralAccountsResponse,
    type LookupGetDebtAccountsResponse as LookupGetDebtAccountsResponse,
    type LookupGetCollateralAccountsParams as LookupGetCollateralAccountsParams,
    type LookupGetDebtAccountsParams as LookupGetDebtAccountsParams,
  };
}
