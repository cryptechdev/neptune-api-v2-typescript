// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketsAPI from './markets';
import * as AssetsAPI from '../assets';
import * as LendAPI from './lend';
import {
  AssetRateHistory,
  Lend,
  LendGetLendingMarketsParams,
  LendGetLendingMarketsResponse,
  LendGetRateHistoryParams,
  LendGetRateHistoryResponse,
  LendLookupByAssetParams,
  LendLookupByAssetResponse,
  LendMarket,
  LendMarketState,
  MarketRate,
} from './lend';
import * as MergedAPI from './merged';
import {
  Merged,
  MergedGetMergedDataParams,
  MergedGetMergedDataResponse,
  MergedLookupByAssetParams,
  MergedLookupByAssetResponse,
  MergedMarket,
} from './merged';
import * as BorrowAPI from './borrow/borrow';
import {
  Borrow,
  BorrowGetBorrowRateHistoryParams,
  BorrowGetBorrowRateHistoryResponse,
  BorrowMarketOverview,
  BorrowOverviewParams,
  BorrowOverviewResponse,
} from './borrow/borrow';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Markets extends APIResource {
  merged: MergedAPI.Merged = new MergedAPI.Merged(this._client);
  lend: LendAPI.Lend = new LendAPI.Lend(this._client);
  borrow: BorrowAPI.Borrow = new BorrowAPI.Borrow(this._client);

  /**
   * Get market params
   */
  getMarketParams(
    query: MarketGetMarketParamsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketGetMarketParamsResponse> {
    return this._client.get('/api/v1/markets/config', { query, ...options });
  }

  /**
   * Get market overview
   */
  overview(
    query: MarketOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketOverviewResponse> {
    return this._client.get('/api/v1/markets', { query, ...options });
  }
}

/**
 * `GlobalMarketConfig`
 */
export interface GlobalMarketConfig {
  /**
   * The required change in account health below 1.0 to achieve the maximum discount.
   * should be ~= 0.02 must be <= 1.0
   */
  dynamic_discount_width: string;

  extra: GlobalMarketConfig.Extra;

  /**
   * The coefficient used to calculate the flash loan fee. should be ~= 0.01 must be
   * <= 1.0
   */
  flash_loan_fee: string;

  /**
   * Whether flash loans are enabled or not
   */
  flash_loans_enabled: boolean;

  /**
   * `AssetSpec`
   *
   * Provides a unique identifier for an asset for use throughout the Neptune API.
   * IDs are unique across asset domains (contract tokens, native denoms, etc)
   */
  hinj: AssetsAPI.AssetSpec;

  /**
   * The coefficient use to calculate the liquidation protocol fee. should be ~= 0.01
   * must be <= 1.0
   */
  liquidation_fee: string;

  /**
   * `AssetSpec`
   *
   * Provides a unique identifier for an asset for use throughout the Neptune API.
   * IDs are unique across asset domains (contract tokens, native denoms, etc)
   */
  nept: AssetsAPI.AssetSpec;

  /**
   * Minimum account value to avoid complete liquidation.
   */
  partial_liquidation_threshold: string;

  /**
   * The required ratio of weighted staked NEPT to collateral value to obtain the
   * maximum staking health modifier. should be ~= 0.1 must be <= 1.0
   */
  stake_collateral_ratio: string;

  /**
   * The required ratio of weighted staked NEPT to flash loan value should be ~= 0.05
   * must be <= 1.0
   */
  stake_flash_loan_ratio: string;

  /**
   * The maximum health increase provided by staking. should be ~= 0.05 and must be
   * <= 1.0
   */
  staking_health_modifier: string;

  /**
   * The account health target for a liquidation. should be ~= 1.02 must be >= 1.0
   */
  target_liquidation_health: string;

  /**
   * Number of nanoseconds that an oracle price is valid for.
   */
  time_window_nanos: number;
}

export namespace GlobalMarketConfig {
  export interface Extra {
    /**
     * Human-readable field variants. Must provide `?with-text=true`
     */
    text?: Extra.Text | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Must provide `?with-text=true`
     */
    export interface Text {
      flash_loan_fee: string;

      liquidation_fee: string;

      stake_collateral_ratio: string;

      stake_flash_loan_ratio: string;

      staking_health_modifier: string;

      time_window_nanos: string;
    }
  }
}

export interface MarketGetMarketParamsResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `GlobalMarketConfig`
   */
  data?: GlobalMarketConfig | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface MarketOverviewResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `MarketOverview`
   */
  data?: MarketOverviewResponse.Data | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace MarketOverviewResponse {
  /**
   * `MarketOverview`
   */
  export interface Data {
    /**
     * `BorrowMarketOverview`
     */
    borrow: BorrowAPI.BorrowMarketOverview;

    /**
     * `GlobalMarketConfig`
     */
    global_config: MarketsAPI.GlobalMarketConfig;

    /**
     * `LendMarket[]`
     *
     * ---
     *
     * Current lending markets
     */
    lend: Array<LendAPI.LendMarket>;
  }
}

export interface MarketGetMarketParamsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;
}

export interface MarketOverviewParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

Markets.Merged = Merged;
Markets.Lend = Lend;
Markets.Borrow = Borrow;

export declare namespace Markets {
  export {
    type GlobalMarketConfig as GlobalMarketConfig,
    type MarketGetMarketParamsResponse as MarketGetMarketParamsResponse,
    type MarketOverviewResponse as MarketOverviewResponse,
    type MarketGetMarketParamsParams as MarketGetMarketParamsParams,
    type MarketOverviewParams as MarketOverviewParams,
  };

  export {
    Merged as Merged,
    type MergedMarket as MergedMarket,
    type MergedGetMergedDataResponse as MergedGetMergedDataResponse,
    type MergedLookupByAssetResponse as MergedLookupByAssetResponse,
    type MergedGetMergedDataParams as MergedGetMergedDataParams,
    type MergedLookupByAssetParams as MergedLookupByAssetParams,
  };

  export {
    Lend as Lend,
    type AssetRateHistory as AssetRateHistory,
    type LendMarket as LendMarket,
    type LendMarketState as LendMarketState,
    type MarketRate as MarketRate,
    type LendGetLendingMarketsResponse as LendGetLendingMarketsResponse,
    type LendGetRateHistoryResponse as LendGetRateHistoryResponse,
    type LendLookupByAssetResponse as LendLookupByAssetResponse,
    type LendGetLendingMarketsParams as LendGetLendingMarketsParams,
    type LendGetRateHistoryParams as LendGetRateHistoryParams,
    type LendLookupByAssetParams as LendLookupByAssetParams,
  };

  export {
    Borrow as Borrow,
    type BorrowMarketOverview as BorrowMarketOverview,
    type BorrowGetBorrowRateHistoryResponse as BorrowGetBorrowRateHistoryResponse,
    type BorrowOverviewResponse as BorrowOverviewResponse,
    type BorrowGetBorrowRateHistoryParams as BorrowGetBorrowRateHistoryParams,
    type BorrowOverviewParams as BorrowOverviewParams,
  };
}
