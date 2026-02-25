// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as StakingAPI from './staking';
import * as AssetsAPI from '../../../assets';
import * as PoolsAPI from './pools';
import {
  PoolGetAllParams,
  PoolGetAllResponse,
  PoolLookupParams,
  PoolLookupResponse,
  Pools,
  UserStakePool,
} from './pools';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Staking extends APIResource {
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);

  /**
   * Get user staking overview
   */
  getOverview(
    address: string,
    query: StakingGetOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StakingGetOverviewResponse> {
    return this._client.get(path`/api/v1/users/${address}/nept/staking`, { query, ...options });
  }

  /**
   * Get user unstaking pool
   */
  getUnstakingPool(
    address: string,
    query: StakingGetUnstakingPoolParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StakingGetUnstakingPoolResponse> {
    return this._client.get(path`/api/v1/users/${address}/nept/staking/unstaking`, { query, ...options });
  }
}

/**
 * `UserStake`
 */
export interface UserStake {
  /**
   * `AssetInfo`
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * Total staked of all entries across all listed pools
   *
   * **NOTE:** this value is affected by active filters, if any (e.g. filtering over
   * account index)
   */
  bonding_sum: string;

  /**
   * NEPT rewarded from staking that is available yet not claimed by the user
   */
  claimable_rewards: string;

  /**
   * Sum of all unbond/unstake amounts that have completed their lockup period and
   * are ready to be claimed.
   */
  claimable_unbonding: string;

  extra: UserStake.Extra;

  /**
   * `UserStakePool[]`
   *
   * ---
   *
   * User allocations for each staking pool
   */
  pools: Array<PoolsAPI.UserStakePool>;

  /**
   * `UserStakeUnbonding`
   */
  unbonding: UserStake.Unbonding;

  unclaimed: string;
}

export namespace UserStake {
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
      bonding_sum: string;

      claimable_rewards: string;

      claimable_unbonding: string;

      unclaimed: string;
    }

    /**
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
     */
    export interface Value {
      bonding_sum: string;

      claimable_rewards: string;

      claimable_unbonding: string;

      extra: Value.Extra;

      unclaimed: string;
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
          bonding_sum: string;

          claimable_rewards: string;

          claimable_unbonding: string;

          unclaimed: string;
        }
      }
    }
  }

  /**
   * `UserStakeUnbonding`
   */
  export interface Unbonding {
    /**
     * Total amount of all unbond entries
     *
     * **NOTE:** this value is affected by active filters, if any (e.g. filtering over
     * account index)
     */
    amount_sum: string;

    /**
     * `UserStakeUnbondingEntry[]`
     *
     * ---
     *
     * Unbonding/unstake entries
     *
     * **NOTE:** cascade unbondings from pool >= 2 are contained in the bondings list
     * of the lower adjacent pool from which the unbond occurred.
     */
    contents: Array<StakingAPI.UserStakeUnbondingEntry>;

    extra: Unbonding.Extra;
  }

  export namespace Unbonding {
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
}

/**
 * `UserStakeUnbondingEntry`
 */
export interface UserStakeUnbondingEntry {
  /**
   * Unbonding amount
   */
  amount: string;

  extra: UserStakeUnbondingEntry.Extra;

  /**
   * Timestamp for when the unstake can be redeemed
   */
  unlock_at: string;
}

export namespace UserStakeUnbondingEntry {
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

      unlock_at: string;
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

export interface StakingGetOverviewResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserStake`
   */
  data?: UserStake | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface StakingGetUnstakingPoolResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * Object data
   */
  data?: StakingGetUnstakingPoolResponse.Data | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace StakingGetUnstakingPoolResponse {
  /**
   * Object data
   */
  export interface Data {
    /**
     * Total amount of all unbond entries
     *
     * **NOTE:** this value is affected by active filters, if any (e.g. filtering over
     * account index)
     */
    amount_sum: string;

    /**
     * `UserStakeUnbondingEntry[]`
     *
     * ---
     *
     * Unbonding/unstake entries
     *
     * **NOTE:** cascade unbondings from pool >= 2 are contained in the bondings list
     * of the lower adjacent pool from which the unbond occurred.
     */
    contents: Array<StakingAPI.UserStakeUnbondingEntry>;
  }
}

export interface StakingGetOverviewParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface StakingGetUnstakingPoolParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

Staking.Pools = Pools;

export declare namespace Staking {
  export {
    type UserStake as UserStake,
    type UserStakeUnbondingEntry as UserStakeUnbondingEntry,
    type StakingGetOverviewResponse as StakingGetOverviewResponse,
    type StakingGetUnstakingPoolResponse as StakingGetUnstakingPoolResponse,
    type StakingGetOverviewParams as StakingGetOverviewParams,
    type StakingGetUnstakingPoolParams as StakingGetUnstakingPoolParams,
  };

  export {
    Pools as Pools,
    type UserStakePool as UserStakePool,
    type PoolGetAllResponse as PoolGetAllResponse,
    type PoolLookupResponse as PoolLookupResponse,
    type PoolGetAllParams as PoolGetAllParams,
    type PoolLookupParams as PoolLookupParams,
  };
}
