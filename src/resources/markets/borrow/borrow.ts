// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as CoreAPI from '../../core';
import * as CollateralsAPI from './collaterals';
import {
  BorrowCollateralConfig,
  BorrowCollateralMarket,
  BorrowCollateralMarketData,
  BorrowCollateralMarketSupply,
  BorrowCollateralOverview,
  BorrowCollateralState,
  CollateralGetByAssetParams,
  CollateralGetByAssetResponse,
  CollateralListParams,
  CollateralListResponse,
  Collaterals,
} from './collaterals';
import * as DebtsAPI from './debts';
import {
  BorrowDebtConfig,
  BorrowDebtMarket,
  BorrowDebtMarketData,
  BorrowDebtOverview,
  BorrowDebtState,
  DebtGetByAssetParams,
  DebtGetByAssetResponse,
  DebtListParams,
  DebtListResponse,
  Debts,
} from './debts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Borrow extends APIResource {
  collaterals: CollateralsAPI.Collaterals = new CollateralsAPI.Collaterals(this._client);
  debts: DebtsAPI.Debts = new DebtsAPI.Debts(this._client);

  /**
   * Get borrowing market overview
   */
  getOverview(
    query: BorrowGetOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BorrowGetOverviewResponse> {
    return this._client.get('/api/v1/markets/borrow', { query, ...options });
  }

  /**
   * Get historical borrowing rates for assets
   */
  getRateHistory(
    query: BorrowGetRateHistoryParams,
    options?: RequestOptions,
  ): APIPromise<BorrowGetRateHistoryResponse> {
    return this._client.get('/api/v1/markets/borrow/rate-history', { query, ...options });
  }
}

export interface BorrowMarketOverview {
  /**
   * Borrowing market collaterals overview
   */
  collaterals: CollateralsAPI.BorrowCollateralOverview;

  /**
   * Borrowing market debts overview
   */
  debts: DebtsAPI.BorrowDebtOverview;
}

export interface BorrowGetOverviewResponse {
  data: BorrowMarketOverview;

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

export interface BorrowGetRateHistoryResponse {
  /**
   * Historical rates for assets
   */
  data: AssetsAPI.AssetRateHistory;

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

export interface BorrowGetOverviewParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface BorrowGetRateHistoryParams {
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

Borrow.Collaterals = Collaterals;
Borrow.Debts = Debts;

export declare namespace Borrow {
  export {
    type BorrowMarketOverview as BorrowMarketOverview,
    type BorrowGetOverviewResponse as BorrowGetOverviewResponse,
    type BorrowGetRateHistoryResponse as BorrowGetRateHistoryResponse,
    type BorrowGetOverviewParams as BorrowGetOverviewParams,
    type BorrowGetRateHistoryParams as BorrowGetRateHistoryParams,
  };

  export {
    Collaterals as Collaterals,
    type BorrowCollateralConfig as BorrowCollateralConfig,
    type BorrowCollateralMarket as BorrowCollateralMarket,
    type BorrowCollateralMarketData as BorrowCollateralMarketData,
    type BorrowCollateralMarketSupply as BorrowCollateralMarketSupply,
    type BorrowCollateralOverview as BorrowCollateralOverview,
    type BorrowCollateralState as BorrowCollateralState,
    type CollateralListResponse as CollateralListResponse,
    type CollateralGetByAssetResponse as CollateralGetByAssetResponse,
    type CollateralListParams as CollateralListParams,
    type CollateralGetByAssetParams as CollateralGetByAssetParams,
  };

  export {
    Debts as Debts,
    type BorrowDebtConfig as BorrowDebtConfig,
    type BorrowDebtMarket as BorrowDebtMarket,
    type BorrowDebtMarketData as BorrowDebtMarketData,
    type BorrowDebtOverview as BorrowDebtOverview,
    type BorrowDebtState as BorrowDebtState,
    type DebtListResponse as DebtListResponse,
    type DebtGetByAssetResponse as DebtGetByAssetResponse,
    type DebtListParams as DebtListParams,
    type DebtGetByAssetParams as DebtGetByAssetParams,
  };
}
