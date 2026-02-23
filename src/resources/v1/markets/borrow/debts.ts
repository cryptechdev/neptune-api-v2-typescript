// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as LendAPI from '../lend';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Debts extends APIResource {
  /**
   * Get borrowing debt markets
   */
  list(
    query: DebtListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DebtListResponse> {
    return this._client.get('/api/v1/markets/borrow/debts', { query, ...options });
  }

  /**
   * Lookup borrowing debt market by asset
   */
  lookupByAsset(
    query: DebtLookupByAssetParams,
    options?: RequestOptions,
  ): APIPromise<DebtLookupByAssetResponse> {
    return this._client.get('/api/v1/markets/borrow/debts/lookup', { query, ...options });
  }
}

/**
 * `BorrowDebtConfig`
 */
export interface BorrowDebtConfig {
  /**
   * The maximum utilization ratio at which new borrow positions can be opened.
   */
  borrow_halt_utilization: string;

  /**
   * Market enabled state
   */
  enabled: boolean;

  extra: BorrowDebtConfig.Extra;

  /**
   * The protocol (base) interest rate that is charged to borrowers.
   */
  interest_fee: string;

  /**
   * The global max amount which can be borrowed
   */
  borrow_cap?: string | null;
}

export namespace BorrowDebtConfig {
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
      borrow_cap: string;

      borrow_halt_utilization: string;

      interest_fee: string;
    }

    /**
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
     */
    export interface Value {
      borrow_cap: string;

      extra: Value.Extra;
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
          borrow_cap: string;
        }
      }
    }
  }
}

/**
 * `BorrowDebtMarket`
 */
export interface BorrowDebtMarket {
  /**
   * `AssetInfo`
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * `BorrowDebtConfig`
   */
  config: BorrowDebtConfig;

  /**
   * `BorrowDebtState`
   */
  state: BorrowDebtState;

  /**
   * `MarketRate`
   */
  rate?: LendAPI.MarketRate | null;
}

/**
 * `BorrowDebtState`
 */
export interface BorrowDebtState {
  /**
   * Sum open debt amount (this is simply the principal sum + interest sum)
   */
  debt_sum: string;

  extra: BorrowDebtState.Extra;

  /**
   * Sum of accrued interest for all open debts (those which have not yet been
   * repaid)
   */
  interest_sum: string;

  /**
   * Sum of initial amount borrowed for all open debts (those which have not yet been
   * repaid)
   */
  principal_sum: string;

  /**
   * Timestamp used to keep track of the last time interest was distributed.
   */
  time_last_distributed_interest: string;

  /**
   * Asset utilization tracker.
   */
  utilization_accumulator: string;
}

export namespace BorrowDebtState {
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
      debt_sum: string;

      interest_sum: string;

      principal_sum: string;

      time_last_distributed_interest: string;
    }

    /**
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
     */
    export interface Value {
      debt_sum: string;

      extra: Value.Extra;

      interest_sum: string;

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
          debt_sum: string;

          interest_sum: string;

          principal_sum: string;
        }
      }
    }
  }
}

export interface DebtListResponse {
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
  data?: Array<BorrowDebtMarket> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface DebtLookupByAssetResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `BorrowDebtMarket`
   */
  data?: BorrowDebtMarket | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface DebtListParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface DebtLookupByAssetParams {
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

export declare namespace Debts {
  export {
    type BorrowDebtConfig as BorrowDebtConfig,
    type BorrowDebtMarket as BorrowDebtMarket,
    type BorrowDebtState as BorrowDebtState,
    type DebtListResponse as DebtListResponse,
    type DebtLookupByAssetResponse as DebtLookupByAssetResponse,
    type DebtListParams as DebtListParams,
    type DebtLookupByAssetParams as DebtLookupByAssetParams,
  };
}
