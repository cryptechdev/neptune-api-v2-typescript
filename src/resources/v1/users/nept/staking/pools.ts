// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import * as NeptAPI from '../../../nept';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Pools extends APIResource {
  /**
   * Get user staking pools
   */
  list(
    address: string,
    query: PoolListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PoolListResponse> {
    return this._client.get(path`/api/v1/users/${address}/nept/staking/pools`, { query, ...options });
  }

  /**
   * Get user staking pool by duration/index
   */
  retrieveLookup(
    address: string,
    query: PoolRetrieveLookupParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PoolRetrieveLookupResponse> {
    return this._client.get(path`/api/v1/users/${address}/nept/staking/pools/lookup`, { query, ...options });
  }
}

/**
 * `UserStakePool`
 */
export interface UserStakePool {
  /**
   * Total staked of all entries
   *
   * **NOTE:** this value is affected by active filters, if any (e.g. filtering over
   * account index)
   */
  amount_sum: string;

  /**
   * `StakingPoolFull`
   *
   * ---
   *
   * Merges `StakingPool` with both `StakingPoolWithParams` and `StakingPoolState`
   */
  common: NeptAPI.StakingPoolFull;

  /**
   * `UserStakeBondingEntry[]`
   *
   * ---
   *
   * Bonding/stake entries
   *
   * **NOTE:** entries that differ only in amount are merged upon creation
   */
  contents: Array<UserStakePool.Content>;

  extra: UserStakePool.Extra;
}

export namespace UserStakePool {
  /**
   * `UserStakeBondingEntry`
   */
  export interface Content {
    /**
     * User account index
     */
    account_index: number;

    /**
     * Bonding amount
     */
    amount: string;

    cascade: boolean;

    extra: Content.Extra;

    last_stake_acc: string;

    transition_at?: string | null;
  }

  export namespace Content {
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

        transition_at: string;
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
      amount_sum: string;
    }

    /**
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
     */
    export interface Value {
      amount_sum: string;

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
          amount_sum: string;
        }
      }
    }
  }
}

export interface PoolListResponse {
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
  data?: Array<UserStakePool> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface PoolRetrieveLookupResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserStakePool`
   */
  data?: UserStakePool | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface PoolListParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface PoolRetrieveLookupParams {
  /**
   * Duration of pool to lookup (**in nanoseconds**)
   *
   * **NOTE:** Either index or duration must be provided. Cannot specify both.
   */
  duration?: string;

  /**
   * Index of pool to lookup
   *
   * **NOTE:** Either index or duration must be provided. Cannot specify both.
   */
  index?: string;

  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export declare namespace Pools {
  export {
    type UserStakePool as UserStakePool,
    type PoolListResponse as PoolListResponse,
    type PoolRetrieveLookupResponse as PoolRetrieveLookupResponse,
    type PoolListParams as PoolListParams,
    type PoolRetrieveLookupParams as PoolRetrieveLookupParams,
  };
}
