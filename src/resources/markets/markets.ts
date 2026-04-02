// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MarketsAPI from './markets';
import * as AssetsAPI from '../assets';
import * as LendAPI from './lend';
import {
  Lend,
  LendGetByAssetParams,
  LendGetByAssetResponse,
  LendGetRateHistoryParams,
  LendListParams,
  LendListResponse,
  LendMarket,
  LendMarketData,
  LendMarketState,
} from './lend';
import * as BorrowAPI from './borrow/borrow';
import {
  Borrow,
  BorrowGetOverviewParams,
  BorrowGetOverviewResponse,
  BorrowGetRateHistoryParams,
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

export interface MarketRate {
  /**
   * Market rate in APR standard as a decimal percentage
   */
  apr: string;

  /**
   * Market rate in APY standard as a decimal percentage
   */
  apy: string;

  extra: MarketRate.Extra;
}

export namespace MarketRate {
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
      apr: string;

      apy: string;
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
  borrow_collateral: CollateralsAPI.BorrowCollateralMarketData | null;

  /**
   * Info for asset as debt for borrow market, if one exists
   */
  borrow_debt: DebtsAPI.BorrowDebtMarketData | null;

  /**
   * Info for asset's lending market, if one exists
   */
  lend: LendAPI.LendMarketData | null;
}

export interface MarketGetMergedResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

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

export interface MarketGetMergedByAssetResponse {
  /**
   * Data for all of an assets markets
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

export interface MarketGetOverviewResponse {
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

export interface MarketGetParamsResponse {
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

Markets.Lend = Lend;
Markets.Borrow = Borrow;

export declare namespace Markets {
  export {
    type GlobalMarketConfig as GlobalMarketConfig,
    type MarketRate as MarketRate,
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
    Lend as Lend,
    type LendMarket as LendMarket,
    type LendMarketData as LendMarketData,
    type LendMarketState as LendMarketState,
    type LendListResponse as LendListResponse,
    type LendGetByAssetResponse as LendGetByAssetResponse,
    type LendListParams as LendListParams,
    type LendGetByAssetParams as LendGetByAssetParams,
    type LendGetRateHistoryParams as LendGetRateHistoryParams,
  };

  export {
    Borrow as Borrow,
    type BorrowMarketOverview as BorrowMarketOverview,
    type BorrowGetOverviewResponse as BorrowGetOverviewResponse,
    type BorrowGetOverviewParams as BorrowGetOverviewParams,
    type BorrowGetRateHistoryParams as BorrowGetRateHistoryParams,
  };
}
