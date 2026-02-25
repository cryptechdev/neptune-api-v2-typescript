// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as LendAPI from './lend';
import {
  Lend as LendAPILend,
  LendGetPortfolioParams,
  LendGetPortfolioResponse,
  LendLookupDistributionParams,
  LendLookupDistributionResponse,
  UserDebtAssetPool,
} from './lend';
import * as MergedAPI from './merged';
import {
  Merged,
  MergedGetAllMarketsParams,
  MergedGetAllMarketsResponse,
  MergedLookupByAssetParams,
  MergedLookupByAssetResponse,
  UserMergedMarket,
} from './merged';
import * as AccountsAPI from './borrow/accounts';
import * as BorrowAPI from './borrow/borrow';
import {
  Borrow as BorrowAPIBorrow,
  BorrowGetPortfolioParams,
  BorrowGetPortfolioResponse,
} from './borrow/borrow';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Markets extends APIResource {
  lend: LendAPI.Lend = new LendAPI.Lend(this._client);
  borrow: BorrowAPI.Borrow = new BorrowAPI.Borrow(this._client);
  merged: MergedAPI.Merged = new MergedAPI.Merged(this._client);

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

/**
 * `UserMarket`
 */
export interface UserMarket {
  /**
   * `UserBorrowMarket`
   */
  borrow: UserMarket.Borrow;

  /**
   * `UserLendMarket`
   */
  lend: UserMarket.Lend;
}

export namespace UserMarket {
  /**
   * `UserBorrowMarket`
   */
  export interface Borrow {
    /**
     * `UserBorrowMarketAccount[]`
     *
     * ---
     *
     * Market sub-accounts for the user
     */
    accounts: Array<AccountsAPI.UserBorrowMarketAccount>;

    /**
     * `UserMarketTotalsData[]`
     *
     * ---
     *
     * Collateral/debt totals of all sub-accounts by asset
     */
    totals: Borrow.Totals;
  }

  export namespace Borrow {
    /**
     * `UserMarketTotalsData[]`
     *
     * ---
     *
     * Collateral/debt totals of all sub-accounts by asset
     */
    export interface Totals {
      /**
       * `UserCollateralAssetPool[]`
       *
       * ---
       *
       * Account collateral allocations
       */
      collaterals: Array<AccountsAPI.UserCollateralAssetPool>;

      /**
       * `UserDebtAssetPool[]`
       *
       * ---
       *
       * Account debt allocations
       */
      debts: Array<LendAPI.UserDebtAssetPool>;
    }
  }

  /**
   * `UserLendMarket`
   */
  export interface Lend {
    /**
     * `UserLendAssetPool[]`
     *
     * ---
     *
     * User lending allocations
     */
    asset_pools: Array<LendAPI.UserDebtAssetPool>;
  }
}

export interface MarketGetPortfolioResponse {
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
  data?: UserMarket | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
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

Markets.Lend = LendAPILend;
Markets.Borrow = BorrowAPIBorrow;
Markets.Merged = Merged;

export declare namespace Markets {
  export {
    type UserMarket as UserMarket,
    type MarketGetPortfolioResponse as MarketGetPortfolioResponse,
    type MarketGetPortfolioParams as MarketGetPortfolioParams,
  };

  export {
    LendAPILend as Lend,
    type UserDebtAssetPool as UserDebtAssetPool,
    type LendGetPortfolioResponse as LendGetPortfolioResponse,
    type LendLookupDistributionResponse as LendLookupDistributionResponse,
    type LendGetPortfolioParams as LendGetPortfolioParams,
    type LendLookupDistributionParams as LendLookupDistributionParams,
  };

  export {
    BorrowAPIBorrow as Borrow,
    type BorrowGetPortfolioResponse as BorrowGetPortfolioResponse,
    type BorrowGetPortfolioParams as BorrowGetPortfolioParams,
  };

  export {
    Merged as Merged,
    type UserMergedMarket as UserMergedMarket,
    type MergedGetAllMarketsResponse as MergedGetAllMarketsResponse,
    type MergedLookupByAssetResponse as MergedLookupByAssetResponse,
    type MergedGetAllMarketsParams as MergedGetAllMarketsParams,
    type MergedLookupByAssetParams as MergedLookupByAssetParams,
  };
}
