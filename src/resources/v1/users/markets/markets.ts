// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as LendAPI from './lend';
import {
  Lend as LendAPILend,
  LendListParams,
  LendListResponse,
  LendRetrieveLookupParams,
  LendRetrieveLookupResponse,
  UserDebtAssetPool,
} from './lend';
import * as MergedAPI from './merged';
import {
  Merged,
  MergedListParams,
  MergedListResponse,
  MergedRetrieveLookupParams,
  MergedRetrieveLookupResponse,
  UserMergedMarket,
} from './merged';
import * as AccountsAPI from './borrow/accounts';
import * as BorrowAPI from './borrow/borrow';
import { Borrow as BorrowAPIBorrow, BorrowListParams, BorrowListResponse } from './borrow/borrow';
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
  list(
    address: string,
    query: MarketListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketListResponse> {
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

export interface MarketListResponse {
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

export interface MarketListParams {
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
    type MarketListResponse as MarketListResponse,
    type MarketListParams as MarketListParams,
  };

  export {
    LendAPILend as Lend,
    type UserDebtAssetPool as UserDebtAssetPool,
    type LendListResponse as LendListResponse,
    type LendRetrieveLookupResponse as LendRetrieveLookupResponse,
    type LendListParams as LendListParams,
    type LendRetrieveLookupParams as LendRetrieveLookupParams,
  };

  export {
    BorrowAPIBorrow as Borrow,
    type BorrowListResponse as BorrowListResponse,
    type BorrowListParams as BorrowListParams,
  };

  export {
    Merged as Merged,
    type UserMergedMarket as UserMergedMarket,
    type MergedListResponse as MergedListResponse,
    type MergedRetrieveLookupResponse as MergedRetrieveLookupResponse,
    type MergedListParams as MergedListParams,
    type MergedRetrieveLookupParams as MergedRetrieveLookupParams,
  };
}
