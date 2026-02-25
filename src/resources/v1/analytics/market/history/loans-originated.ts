// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class LoansOriginated extends APIResource {
  /**
   * Get cumulative lending value history independent of assets
   */
  getAll(
    query: LoansOriginatedGetAllParams,
    options?: RequestOptions,
  ): APIPromise<LoansOriginatedGetAllResponse> {
    return this._client.get('/api/v1/analytics/market/history/loans-originated', { query, ...options });
  }

  /**
   * Get cumulative lending value history assets
   */
  getByAsset(
    query: LoansOriginatedGetByAssetParams,
    options?: RequestOptions,
  ): APIPromise<LoansOriginatedGetByAssetResponse> {
    return this._client.get('/api/v1/analytics/market/history/loans-originated/by-asset', {
      query,
      ...options,
    });
  }
}

export interface LoansOriginatedGetAllResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `CumulativeValueHistory`
   *
   * ---
   *
   * Historical cumulative lend value for assets
   */
  data?: LoansOriginatedGetAllResponse.Data | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace LoansOriginatedGetAllResponse {
  /**
   * `CumulativeValueHistory`
   *
   * ---
   *
   * Historical cumulative lend value for assets
   */
  export interface Data {
    /**
     * Pagination parameters for the interval response
     */
    pagination: Data.Pagination;

    points: Array<Data.Point>;

    /**
     * Interval window parameters
     */
    range: Data.Range;
  }

  export namespace Data {
    /**
     * Pagination parameters for the interval response
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
     * Time + value pair representing a point in time for use with time series
     */
    export interface Point {
      t: string;

      v?: string | number | null;
    }

    /**
     * Interval window parameters
     */
    export interface Range {
      end: string;

      /**
       * Interval period & size
       */
      interval: AssetsAPI.Interval;

      start: string;
    }
  }
}

export interface LoansOriginatedGetByAssetResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `AssetCumulativeValueHistory`
   *
   * ---
   *
   * Historical cumulative lend value for assets
   */
  data?: LoansOriginatedGetByAssetResponse.Data | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace LoansOriginatedGetByAssetResponse {
  /**
   * `AssetCumulativeValueHistory`
   *
   * ---
   *
   * Historical cumulative lend value for assets
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

        v?: string | number | null;
      }
    }
  }
}

export interface LoansOriginatedGetAllParams {
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

export interface LoansOriginatedGetByAssetParams {
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

export declare namespace LoansOriginated {
  export {
    type LoansOriginatedGetAllResponse as LoansOriginatedGetAllResponse,
    type LoansOriginatedGetByAssetResponse as LoansOriginatedGetByAssetResponse,
    type LoansOriginatedGetAllParams as LoansOriginatedGetAllParams,
    type LoansOriginatedGetByAssetParams as LoansOriginatedGetByAssetParams,
  };
}
