// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MarketsAPI from './markets';
import * as AssetsAPI from '../assets';
import * as CoreAPI from '../core';
import * as LendAPI from './lend';
import {
  Lend as LendAPILend,
  LendGetByAssetParams,
  LendGetByAssetResponse,
  LendGetRateHistoryParams,
  LendGetRateHistoryResponse,
  LendListParams,
  LendListResponse,
  LendMarket,
  LendMarketState,
  MarketRate,
} from './lend';
import * as BorrowAPI from './borrow/borrow';
import {
  Borrow,
  BorrowGetOverviewParams,
  BorrowGetOverviewResponse,
  BorrowGetRateHistoryParams,
  BorrowGetRateHistoryResponse,
  BorrowMarketOverview,
} from './borrow/borrow';
import * as CollateralsAPI from './borrow/collaterals';
import * as DebtsAPI from './borrow/debts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Markets extends APIResource {
  lend: LendAPI.Lend = new LendAPI.Lend(this._client);
  borrow: BorrowAPI.Borrow = new BorrowAPI.Borrow(this._client);

  /**
   * Get lend/collateral/debt grouped by asset
   */
  getMerged(
    query: MarketGetMergedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketGetMergedResponse> {
    return this._client.get('/api/v1/markets/merged', { query, ...options });
  }

  /**
   * Lookup merged market data by asset
   */
  getMergedByAsset(
    query: MarketGetMergedByAssetParams,
    options?: RequestOptions,
  ): APIPromise<MarketGetMergedByAssetResponse> {
    return this._client.get('/api/v1/markets/merged/lookup', { query, ...options });
  }

  /**
   * Get market overview
   */
  getOverview(
    query: MarketGetOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketGetOverviewResponse> {
    return this._client.get('/api/v1/markets', { query, ...options });
  }

  /**
   * Get market params
   */
  getParams(
    query: MarketGetParamsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketGetParamsResponse> {
    return this._client.get('/api/v1/markets/config', { query, ...options });
  }
}

/**
 * Historical rates for assets
 */
export interface AssetRateHistory {
  /**
   * Values used for paginating the time series data
   */
  pagination: AssetRateHistory.Pagination;

  /**
   * Provides values for the requested range in it's entire width, regardless of
   * page/limit.
   */
  range: AssetRateHistory.Range;

  /**
   * Pairs of items and their associated points
   */
  series: Array<AssetRateHistory.Series>;
}

export namespace AssetRateHistory {
  /**
   * Values used for paginating the time series data
   */
  export interface Pagination {
    /**
     * The total number of intervals/buckets for the provided interval parameters
     * (size, period, start, end)
     */
    interval_count: number;

    /**
     * The offset a client should use to fetch the next page of intervals (so long as
     * limit remains unchanged)
     */
    next_offset: number | null;
  }

  /**
   * Provides values for the requested range in it's entire width, regardless of
   * page/limit.
   */
  export interface Range {
    end: string;

    /**
     * Interval period & size
     */
    interval: CoreAPI.Interval;

    start: string;
  }

  export interface Series {
    /**
     * Provides a unique identifier for an asset for use throughout the Neptune API.
     * IDs are unique across asset domains (contract tokens, native denoms, etc)
     */
    asset: AssetsAPI.AssetSpec;

    points: Array<Series.Point>;
  }

  export namespace Series {
    /**
     * Time + value pair representing a point in time for use with time series
     */
    export interface Point {
      t: string;

      v: string | null;
    }
  }
}

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
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    text: Extra.Text | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
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

/**
 * Data for all of an assets markets
 */
export interface MergedMarket {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * Info for asset as collateral for borrow market, if one exists
   */
  borrow_collateral: MergedMarket.BorrowCollateral | null;

  /**
   * Info for asset as debt for borrow market, if one exists
   */
  borrow_debt: MergedMarket.BorrowDebt | null;

  /**
   * Info for asset's lending market, if one exists
   */
  lend: MergedMarket.Lend | null;
}

export namespace MergedMarket {
  /**
   * Info for asset as collateral for borrow market, if one exists
   */
  export interface BorrowCollateral {
    /**
     * Collateral configuration parameters
     */
    config: CollateralsAPI.BorrowCollateralConfig;

    /**
     * Current collateral state
     */
    state: CollateralsAPI.BorrowCollateralState;
  }

  /**
   * Info for asset as debt for borrow market, if one exists
   */
  export interface BorrowDebt {
    /**
     * Debt market configuration parameters
     */
    config: DebtsAPI.BorrowDebtConfig;

    /**
     * Market rates
     */
    rate: LendAPI.MarketRate | null;

    /**
     * Current debt market state
     */
    state: DebtsAPI.BorrowDebtState;
  }

  /**
   * Info for asset's lending market, if one exists
   */
  export interface Lend {
    /**
     * Lending market rates
     */
    rate: LendAPI.MarketRate | null;

    /**
     * Current lending market state
     */
    state: LendAPI.LendMarketState;
  }
}

/**
 * List data success response
 */
export interface MarketGetMergedResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  /**
   * Primary response content (list)
   */
  data: Array<MergedMarket>;

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

/**
 * Object data success response
 */
export interface MarketGetMergedByAssetResponse {
  /**
   * Primary response content (object)
   */
  data: MergedMarket;

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

/**
 * Object data success response
 */
export interface MarketGetOverviewResponse {
  /**
   * Primary response content (object)
   */
  data: MarketGetOverviewResponse.Data;

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

export namespace MarketGetOverviewResponse {
  /**
   * Primary response content (object)
   */
  export interface Data {
    /**
     * Borrow market overview
     */
    borrow: BorrowAPI.BorrowMarketOverview;

    /**
     * Market runtime parameters
     */
    global_config: MarketsAPI.GlobalMarketConfig;

    /**
     * Current lending markets
     */
    lend: Array<LendAPI.LendMarket>;
  }
}

/**
 * Object data success response
 */
export interface MarketGetParamsResponse {
  /**
   * Primary response content (object)
   */
  data: GlobalMarketConfig;

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

export interface MarketGetOverviewParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface MarketGetParamsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;
}

Markets.Lend = LendAPILend;
Markets.Borrow = Borrow;

export declare namespace Markets {
  export {
    type AssetRateHistory as AssetRateHistory,
    type GlobalMarketConfig as GlobalMarketConfig,
    type MergedMarket as MergedMarket,
    type MarketGetMergedResponse as MarketGetMergedResponse,
    type MarketGetMergedByAssetResponse as MarketGetMergedByAssetResponse,
    type MarketGetOverviewResponse as MarketGetOverviewResponse,
    type MarketGetParamsResponse as MarketGetParamsResponse,
    type MarketGetMergedParams as MarketGetMergedParams,
    type MarketGetMergedByAssetParams as MarketGetMergedByAssetParams,
    type MarketGetOverviewParams as MarketGetOverviewParams,
    type MarketGetParamsParams as MarketGetParamsParams,
  };

  export {
    LendAPILend as Lend,
    type LendMarket as LendMarket,
    type LendMarketState as LendMarketState,
    type MarketRate as MarketRate,
    type LendListResponse as LendListResponse,
    type LendGetByAssetResponse as LendGetByAssetResponse,
    type LendGetRateHistoryResponse as LendGetRateHistoryResponse,
    type LendListParams as LendListParams,
    type LendGetByAssetParams as LendGetByAssetParams,
    type LendGetRateHistoryParams as LendGetRateHistoryParams,
  };

  export {
    Borrow as Borrow,
    type BorrowMarketOverview as BorrowMarketOverview,
    type BorrowGetOverviewResponse as BorrowGetOverviewResponse,
    type BorrowGetRateHistoryResponse as BorrowGetRateHistoryResponse,
    type BorrowGetOverviewParams as BorrowGetOverviewParams,
    type BorrowGetRateHistoryParams as BorrowGetRateHistoryParams,
  };
}
