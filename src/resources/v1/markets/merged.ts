// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../assets';
import * as LendAPI from './lend';
import * as CollateralsAPI from './borrow/collaterals';
import * as DebtsAPI from './borrow/debts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Merged extends APIResource {
  /**
   * Get lend/collateral/debt grouped by asset
   */
  getMergedData(
    query: MergedGetMergedDataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MergedGetMergedDataResponse> {
    return this._client.get('/api/v1/markets/merged', { query, ...options });
  }

  /**
   * Lookup merged market data by asset
   */
  lookupByAsset(
    query: MergedLookupByAssetParams,
    options?: RequestOptions,
  ): APIPromise<MergedLookupByAssetResponse> {
    return this._client.get('/api/v1/markets/merged/lookup', { query, ...options });
  }
}

/**
 * `MergedMarket`
 *
 * ---
 *
 * Data for all of an assets markets
 */
export interface MergedMarket {
  /**
   * `AssetInfo`
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * Info for asset as collateral for borrow market, if one exists
   */
  borrow_collateral?: MergedMarket.BorrowCollateral | null;

  /**
   * Info for asset as debt for borrow market, if one exists
   */
  borrow_debt?: MergedMarket.BorrowDebt | null;

  /**
   * Info for asset's lending market, if one exists
   */
  lend?: MergedMarket.Lend | null;
}

export namespace MergedMarket {
  /**
   * Info for asset as collateral for borrow market, if one exists
   */
  export interface BorrowCollateral {
    /**
     * `BorrowCollateralConfig`
     */
    config: CollateralsAPI.BorrowCollateralConfig;

    /**
     * `BorrowCollateralState`
     */
    state: CollateralsAPI.BorrowCollateralState;
  }

  /**
   * Info for asset as debt for borrow market, if one exists
   */
  export interface BorrowDebt {
    /**
     * `BorrowDebtConfig`
     */
    config: DebtsAPI.BorrowDebtConfig;

    /**
     * `BorrowDebtState`
     */
    state: DebtsAPI.BorrowDebtState;

    /**
     * `MarketRate`
     */
    rate?: LendAPI.MarketRate | null;
  }

  /**
   * Info for asset's lending market, if one exists
   */
  export interface Lend {
    /**
     * `LendMarketState`
     */
    state: LendAPI.LendMarketState;

    /**
     * `MarketRate`
     */
    rate?: LendAPI.MarketRate | null;
  }
}

export interface MergedGetMergedDataResponse {
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
  data?: Array<MergedMarket> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface MergedLookupByAssetResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `MergedMarket`
   *
   * ---
   *
   * Data for all of an assets markets
   */
  data?: MergedMarket | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface MergedGetMergedDataParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface MergedLookupByAssetParams {
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

export declare namespace Merged {
  export {
    type MergedMarket as MergedMarket,
    type MergedGetMergedDataResponse as MergedGetMergedDataResponse,
    type MergedLookupByAssetResponse as MergedLookupByAssetResponse,
    type MergedGetMergedDataParams as MergedGetMergedDataParams,
    type MergedLookupByAssetParams as MergedLookupByAssetParams,
  };
}
