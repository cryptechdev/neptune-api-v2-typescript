// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as LendAPI from '../lend';
import * as CollateralsAPI from './collaterals';
import {
  BorrowCollateralConfig,
  BorrowCollateralMarket,
  BorrowCollateralState,
  CollateralListParams,
  CollateralListResponse,
  CollateralLookupByAssetParams,
  CollateralLookupByAssetResponse,
  Collaterals,
} from './collaterals';
import * as DebtsAPI from './debts';
import {
  BorrowDebtConfig,
  BorrowDebtMarket,
  BorrowDebtState,
  DebtListParams,
  DebtListResponse,
  DebtLookupByAssetParams,
  DebtLookupByAssetResponse,
  Debts,
} from './debts';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Borrow extends APIResource {
  collaterals: CollateralsAPI.Collaterals = new CollateralsAPI.Collaterals(this._client);
  debts: DebtsAPI.Debts = new DebtsAPI.Debts(this._client);

  /**
   * Get historical borrowing rates for assets
   */
  getBorrowRateHistory(
    query: BorrowGetBorrowRateHistoryParams,
    options?: RequestOptions,
  ): APIPromise<BorrowGetBorrowRateHistoryResponse> {
    return this._client.get('/api/v1/markets/borrow/rate-history', { query, ...options });
  }

  /**
   * Get borrowing market overview
   */
  overview(
    query: BorrowOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BorrowOverviewResponse> {
    return this._client.get('/api/v1/markets/borrow', { query, ...options });
  }
}

/**
 * `BorrowMarketOverview`
 */
export interface BorrowMarketOverview {
  /**
   * Borrowing collateral markets
   */
  collaterals: Array<CollateralsAPI.BorrowCollateralMarket>;

  /**
   * Borrowing debt markets
   */
  debts: Array<DebtsAPI.BorrowDebtMarket>;
}

export interface BorrowGetBorrowRateHistoryResponse {
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
  data?: LendAPI.AssetRateHistory | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface BorrowOverviewResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `BorrowMarketOverview`
   */
  data?: BorrowMarketOverview | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface BorrowGetBorrowRateHistoryParams {
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

export interface BorrowOverviewParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

Borrow.Collaterals = Collaterals;
Borrow.Debts = Debts;

export declare namespace Borrow {
  export {
    type BorrowMarketOverview as BorrowMarketOverview,
    type BorrowGetBorrowRateHistoryResponse as BorrowGetBorrowRateHistoryResponse,
    type BorrowOverviewResponse as BorrowOverviewResponse,
    type BorrowGetBorrowRateHistoryParams as BorrowGetBorrowRateHistoryParams,
    type BorrowOverviewParams as BorrowOverviewParams,
  };

  export {
    Collaterals as Collaterals,
    type BorrowCollateralConfig as BorrowCollateralConfig,
    type BorrowCollateralMarket as BorrowCollateralMarket,
    type BorrowCollateralState as BorrowCollateralState,
    type CollateralListResponse as CollateralListResponse,
    type CollateralLookupByAssetResponse as CollateralLookupByAssetResponse,
    type CollateralListParams as CollateralListParams,
    type CollateralLookupByAssetParams as CollateralLookupByAssetParams,
  };

  export {
    Debts as Debts,
    type BorrowDebtConfig as BorrowDebtConfig,
    type BorrowDebtMarket as BorrowDebtMarket,
    type BorrowDebtState as BorrowDebtState,
    type DebtListResponse as DebtListResponse,
    type DebtLookupByAssetResponse as DebtLookupByAssetResponse,
    type DebtListParams as DebtListParams,
    type DebtLookupByAssetParams as DebtLookupByAssetParams,
  };
}
