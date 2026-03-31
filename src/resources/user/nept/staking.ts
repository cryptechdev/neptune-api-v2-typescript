// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StakingAPI from './staking';
import * as AssetsAPI from '../../assets';
import * as NeptAPI from '../../nept';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Staking extends APIResource {
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
   * Get user staking pool by duration/index
   */
  getStakingPool(
    address: string,
    query: StakingGetStakingPoolParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StakingGetStakingPoolResponse> {
    return this._client.get(path`/api/v1/users/${address}/nept/staking/pools/lookup`, { query, ...options });
  }

  /**
   * Get user staking pools
   */
  getStakingPools(
    address: string,
    query: StakingGetStakingPoolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StakingGetStakingPoolsResponse> {
    return this._client.get(path`/api/v1/users/${address}/nept/staking/pools`, { query, ...options });
  }

  /**
   * Get user unstaking pool
   */
  getUnstaking(
    address: string,
    query: StakingGetUnstakingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StakingGetUnstakingResponse> {
    return this._client.get(path`/api/v1/users/${address}/nept/staking/unstaking`, { query, ...options });
  }
}

export interface UserStake {
  /**
   * Asset identifiers with associated metadata
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
   * User allocations for each staking pool
   */
  pools: Array<UserStakePool>;

  /**
   * User unstake/unbonding data
   */
  unbonding: UserStakeUnbonding;

  unclaimed: string;
}

export namespace UserStake {
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
      bonding_sum: string;

      claimable_rewards: string;

      claimable_unbonding: string;

      unclaimed: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
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
          bonding_sum: string;

          claimable_rewards: string;

          claimable_unbonding: string;

          unclaimed: string;
        }
      }
    }
  }
}

export interface UserStakeBondingEntry {
  /**
   * User account index
   */
  account_index: number;

  /**
   * Bonding amount
   */
  amount: string;

  cascade: boolean;

  extra: UserStakeBondingEntry.Extra;

  last_stake_acc: string;

  transition_at: string | null;
}

export namespace UserStakeBondingEntry {
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
      amount: string;

      transition_at: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      amount: string;

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
          amount: string;
        }
      }
    }
  }
}

export interface UserStakePool {
  /**
   * Total staked of all entries
   *
   * **NOTE:** this value is affected by active filters, if any (e.g. filtering over
   * account index)
   */
  amount_sum: string;

  /**
   * Staking pool contents along with associated pool state and pool params
   */
  common: NeptAPI.StakingPoolFull;

  /**
   * Bonding/stake entries
   *
   * **NOTE:** entries that differ only in amount are merged upon creation
   */
  contents: Array<UserStakeBondingEntry>;

  extra: UserStakePool.Extra;
}

export namespace UserStakePool {
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
      amount_sum: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      amount_sum: string;

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
          amount_sum: string;
        }
      }
    }
  }
}

export interface UserStakeUnbonding {
  /**
   * Total amount of all unbond entries
   *
   * **NOTE:** this value is affected by active filters, if any (e.g. filtering over
   * account index)
   */
  amount_sum: string;

  /**
   * Unbonding/unstake entries
   *
   * **NOTE:** cascade unbondings from pool >= 2 are contained in the bondings list
   * of the lower adjacent pool from which the unbond occurred.
   */
  contents: Array<UserStakeUnbondingEntry>;

  extra: UserStakeUnbonding.Extra;
}

export namespace UserStakeUnbonding {
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
      amount_sum: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      amount_sum: string;

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
          amount_sum: string;
        }
      }
    }
  }
}

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
      amount: string;

      unlock_at: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      amount: string;

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
          amount: string;
        }
      }
    }
  }
}

export interface StakingGetOverviewResponse {
  data: UserStake;

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

export interface StakingGetStakingPoolResponse {
  data: UserStakePool;

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

export interface StakingGetStakingPoolsResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<UserStakePool>;

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

export interface StakingGetUnstakingResponse {
  data: StakingGetUnstakingResponse.Data;

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

export namespace StakingGetUnstakingResponse {
  export interface Data {
    /**
     * Total amount of all unbond entries
     *
     * **NOTE:** this value is affected by active filters, if any (e.g. filtering over
     * account index)
     */
    amount_sum: string;

    /**
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

export interface StakingGetStakingPoolParams {
  /**
   * Duration of pool to lookup (**in nanoseconds**)
   *
   * **NOTE:** Either index or duration must be provided. Cannot specify both.
   */
  duration?: number;

  /**
   * Index of pool to lookup
   *
   * **NOTE:** Either index or duration must be provided. Cannot specify both.
   */
  index?: number;

  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface StakingGetStakingPoolsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface StakingGetUnstakingParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export declare namespace Staking {
  export {
    type UserStake as UserStake,
    type UserStakeBondingEntry as UserStakeBondingEntry,
    type UserStakePool as UserStakePool,
    type UserStakeUnbonding as UserStakeUnbonding,
    type UserStakeUnbondingEntry as UserStakeUnbondingEntry,
    type StakingGetOverviewResponse as StakingGetOverviewResponse,
    type StakingGetStakingPoolResponse as StakingGetStakingPoolResponse,
    type StakingGetStakingPoolsResponse as StakingGetStakingPoolsResponse,
    type StakingGetUnstakingResponse as StakingGetUnstakingResponse,
    type StakingGetOverviewParams as StakingGetOverviewParams,
    type StakingGetStakingPoolParams as StakingGetStakingPoolParams,
    type StakingGetStakingPoolsParams as StakingGetStakingPoolsParams,
    type StakingGetUnstakingParams as StakingGetUnstakingParams,
  };
}
