// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../assets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Lend extends APIResource {
  /**
   * Get lending markets
   */
  getLendingMarkets(
    query: LendGetLendingMarketsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LendGetLendingMarketsResponse> {
    return this._client.get('/api/v1/markets/lend', { query, ...options });
  }

  /**
   * Get historical lending rates for assets
   */
  getRateHistory(
    query: LendGetRateHistoryParams,
    options?: RequestOptions,
  ): APIPromise<LendGetRateHistoryResponse> {
    return this._client.get('/api/v1/markets/lend/rate-history', { query, ...options });
  }

  /**
   * Lookup lending market by asset
   */
  lookupByAsset(
    query: LendLookupByAssetParams,
    options?: RequestOptions,
  ): APIPromise<LendLookupByAssetResponse> {
    return this._client.get('/api/v1/markets/lend/lookup', { query, ...options });
  }
}

/**
 * `AssetRateHistory`
 *
 * ---
 *
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
    next_offset?: number | null;
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
    interval: AssetsAPI.Interval;

    start: string;
  }

  export interface Series {
    /**
     * `AssetSpec`
     *
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

      v?: string | null;
    }
  }
}

/**
 * `LendMarket`
 */
export interface LendMarket {
  /**
   * `AssetInfo`
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * `LendMarketState`
   */
  state: LendMarketState;

  /**
   * `MarketRate`
   */
  rate?: MarketRate | null;
}

/**
 * `LendMarketState`
 */
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
     * Human-readable field variants. Must provide `?with-text=true`
     */
    text?: Extra.Text | null;

    /**
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
     */
    value?: Extra.Value | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Must provide `?with-text=true`
     */
    export interface Text {
      principal_sum: string;

      receipt_total_supply: string;

      redemption_ratio: string;
    }

    /**
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
     */
    export interface Value {
      extra: Value.Extra;

      principal_sum: string;
    }

    export namespace Value {
      export interface Extra {
        /**
         * Human-readable variants of USD values. Must provide
         * `?with-text=true&with-value=true`
         */
        text?: Extra.Text | null;
      }

      export namespace Extra {
        /**
         * Human-readable variants of USD values. Must provide
         * `?with-text=true&with-value=true`
         */
        export interface Text {
          principal_sum: string;
        }
      }
    }
  }
}

/**
 * `MarketRate`
 */
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
     * Human-readable field variants. Must provide `?with-text=true`
     */
    text?: Extra.Text | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Must provide `?with-text=true`
     */
    export interface Text {
      apr: string;

      apy: string;
    }
  }
}

export interface LendGetLendingMarketsResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * Total number of objects in all pages
   */
  count?: number | null;

  /**
   * List contents
   */
  data?: Array<LendMarket> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface LendGetRateHistoryResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `AssetRateHistory`
   *
   * ---
   *
   * Historical rates for assets
   */
  data?: AssetRateHistory | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface LendLookupByAssetResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `LendMarket`
   */
  data?: LendMarket | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface LendGetLendingMarketsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface LendGetRateHistoryParams {
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
  period: AssetsAPI.IntervalUnit;

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
  asset_ids?: string;

  /**
   * Interval value
   *
   * E.g. for interval buckets of 2h: `interval=2&period=h`
   */
  interval?: number;

  /**
   * Maximum number of time buckets/intervals to return.
   *
   * For responses with multiple series, this limit is applied to each series
   * individually rather than accumulating across series. This is a limit of returned
   * _interval sections_, it is **not** a limit of returned _points_. In other words,
   * `limit=200` will provide 200 time points for a single series. For multi-series
   * responses, each series will also see the exact same set of 200 time points.
   */
  limit?: number;

  /**
   * Time series bucket offset
   */
  offset?: number;
}

export interface LendLookupByAssetParams {
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

export declare namespace Lend {
  export {
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
}
