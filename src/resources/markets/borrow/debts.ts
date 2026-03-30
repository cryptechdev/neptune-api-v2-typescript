// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as MarketsAPI from '../markets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

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
  getByAsset(query: DebtGetByAssetParams, options?: RequestOptions): APIPromise<DebtGetByAssetResponse> {
    return this._client.get('/api/v1/markets/borrow/debts/lookup', { query, ...options });
  }
}

export interface BorrowDebtConfig {
  /**
   * The global max amount which can be borrowed
   */
  borrow_cap: string | null;

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
}

export namespace BorrowDebtConfig {
  export interface Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    text: Extra.Text | null;

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    value: Extra.Value | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    export interface Text {
      borrow_cap: string;

      borrow_halt_utilization: string;

      interest_fee: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      borrow_cap: string | null;

      extra: Value.Extra;
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
          borrow_cap: string;
        }
      }
    }
  }
}

export interface BorrowDebtMarket {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * Debt market configuration parameters
   */
  config: BorrowDebtConfig;

  /**
   * Market rates
   */
  rate: MarketsAPI.MarketRate | null;

  /**
   * Current debt market state
   */
  state: BorrowDebtState;
}

export interface BorrowDebtMarketData {
  /**
   * Debt market configuration parameters
   */
  config: BorrowDebtConfig;

  /**
   * Market rates
   */
  rate: MarketsAPI.MarketRate | null;

  /**
   * Current debt market state
   */
  state: BorrowDebtState;
}

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
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    text: Extra.Text | null;

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    value: Extra.Value | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    export interface Text {
      debt_sum: string;

      interest_sum: string;

      principal_sum: string;

      time_last_distributed_interest: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
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
          debt_sum: string;

          interest_sum: string;

          principal_sum: string;
        }
      }
    }
  }
}

/**
 * List data success response
 */
export interface DebtListResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<BorrowDebtMarket>;

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
export interface DebtGetByAssetResponse {
  data: BorrowDebtMarket;

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

export interface DebtGetByAssetParams {
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
    type BorrowDebtMarketData as BorrowDebtMarketData,
    type BorrowDebtState as BorrowDebtState,
    type DebtListResponse as DebtListResponse,
    type DebtGetByAssetResponse as DebtGetByAssetResponse,
    type DebtListParams as DebtListParams,
    type DebtGetByAssetParams as DebtGetByAssetParams,
  };
}
