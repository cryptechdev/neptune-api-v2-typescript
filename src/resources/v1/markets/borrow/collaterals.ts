// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../assets';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Collaterals extends APIResource {
  /**
   * Get borrowing collateral markets
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
  lookupByAsset(
    query: CollateralLookupByAssetParams,
    options?: RequestOptions,
  ): APIPromise<CollateralLookupByAssetResponse> {
    return this._client.get('/api/v1/markets/borrow/collaterals/lookup', { query, ...options });
  }
}

/**
 * `BorrowCollateralConfig`
 */
export interface BorrowCollateralConfig {
  /**
   * The loan to value ratio at which we allow collateral withdrawals or borrows.
   */
  allowable_ltv: string;

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

  /**
   * The optional, global/shared maximum deposit limit for this collateral.
   */
  collateral_cap?: string | null;
}

export namespace BorrowCollateralConfig {
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
      allowable_ltv: string;

      collateral_cap: string;

      liquidation_ltv: string;

      max_discount: string;

      min_discount: string;
    }

    /**
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
     */
    export interface Value {
      collateral_cap: string;

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
          collateral_cap: string;
        }
      }
    }
  }
}

/**
 * `BorrowCollateralMarket`
 */
export interface BorrowCollateralMarket {
  /**
   * `AssetInfo`
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * `BorrowCollateralConfig`
   */
  config: BorrowCollateralConfig;

  /**
   * `BorrowCollateralState`
   */
  state: BorrowCollateralState;
}

/**
 * `BorrowCollateralState`
 */
export interface BorrowCollateralState {
  balance: string;

  /**
   * Total amount of this asset which is actively collateralized
   */
  collateral_sum: string;

  extra: BorrowCollateralState.Extra;
}

export namespace BorrowCollateralState {
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
      collateral_sum: string;
    }

    /**
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
     */
    export interface Value {
      collateral_sum: string;

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
          collateral_sum: string;
        }
      }
    }
  }
}

export interface CollateralListResponse {
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
  data?: Array<BorrowCollateralMarket> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface CollateralLookupByAssetResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `BorrowCollateralMarket`
   */
  data?: BorrowCollateralMarket | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
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

export interface CollateralLookupByAssetParams {
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
    type BorrowCollateralState as BorrowCollateralState,
    type CollateralListResponse as CollateralListResponse,
    type CollateralLookupByAssetResponse as CollateralLookupByAssetResponse,
    type CollateralListParams as CollateralListParams,
    type CollateralLookupByAssetParams as CollateralLookupByAssetParams,
  };
}
