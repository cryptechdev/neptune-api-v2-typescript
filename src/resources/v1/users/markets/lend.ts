// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../assets';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Lend extends APIResource {
  /**
   * Get user lending portfolio
   */
  list(
    address: string,
    query: LendListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LendListResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/lend`, { query, ...options });
  }

  /**
   * Lookup user lending distribution by asset
   */
  retrieveLookup(
    address: string,
    query: LendRetrieveLookupParams,
    options?: RequestOptions,
  ): APIPromise<LendRetrieveLookupResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/lend/lookup`, { query, ...options });
  }
}

/**
 * `UserDebtAssetPool`
 */
export interface UserDebtAssetPool {
  /**
   * `AssetInfo`
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * Sum open debt amount (this is simply the principal + interest)
   */
  debt: string;

  extra: UserDebtAssetPool.Extra;

  /**
   * Sum of accrued interest for open debt position
   */
  interest: string;

  /**
   * Initial amount borrowed (of debts which have not yet been repaid)
   */
  principal: string;
}

export namespace UserDebtAssetPool {
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

export interface LendListResponse {
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
  data?: Array<UserDebtAssetPool> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface LendRetrieveLookupResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserDebtAssetPool`
   */
  data?: UserDebtAssetPool | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface LendListParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface LendRetrieveLookupParams {
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

export declare namespace Lend {
  export {
    type UserDebtAssetPool as UserDebtAssetPool,
    type LendListResponse as LendListResponse,
    type LendRetrieveLookupResponse as LendRetrieveLookupResponse,
    type LendListParams as LendListParams,
    type LendRetrieveLookupParams as LendRetrieveLookupParams,
  };
}
