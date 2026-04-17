// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as MarketsAPI from '../markets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Collaterals extends APIResource {
  /**
   * Get borrowing collateral markets overview
   */
  list(
    query: CollateralListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollateralListResponse> {
    return this._client.get('/api/v1/markets/borrow/collaterals', { query, ...options });
  }

  /**
   * Lookup borrowing market collateral by asset
   */
  getByAsset(
    query: CollateralGetByAssetParams,
    options?: RequestOptions,
  ): APIPromise<CollateralGetByAssetResponse> {
    return this._client.get('/api/v1/markets/borrow/collaterals/lookup', { query, ...options });
  }
}

export interface BorrowCollateralConfig {
  /**
   * The loan to value ratio at which we allow collateral withdrawals or borrows.
   */
  allowable_ltv: string;

  /**
   * The optional, global/shared maximum deposit limit for this collateral.
   */
  collateral_cap: string | null;

  /**
   * Collateral enabled state
   */
  enabled: boolean;

  extra: BorrowCollateralConfig.Extra;

  /**
   * The loan to value ratio at which the collateral can be liquidated.
   */
  liquidation_ltv: string;

  /**
   * The maximum dynamic discount
   */
  max_discount: string;

  /**
   * The minimum dynamic discount.
   */
  min_discount: string;
}

export namespace BorrowCollateralConfig {
  export interface Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    text: Extra.Text | null;

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     *
     * ### Note
     *
     * This variant group contains an additional `price` field (set to the number used
     * in value calculation).
     *
     * The embedded text group will contain the text variant if `with_text` was
     * specified as well.
     */
    value: Extra.Value | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    export interface Text {
      allowable_ltv: string;

      collateral_cap: string;

      liquidation_ltv: string;

      max_discount: string;

      min_discount: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     *
     * ### Note
     *
     * This variant group contains an additional `price` field (set to the number used
     * in value calculation).
     *
     * The embedded text group will contain the text variant if `with_text` was
     * specified as well.
     */
    export interface Value {
      collateral_cap: string | null;

      extra: Value.Extra;

      /**
       * Price used in value calculations
       */
      price: string;
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
          collateral_cap?: string | null;

          /**
           * Text representation of price
           */
          price?: string | null;
        }
      }
    }
  }
}

/**
 * Borrowing market, collateral info
 */
export interface BorrowCollateralMarket {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * Collateral configuration parameters
   */
  config: BorrowCollateralConfig;

  /**
   * Current collateral state
   */
  state: BorrowCollateralState;
}

export interface BorrowCollateralMarketData {
  /**
   * Collateral configuration parameters
   */
  config: BorrowCollateralConfig;

  /**
   * Current collateral state
   */
  state: BorrowCollateralState;
}

export interface BorrowCollateralMarketSupply {
  /**
   * Supply of all collaterals (excluding receipt tokens)
   */
  non_receipt: MarketsAPI.MarketSupplyPool;

  /**
   * Supply of receipt token collaterals
   */
  receipt: MarketsAPI.MarketSupplyPool;

  /**
   * Total supply for collaterals, regardless of type. Equivalent to
   * `non_receipt + receipt`
   */
  total: MarketsAPI.MarketSupplyPool;
}

/**
 * Borrowing market collaterals overview
 */
export interface BorrowCollateralOverview {
  /**
   * Borrowing collateral markets
   */
  contents: Array<BorrowCollateralMarket>;

  /**
   * Supply breakdown for collaterals
   */
  supply: BorrowCollateralMarketSupply;
}

export interface BorrowCollateralState {
  balance: string;

  extra: BorrowCollateralState.Extra;

  /**
   * Total amount of this asset which is actively collateralized
   */
  shares: string;
}

export namespace BorrowCollateralState {
  export interface Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    text: Extra.Text | null;

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     *
     * ### Note
     *
     * This variant group contains an additional `price` field (set to the number used
     * in value calculation).
     *
     * The embedded text group will contain the text variant if `with_text` was
     * specified as well.
     */
    value: Extra.Value | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    export interface Text {
      balance: string;

      shares: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     *
     * ### Note
     *
     * This variant group contains an additional `price` field (set to the number used
     * in value calculation).
     *
     * The embedded text group will contain the text variant if `with_text` was
     * specified as well.
     */
    export interface Value {
      balance: string;

      extra: Value.Extra;

      /**
       * Price used in value calculations
       */
      price: string;

      shares: string;
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
          balance: string;

          /**
           * Text representation of price
           */
          price: string;

          shares: string;
        }
      }
    }
  }
}

export interface CollateralListResponse {
  /**
   * Borrowing market collaterals overview
   */
  data: BorrowCollateralOverview;

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

export interface CollateralGetByAssetResponse {
  /**
   * Borrowing market, collateral info
   */
  data: BorrowCollateralMarket;

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

export interface CollateralListParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface CollateralGetByAssetParams {
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

export declare namespace Collaterals {
  export {
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
}
