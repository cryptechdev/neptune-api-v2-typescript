// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as CoreAPI from '../../core';
import {
  IntervalMultiPage,
  type IntervalMultiPageParams,
  IntervalSinglePage,
  type IntervalSinglePageParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class History extends APIResource {
  /**
   * Get cumulative lending value history independent of assets
   */
  getLoansOriginated(
    query: HistoryGetLoansOriginatedParams,
    options?: RequestOptions,
  ): PagePromise<HistoryGetLoansOriginatedResponsesIntervalSinglePage, HistoryGetLoansOriginatedResponse> {
    return this._client.getAPIList(
      '/api/v1/analytics/market/history/loans-originated',
      IntervalSinglePage<HistoryGetLoansOriginatedResponse>,
      { query, ...options },
    );
  }

  /**
   * Get cumulative lending value history assets
   */
  getLoansOriginatedByAsset(
    query: HistoryGetLoansOriginatedByAssetParams,
    options?: RequestOptions,
  ): PagePromise<
    HistoryGetLoansOriginatedByAssetResponsesIntervalMultiPage,
    HistoryGetLoansOriginatedByAssetResponse
  > {
    return this._client.getAPIList(
      '/api/v1/analytics/market/history/loans-originated/by-asset',
      IntervalMultiPage<HistoryGetLoansOriginatedByAssetResponse>,
      { query, ...options },
    );
  }
}

export type HistoryGetLoansOriginatedResponsesIntervalSinglePage =
  IntervalSinglePage<HistoryGetLoansOriginatedResponse>;

export type HistoryGetLoansOriginatedByAssetResponsesIntervalMultiPage =
  IntervalMultiPage<HistoryGetLoansOriginatedByAssetResponse>;

/**
 * Time + value pair representing a point in time for use with time series
 */
export interface HistoryGetLoansOriginatedResponse {
  t: string;

  v: string | number | null;
}

/**
 * Item and associated points
 */
export interface HistoryGetLoansOriginatedByAssetResponse {
  /**
   * Provides a unique identifier for an asset for use throughout the Neptune API.
   * IDs are unique across asset domains (contract tokens, native denoms, etc)
   */
  asset: AssetsAPI.AssetSpec;

  points: Array<HistoryGetLoansOriginatedByAssetResponse.Point>;
}

export namespace HistoryGetLoansOriginatedByAssetResponse {
  /**
   * Time + value pair representing a point in time for use with time series
   */
  export interface Point {
    t: string;

    v: string | number | null;
  }
}

export interface HistoryGetLoansOriginatedParams extends IntervalSinglePageParams {
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
}

export interface HistoryGetLoansOriginatedByAssetParams extends IntervalMultiPageParams {
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

export declare namespace History {
  export {
    type HistoryGetLoansOriginatedResponse as HistoryGetLoansOriginatedResponse,
    type HistoryGetLoansOriginatedByAssetResponse as HistoryGetLoansOriginatedByAssetResponse,
    type HistoryGetLoansOriginatedResponsesIntervalSinglePage as HistoryGetLoansOriginatedResponsesIntervalSinglePage,
    type HistoryGetLoansOriginatedByAssetResponsesIntervalMultiPage as HistoryGetLoansOriginatedByAssetResponsesIntervalMultiPage,
    type HistoryGetLoansOriginatedParams as HistoryGetLoansOriginatedParams,
    type HistoryGetLoansOriginatedByAssetParams as HistoryGetLoansOriginatedByAssetParams,
  };
}
