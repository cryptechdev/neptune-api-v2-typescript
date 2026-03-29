// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AssetsAPI from './assets';
import * as CoreAPI from './core';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Assets extends APIResource {
  /**
   * Get info for all assets
   */
  list(options?: RequestOptions): APIPromise<AssetListResponse> {
    return this._client.get('/api/v1/assets', options);
  }

  /**
   * Get historical prices for assets
   */
  getPriceHistory(
    query: AssetGetPriceHistoryParams,
    options?: RequestOptions,
  ): APIPromise<AssetGetPriceHistoryResponse> {
    return this._client.get('/api/v1/assets/price-history', { query, ...options });
  }

  /**
   * Get all asset prices
   */
  listPrices(
    query: AssetListPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssetListPricesResponse> {
    return this._client.get('/api/v1/assets/prices', { query, ...options });
  }
}

/**
 * The asset's classification metadata. Assets are classfied to provide context on
 * their usage throughout the Neptune API (e.g. regular assets, neptune receipt
 * tokens, LSTs, etc.)
 *
 * Each asset belongs to only a single classification type. This object contains
 * metadata pertaining to the given classification.
 *
 * While some fields may be common among the distinct classifcations, each
 * classification is distinct and subject to independent change.
 */
export type AssetClassification =
  | AssetClassification.Regular
  | AssetClassification.NeptuneReceiptToken
  | AssetClassification.LiquidStakingToken;

export namespace AssetClassification {
  export interface Regular {
    kind: 'regular';

    /**
     * Provides a unique identifier for an asset for use throughout the Neptune API.
     * IDs are unique across asset domains (contract tokens, native denoms, etc)
     */
    neptune_receipt_asset: AssetsAPI.AssetSpec | null;
  }

  export interface NeptuneReceiptToken {
    kind: 'neptune_receipt_token';

    /**
     * Provides a unique identifier for an asset for use throughout the Neptune API.
     * IDs are unique across asset domains (contract tokens, native denoms, etc)
     */
    origin_asset: AssetsAPI.AssetSpec;
  }

  export interface LiquidStakingToken {
    kind: 'liquid_staking_token';

    /**
     * Provides a unique identifier for an asset for use throughout the Neptune API.
     * IDs are unique across asset domains (contract tokens, native denoms, etc)
     */
    origin_asset: AssetsAPI.AssetSpec | null;
  }
}

/**
 * Asset identifiers with associated metadata
 */
export interface AssetInfo {
  /**
   * Provides a unique identifier for an asset for use throughout the Neptune API.
   * IDs are unique across asset domains (contract tokens, native denoms, etc)
   */
  asset: AssetSpec;

  /**
   * The asset's classification metadata. Assets are classfied to provide context on
   * their usage throughout the Neptune API (e.g. regular assets, neptune receipt
   * tokens, LSTs, etc.)
   *
   * Each asset belongs to only a single classification type. This object contains
   * metadata pertaining to the given classification.
   *
   * While some fields may be common among the distinct classifcations, each
   * classification is distinct and subject to independent change.
   */
  classification: AssetClassification;

  /**
   * Additional metadata for assets
   */
  metadata: AssetMetadata;
}

/**
 * Additional metadata for assets
 */
export interface AssetMetadata {
  /**
   * Denom exponent, or num. of decimal places that shift between denom/standard
   * amounts (e.g. `18` for `INJ`)
   */
  decimals_denom: number;

  /**
   * Number of decimals used when displaying amounts of this asset (this is
   * subjective and used for generating text representations)
   */
  decimals_display: number;

  /**
   * Full name of the asset
   */
  name: string;

  /**
   * Symbol of the asset, e.g.: `NEPT` `INJ`
   */
  symbol: string;

  /**
   * Denom symbol for the asset (e.g. `inj` for `INJ`, `sat` for `BTC`)
   */
  symbol_denom: string;
}

/**
 * Provides a unique identifier for an asset for use throughout the Neptune API.
 * IDs are unique across asset domains (contract tokens, native denoms, etc)
 */
export interface AssetSpec {
  id: string;

  group: 'native' | 'token';

  group_key: string;
}

/**
 * List data success response
 */
export interface AssetListResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  /**
   * Primary response content (list)
   */
  data: Array<AssetInfo>;

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
export interface AssetGetPriceHistoryResponse {
  /**
   * Primary response content (object)
   */
  data: AssetGetPriceHistoryResponse.Data;

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

export namespace AssetGetPriceHistoryResponse {
  /**
   * Primary response content (object)
   */
  export interface Data {
    /**
     * Values used for paginating the time series data
     */
    pagination: Data.Pagination;

    /**
     * Provides values for the requested range in it's entire width, regardless of
     * page/limit.
     */
    range: Data.Range;

    /**
     * Pairs of items and their associated points
     */
    series: Array<Data.Series>;
  }

  export namespace Data {
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
}

/**
 * List data success response
 */
export interface AssetListPricesResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  /**
   * Primary response content (list)
   */
  data: Array<AssetListPricesResponse.Data>;

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

export namespace AssetListPricesResponse {
  /**
   * Asset identifiers with associated metadata
   */
  export interface Data {
    /**
     * Provides a unique identifier for an asset for use throughout the Neptune API.
     * IDs are unique across asset domains (contract tokens, native denoms, etc)
     */
    asset: AssetsAPI.AssetSpec;

    /**
     * The asset's classification metadata. Assets are classfied to provide context on
     * their usage throughout the Neptune API (e.g. regular assets, neptune receipt
     * tokens, LSTs, etc.)
     *
     * Each asset belongs to only a single classification type. This object contains
     * metadata pertaining to the given classification.
     *
     * While some fields may be common among the distinct classifcations, each
     * classification is distinct and subject to independent change.
     */
    classification: AssetsAPI.AssetClassification;

    /**
     * Additional metadata for assets
     */
    metadata: AssetsAPI.AssetMetadata;

    /**
     * > **Note**: Prices are sourced from Neptune's Price Oracle
     */
    price: Data.Price;
  }

  export namespace Data {
    /**
     * > **Note**: Prices are sourced from Neptune's Price Oracle
     */
    export interface Price {
      extra: Price.Extra;

      /**
       * Asset price value, as per Neptune Price Oracle
       */
      last_updated_at: string;

      /**
       * Asset price
       */
      price: string;
    }

    export namespace Price {
      export interface Extra {
        /**
         * Human-readable field variants. Will not be null when query param `with-text` is
         * `true`.
         */
        text: Extra.Text | null;
      }

      export namespace Extra {
        /**
         * Human-readable field variants. Will not be null when query param `with-text` is
         * `true`.
         */
        export interface Text {
          last_updated_at: string;

          price: string;
        }
      }
    }
  }
}

export interface AssetGetPriceHistoryParams {
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

export interface AssetListPricesParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;
}

export declare namespace Assets {
  export {
    type AssetClassification as AssetClassification,
    type AssetInfo as AssetInfo,
    type AssetMetadata as AssetMetadata,
    type AssetSpec as AssetSpec,
    type AssetListResponse as AssetListResponse,
    type AssetGetPriceHistoryResponse as AssetGetPriceHistoryResponse,
    type AssetListPricesResponse as AssetListPricesResponse,
    type AssetGetPriceHistoryParams as AssetGetPriceHistoryParams,
    type AssetListPricesParams as AssetListPricesParams,
  };
}
