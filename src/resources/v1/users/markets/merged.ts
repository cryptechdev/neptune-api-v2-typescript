// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../assets';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Merged extends APIResource {
  /**
   * Get user markets for all kinds (lend + borrow debt/collateral), grouped together
   * by asset
   */
  list(
    address: string,
    query: MergedListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MergedListResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/merged`, { query, ...options });
  }

  /**
   * Get user's markets (lend + borrow debt/collateral) for a specific asset
   */
  retrieveLookup(
    address: string,
    query: MergedRetrieveLookupParams,
    options?: RequestOptions,
  ): APIPromise<MergedRetrieveLookupResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/merged/lookup`, { query, ...options });
  }
}

/**
 * `UserMergedMarket`
 */
export interface UserMergedMarket {
  /**
   * `AssetInfo`
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * User collateral contribution for asset in borrow market, listed by subaccount
   */
  borrow_collateral: Array<UserMergedMarket.BorrowCollateral>;

  /**
   * User debt contribution for asset in borrow market, listed by subaccount
   */
  borrow_debt: Array<UserMergedMarket.BorrowDebt>;

  /**
   * `UserDebtPoolData`
   */
  lend?: UserMergedMarket.Lend | null;
}

export namespace UserMergedMarket {
  /**
   * `UserMergedCollateralAccount`
   */
  export interface BorrowCollateral {
    /**
     * Amount of this asset which is actively collateralized
     */
    amount: string;

    extra: BorrowCollateral.Extra;

    /**
     * Account index
     */
    index: number;
  }

  export namespace BorrowCollateral {
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
        amount: string;
      }

      /**
       * USD values for the corresponding amounts above. Must provide `?with-value=true`
       */
      export interface Value {
        amount: string;

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
            amount: string;
          }
        }
      }
    }
  }

  /**
   * `UserMergedDebtAccount`
   */
  export interface BorrowDebt {
    /**
     * Sum open debt amount (this is simply the principal + interest)
     */
    debt: string;

    extra: BorrowDebt.Extra;

    /**
     * Account index
     */
    index: number;

    /**
     * Sum of accrued interest for open debt position
     */
    interest: string;

    /**
     * Initial amount borrowed (of debts which have not yet been repaid)
     */
    principal: string;
  }

  export namespace BorrowDebt {
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
        debt: string;

        interest: string;

        principal: string;
      }

      /**
       * USD values for the corresponding amounts above. Must provide `?with-value=true`
       */
      export interface Value {
        debt: string;

        extra: Value.Extra;

        interest: string;

        principal: string;
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
            debt: string;

            interest: string;

            principal: string;
          }
        }
      }
    }
  }

  /**
   * `UserDebtPoolData`
   */
  export interface Lend {
    /**
     * Sum open debt amount (this is simply the principal + interest)
     */
    debt: string;

    extra: Lend.Extra;

    /**
     * Sum of accrued interest for open debt position
     */
    interest: string;

    /**
     * Initial amount borrowed (of debts which have not yet been repaid)
     */
    principal: string;
  }

  export namespace Lend {
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
        debt: string;

        interest: string;

        principal: string;
      }

      /**
       * USD values for the corresponding amounts above. Must provide `?with-value=true`
       */
      export interface Value {
        debt: string;

        extra: Value.Extra;

        interest: string;

        principal: string;
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
            debt: string;

            interest: string;

            principal: string;
          }
        }
      }
    }
  }
}

export interface MergedListResponse {
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
  data?: Array<UserMergedMarket> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface MergedRetrieveLookupResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserMergedMarket`
   */
  data?: UserMergedMarket | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface MergedListParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface MergedRetrieveLookupParams {
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
    type UserMergedMarket as UserMergedMarket,
    type MergedListResponse as MergedListResponse,
    type MergedRetrieveLookupResponse as MergedRetrieveLookupResponse,
    type MergedListParams as MergedListParams,
    type MergedRetrieveLookupParams as MergedRetrieveLookupParams,
  };
}
