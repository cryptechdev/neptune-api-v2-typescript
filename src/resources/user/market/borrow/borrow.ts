// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import * as MarketsAPI from '../../../markets/markets';
import * as SubaccountAPI from './subaccount';
import {
  Subaccount,
  SubaccountGetSubaccountCollateralsParams,
  SubaccountGetSubaccountCollateralsResponse,
  SubaccountGetSubaccountDebtsParams,
  SubaccountGetSubaccountDebtsResponse,
  SubaccountGetSubaccountHealthParams,
  SubaccountGetSubaccountHealthResponse,
  SubaccountGetSubaccountParams,
  SubaccountGetSubaccountResponse,
  UserAccountHealth,
  UserBorrowMarketAccount,
  UserCollateralAccountPool,
  UserCollateralAssetPool,
  UserDebtAccountPool,
  UserDebtAssetPool,
} from './subaccount';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Borrow extends APIResource {
  subaccount: SubaccountAPI.Subaccount = new SubaccountAPI.Subaccount(this._client);

  /**
   * Lookup user borrow market collateral accounts by asset
   */
  getCollateralAccountsByAsset(
    address: string,
    query: BorrowGetCollateralAccountsByAssetParams,
    options?: RequestOptions,
  ): APIPromise<BorrowGetCollateralAccountsByAssetResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/lookup/collateral`, {
      query,
      ...options,
    });
  }

  /**
   * Get user combined collaterals for all subaccounts
   */
  getCollateralTotals(
    address: string,
    query: BorrowGetCollateralTotalsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BorrowGetCollateralTotalsResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/sum/collaterals`, {
      query,
      ...options,
    });
  }

  /**
   * Lookup user borrow market debt accounts by asset
   */
  getDebtAccountsByAsset(
    address: string,
    query: BorrowGetDebtAccountsByAssetParams,
    options?: RequestOptions,
  ): APIPromise<BorrowGetDebtAccountsByAssetResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/lookup/debt`, { query, ...options });
  }

  /**
   * Get user combined debts for all subaccounts
   */
  getDebtsTotals(
    address: string,
    query: BorrowGetDebtsTotalsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BorrowGetDebtsTotalsResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/sum/debts`, { query, ...options });
  }

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

export interface UserBorrowMarket {
  /**
   * Market sub-accounts for the user
   */
  accounts: Array<SubaccountAPI.UserBorrowMarketAccount>;

  /**
   * Collateral/debt totals of all sub-accounts by asset
   */
  totals: UserBorrowMarketPools;
}

export interface UserBorrowMarketPools {
  /**
   * Account collateral allocations
   */
  collaterals: Array<SubaccountAPI.UserCollateralAssetPool>;

  /**
   * Account debt allocations
   */
  debts: Array<SubaccountAPI.UserDebtAssetPool>;

  /**
   * Account debt net rate
   */
  debts_net_rate: MarketsAPI.MarketRate;
}

export interface BorrowGetCollateralAccountsByAssetResponse {
  data: BorrowGetCollateralAccountsByAssetResponse.Data;

  /**
   * Error data. Guaranteed `null` for successful response.
   */
  error: null;

  /**
   * HTTP status. Successful responses are guaranteed to be < `400`. Conversely,
   * error responses are guaranteed to be >= `400`.
   */
  status: number;

  /**
   * HTTP status text
   */
  status_text: string;
}

export namespace BorrowGetCollateralAccountsByAssetResponse {
  export interface Data {
    /**
     * All collateral subaccounts for the associated asset type
     */
    accounts: Array<SubaccountAPI.UserCollateralAccountPool>;

    /**
     * Asset identifiers with associated metadata
     */
    asset_info: AssetsAPI.AssetInfo;
  }
}

export interface BorrowGetCollateralTotalsResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<SubaccountAPI.UserCollateralAssetPool>;

  /**
   * Error data. Guaranteed `null` for successful response.
   */
  error: null;

  /**
   * HTTP status. Successful responses are guaranteed to be < `400`. Conversely,
   * error responses are guaranteed to be >= `400`.
   */
  status: number;

  /**
   * HTTP status text
   */
  status_text: string;
}

export interface BorrowGetDebtAccountsByAssetResponse {
  data: BorrowGetDebtAccountsByAssetResponse.Data;

  /**
   * Error data. Guaranteed `null` for successful response.
   */
  error: null;

  /**
   * HTTP status. Successful responses are guaranteed to be < `400`. Conversely,
   * error responses are guaranteed to be >= `400`.
   */
  status: number;

  /**
   * HTTP status text
   */
  status_text: string;
}

export namespace BorrowGetDebtAccountsByAssetResponse {
  export interface Data {
    /**
     * All debt subaccounts for the associated asset type
     */
    accounts: Array<SubaccountAPI.UserDebtAccountPool>;

    /**
     * Asset identifiers with associated metadata
     */
    asset_info: AssetsAPI.AssetInfo;

    /**
     * Current market borrowing rate
     */
    market_rate: MarketsAPI.MarketRate;
  }
}

export interface BorrowGetDebtsTotalsResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<SubaccountAPI.UserDebtAssetPool>;

  /**
   * Error data. Guaranteed `null` for successful response.
   */
  error: null;

  /**
   * HTTP status. Successful responses are guaranteed to be < `400`. Conversely,
   * error responses are guaranteed to be >= `400`.
   */
  status: number;

  /**
   * HTTP status text
   */
  status_text: string;
}

export interface BorrowGetPortfolioResponse {
  data: UserBorrowMarket;

  /**
   * Error data. Guaranteed `null` for successful response.
   */
  error: null;

  /**
   * HTTP status. Successful responses are guaranteed to be < `400`. Conversely,
   * error responses are guaranteed to be >= `400`.
   */
  status: number;

  /**
   * HTTP status text
   */
  status_text: string;
}

export interface BorrowGetCollateralAccountsByAssetParams {
  /**
   * Asset ID for lookup
   */
  asset_id: string;

  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface BorrowGetCollateralTotalsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface BorrowGetDebtAccountsByAssetParams {
  /**
   * Asset ID for lookup
   */
  asset_id: string;

  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface BorrowGetDebtsTotalsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
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

Borrow.Subaccount = Subaccount;

export declare namespace Borrow {
  export {
    type UserBorrowMarket as UserBorrowMarket,
    type UserBorrowMarketPools as UserBorrowMarketPools,
    type BorrowGetCollateralAccountsByAssetResponse as BorrowGetCollateralAccountsByAssetResponse,
    type BorrowGetCollateralTotalsResponse as BorrowGetCollateralTotalsResponse,
    type BorrowGetDebtAccountsByAssetResponse as BorrowGetDebtAccountsByAssetResponse,
    type BorrowGetDebtsTotalsResponse as BorrowGetDebtsTotalsResponse,
    type BorrowGetPortfolioResponse as BorrowGetPortfolioResponse,
    type BorrowGetCollateralAccountsByAssetParams as BorrowGetCollateralAccountsByAssetParams,
    type BorrowGetCollateralTotalsParams as BorrowGetCollateralTotalsParams,
    type BorrowGetDebtAccountsByAssetParams as BorrowGetDebtAccountsByAssetParams,
    type BorrowGetDebtsTotalsParams as BorrowGetDebtsTotalsParams,
    type BorrowGetPortfolioParams as BorrowGetPortfolioParams,
  };

  export {
    Subaccount as Subaccount,
    type UserAccountHealth as UserAccountHealth,
    type UserBorrowMarketAccount as UserBorrowMarketAccount,
    type UserCollateralAccountPool as UserCollateralAccountPool,
    type UserCollateralAssetPool as UserCollateralAssetPool,
    type UserDebtAccountPool as UserDebtAccountPool,
    type UserDebtAssetPool as UserDebtAssetPool,
    type SubaccountGetSubaccountResponse as SubaccountGetSubaccountResponse,
    type SubaccountGetSubaccountCollateralsResponse as SubaccountGetSubaccountCollateralsResponse,
    type SubaccountGetSubaccountDebtsResponse as SubaccountGetSubaccountDebtsResponse,
    type SubaccountGetSubaccountHealthResponse as SubaccountGetSubaccountHealthResponse,
    type SubaccountGetSubaccountParams as SubaccountGetSubaccountParams,
    type SubaccountGetSubaccountCollateralsParams as SubaccountGetSubaccountCollateralsParams,
    type SubaccountGetSubaccountDebtsParams as SubaccountGetSubaccountDebtsParams,
    type SubaccountGetSubaccountHealthParams as SubaccountGetSubaccountHealthParams,
  };
}
