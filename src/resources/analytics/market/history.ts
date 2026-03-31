// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as CoreAPI from '../../core';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class History extends APIResource {
  /**
   * Get cumulative lending value history independent of assets
   */
  getLoansOriginated(
    query: HistoryGetLoansOriginatedParams,
    options?: RequestOptions,
  ): APIPromise<HistoryGetLoansOriginatedResponse> {
    return this._client.get('/api/v1/analytics/market/history/loans-originated', { query, ...options });
  }

  /**
   * Get cumulative lending value history assets
   */
  getLoansOriginatedByAsset(
    query: HistoryGetLoansOriginatedByAssetParams,
    options?: RequestOptions,
  ): APIPromise<HistoryGetLoansOriginatedByAssetResponse> {
    return this._client.get('/api/v1/analytics/market/history/loans-originated/by-asset', {
      query,
      ...options,
    });
  }
}

export interface HistoryGetLoansOriginatedResponse {
  /**
   * Historical cumulative lend value for assets
   */
  data: HistoryGetLoansOriginatedResponse.Data;

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

export namespace HistoryGetLoansOriginatedResponse {
  /**
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
      next_offset: number | null;
    }

    /**
     * Time + value pair representing a point in time for use with time series
     */
    export interface Point {
      t: string;

      v: string | number | null;
    }

    /**
     * Interval window parameters
     */
    export interface Range {
      end: string;

      /**
       * Interval period & size
       */
      interval: CoreAPI.Interval;

      start: string;
    }
  }
}

export interface HistoryGetLoansOriginatedByAssetResponse {
  /**
   * Historical cumulative lend value for assets
   */
  data: HistoryGetLoansOriginatedByAssetResponse.Data;

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

export namespace HistoryGetLoansOriginatedByAssetResponse {
  /**
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

    /**
     * Item and associated points
     */
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

        v: string | number | null;
      }
    }
  }
}

export interface HistoryGetLoansOriginatedParams {
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

export interface HistoryGetLoansOriginatedByAssetParams {
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

export declare namespace History {
  export {
    type HistoryGetLoansOriginatedResponse as HistoryGetLoansOriginatedResponse,
    type HistoryGetLoansOriginatedByAssetResponse as HistoryGetLoansOriginatedByAssetResponse,
    type HistoryGetLoansOriginatedParams as HistoryGetLoansOriginatedParams,
    type HistoryGetLoansOriginatedByAssetParams as HistoryGetLoansOriginatedByAssetParams,
  };
}
