// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as LendAPI from './lend';
import {
  Lend as LendAPILend,
  LendGetByAssetParams,
  LendGetByAssetResponse,
  LendListParams,
  LendListResponse,
  UserLendAssetPool,
  UserLendMarket,
  UserLendOriginAmounts,
  UserLendReceiptAmounts,
} from './lend';
import * as BorrowAPI from './borrow/borrow';
import {
  Borrow,
  BorrowGetCollateralAccountsByAssetParams,
  BorrowGetCollateralAccountsByAssetResponse,
  BorrowGetCollateralTotalsParams,
  BorrowGetCollateralTotalsResponse,
  BorrowGetDebtAccountsByAssetParams,
  BorrowGetDebtAccountsByAssetResponse,
  BorrowGetDebtsTotalsParams,
  BorrowGetDebtsTotalsResponse,
  BorrowGetPortfolioParams,
  BorrowGetPortfolioResponse,
  UserBorrowMarket,
  UserBorrowMarketPools,
} from './borrow/borrow';
import * as SubaccountAPI from './borrow/subaccount';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Market extends APIResource {
  lend: LendAPI.Lend = new LendAPI.Lend(this._client);
  borrow: BorrowAPI.Borrow = new BorrowAPI.Borrow(this._client);

  /**
   * Get user markets for all kinds (lend + borrow debt/collateral), grouped together
   * by asset
   */
  getMerged(
    address: string,
    query: MarketGetMergedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketGetMergedResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/merged`, { query, ...options });
  }

  /**
   * Get user's markets (lend + borrow debt/collateral) for a specific asset
   */
  getMergedByAsset(
    address: string,
    query: MarketGetMergedByAssetParams,
    options?: RequestOptions,
  ): APIPromise<MarketGetMergedByAssetResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/merged/lookup`, { query, ...options });
  }

  /**
   * Get user market portfolio
   */
  getPortfolio(
    address: string,
    query: MarketGetPortfolioParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketGetPortfolioResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets`, { query, ...options });
  }
}

export interface UserMarket {
  /**
   * Overview of user borrowing portfolio
   */
  borrow: BorrowAPI.UserBorrowMarket;

  /**
   * Overview of user lending portfolio
   */
  lend: LendAPI.UserLendMarket;
}

/**
 * User market allocations grouped by asset.
 *
 * **Note**: because of the inverted structure of merged market accounts, account
 * health cannot be represented and is excluded in the merged structures.
 */
export interface UserMergedMarket {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * User collateral contribution for asset in borrow market, listed by subaccount
   */
  borrow_collateral: Array<SubaccountAPI.UserCollateralAccountPool>;

  /**
   * User debt contribution for asset in borrow market, listed by subaccount
   */
  borrow_debt: Array<SubaccountAPI.UserDebtAccountPool>;

  /**
   * User contribution for asset's lending market, if one exists
   */
  lend?: UserMergedMarket.Lend | null;
}

export namespace UserMergedMarket {
  /**
   * User contribution for asset's lending market, if one exists
   */
  export interface Lend {
    /**
     * The lending amounts converted into the equivalent for the receipt token's
     * origin/source asset
     */
    origin_equivalent: LendAPI.UserLendOriginAmounts;

    /**
     * The lending amounts in the original receipt token amounts
     */
    receipt_amounts: LendAPI.UserLendReceiptAmounts;
  }
}

export interface MarketGetMergedResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<UserMergedMarket>;

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

export interface MarketGetMergedByAssetResponse {
  /**
   * User market allocations grouped by asset.
   *
   * **Note**: because of the inverted structure of merged market accounts, account
   * health cannot be represented and is excluded in the merged structures.
   */
  data: UserMergedMarket;

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

export interface MarketGetPortfolioResponse {
  data: UserMarket;

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

export interface MarketGetMergedParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface MarketGetMergedByAssetParams {
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

export interface MarketGetPortfolioParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

Market.Lend = LendAPILend;
Market.Borrow = Borrow;

export declare namespace Market {
  export {
    type UserMarket as UserMarket,
    type UserMergedMarket as UserMergedMarket,
    type MarketGetMergedResponse as MarketGetMergedResponse,
    type MarketGetMergedByAssetResponse as MarketGetMergedByAssetResponse,
    type MarketGetPortfolioResponse as MarketGetPortfolioResponse,
    type MarketGetMergedParams as MarketGetMergedParams,
    type MarketGetMergedByAssetParams as MarketGetMergedByAssetParams,
    type MarketGetPortfolioParams as MarketGetPortfolioParams,
  };

  export {
    LendAPILend as Lend,
    type UserLendAssetPool as UserLendAssetPool,
    type UserLendMarket as UserLendMarket,
    type UserLendOriginAmounts as UserLendOriginAmounts,
    type UserLendReceiptAmounts as UserLendReceiptAmounts,
    type LendListResponse as LendListResponse,
    type LendGetByAssetResponse as LendGetByAssetResponse,
    type LendListParams as LendListParams,
    type LendGetByAssetParams as LendGetByAssetParams,
  };

  export {
    Borrow as Borrow,
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
}
