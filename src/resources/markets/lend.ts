// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetsAPI from '../assets';
import { AssetRateHistorySeriesIntervalMultiPage } from '../assets';
import * as CoreAPI from '../core';
import * as MarketsAPI from './markets';
import { APIPromise } from '../../core/api-promise';
import { IntervalMultiPage, type IntervalMultiPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Lend extends APIResource {
  /**
   * Get lending markets
   */
  list(
    query: LendListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LendListResponse> {
    return this._client.get('/api/v1/markets/lend', { query, ...options });
  }

  /**
   * Lookup lending market by asset
   */
  getByAsset(query: LendGetByAssetParams, options?: RequestOptions): APIPromise<LendGetByAssetResponse> {
    return this._client.get('/api/v1/markets/lend/lookup', { query, ...options });
  }

  /**
   * Get historical lending rates for assets
   */
  getRateHistory(
    query: LendGetRateHistoryParams,
    options?: RequestOptions,
  ): PagePromise<AssetRateHistorySeriesIntervalMultiPage, AssetsAPI.AssetRateHistory.Series> {
    return this._client.getAPIList(
      '/api/v1/markets/lend/rate-history',
      IntervalMultiPage<AssetsAPI.AssetRateHistory.Series>,
      { query, ...options },
    );
  }
}

/**
 * Lending market overview
 */
export interface LendMarket {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * Lending market rates
   */
  rate: MarketsAPI.MarketRate;

  /**
   * Current lending market state
   */
  state: LendMarketState;
}

export interface LendMarketData {
  /**
   * Lending market rates
   */
  rate: MarketsAPI.MarketRate;

  /**
   * Current lending market state
   */
  state: LendMarketState;
}

export interface LendMarketState {
  extra: LendMarketState.Extra;

  /**
   * The total amount of the asset deposited for lending in the market.
   */
  principal_sum: string;

  receipt_total_supply: string;

  redemption_ratio: string;
}

export namespace LendMarketState {
  export interface Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    text: Extra.Text | null;

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     *
     * ### Note
     *
     * This variant group contains an additional `price` field (set to the number used
     * in value calculation).
     *
     * The embedded text group will contain the text variant if `with_text` was
     * specified as well.
     */
    value: Extra.Value | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    export interface Text {
      principal_sum: string;

      receipt_total_supply: string;

      redemption_ratio: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     *
     * ### Note
     *
     * This variant group contains an additional `price` field (set to the number used
     * in value calculation).
     *
     * The embedded text group will contain the text variant if `with_text` was
     * specified as well.
     */
    export interface Value {
      extra: Value.Extra;

      /**
       * Price used in value calculations
       */
      price: string;

      principal_sum: string;
    }

    export namespace Value {
      export interface Extra {
        /**
         * Human-readable variants of USD values. Will not be null when query params
         * `with_text` and `with_value` are `true`.
         */
        text: Extra.Text | null;
      }

      export namespace Extra {
        /**
         * Human-readable variants of USD values. Will not be null when query params
         * `with_text` and `with_value` are `true`.
         */
        export interface Text {
          /**
           * Text representation of price
           */
          price: string;

          principal_sum: string;
        }
      }
    }
  }
}

export interface LendListResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<LendMarket>;

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

export interface LendGetByAssetResponse {
  /**
   * Lending market overview
   */
  data: LendMarket;

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

export interface LendListParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface LendGetByAssetParams {
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

export interface LendGetRateHistoryParams extends IntervalMultiPageParams {
  /**
   * End timestamp for interval range (inclusive)
   *
   * Must be provided as unix timestamp (in seconds)
   */
  end: number;

  /**
   * Interval period
   *
   * Values:
   *
   * - `h`: Hourly
   * - `d`: Daily (accounts for offsets introduced by DST)
   * - `w`: Weekly (provided for convenience, equivalent to 7d)
   * - `m`: Monthly (accounts for varying # of days per month)
   * - `y`: Yearly (accounts for varying # of days per year)
   *
   * E.g. for interval buckets of 2h `interval=2&period=h`
   */
  period: CoreAPI.IntervalUnit;

  /**
   * Start timestamp for interval range (inclusive)
   *
   * Must be provided as unix timestamp (in seconds)
   */
  start: number;

  /**
   * Optional comma-separated list of asset IDs to filter for. If excluded, values
   * will be returned for all assets.
   */
  asset_ids?: string | null;

  /**
   * Interval value
   *
   * E.g. for interval buckets of 2h: `interval=2&period=h`
   */
  interval?: number;
}

export declare namespace Lend {
  export {
    type LendMarket as LendMarket,
    type LendMarketData as LendMarketData,
    type LendMarketState as LendMarketState,
    type LendListResponse as LendListResponse,
    type LendGetByAssetResponse as LendGetByAssetResponse,
    type LendListParams as LendListParams,
    type LendGetByAssetParams as LendGetByAssetParams,
    type LendGetRateHistoryParams as LendGetRateHistoryParams,
  };
}

export { type AssetRateHistorySeriesIntervalMultiPage };
