// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as NeptAPI from './nept';
import * as AssetsAPI from './assets';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Nept extends APIResource {
  /**
   * Get NEPT token params
   */
  getParams(
    query: NeptGetParamsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NeptGetParamsResponse> {
    return this._client.get('/api/v1/nept/params', { query, ...options });
  }

  /**
   * Get NEPT staking overview (incl. state + params)
   */
  getStakingOverview(
    query: NeptGetStakingOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NeptGetStakingOverviewResponse> {
    return this._client.get('/api/v1/nept/staking', { query, ...options });
  }

  /**
   * Get NEPT token state
   */
  getState(
    query: NeptGetStateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NeptGetStateResponse> {
    return this._client.get('/api/v1/nept/state', { query, ...options });
  }
}

export interface NeptParams {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * The emission rate of NEPT in tokens per year
   */
  emission_rate: string;

  extra: NeptParams.Extra;

  /**
   * Staking pools
   */
  staking_pools: Array<NeptParams.StakingPool>;

  /**
   * Weight:token scaling factor
   *
   * This is defined in the contract spec to mitigate library type restrictions
   */
  tokens_per_weight: number;
}

export namespace NeptParams {
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
      emission_rate: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      emission_rate: string;

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
          emission_rate: string;
        }
      }
    }
  }

  /**
   * Staking pool contents along with associated pool params
   */
  export interface StakingPool {
    /**
     * The lockup duration for this pool in seconds
     */
    duration: number;

    extra: StakingPool.Extra;

    /**
     * The ordered index (position) of this pool
     */
    index: number;

    /**
     * Staking pool contract parameters
     */
    params: NeptAPI.StakingPoolParams;
  }

  export namespace StakingPool {
    export interface Extra {
      /**
       * Human-readable field variants. Will not be null when query param `with_text` is
       * `true`.
       */
      text: Extra.Text | null;
    }

    export namespace Extra {
      /**
       * Human-readable field variants. Will not be null when query param `with_text` is
       * `true`.
       */
      export interface Text {
        duration: string;

        index: string;
      }
    }
  }
}

export interface NeptState {
  extra: NeptState.Extra;

  /**
   * Staking pools (current pool state is included)
   */
  staking: Array<NeptState.Staking>;

  /**
   * Total amount of NEPT claimed, either locked or unlocked
   *
   * Includes initial balances and claimed rewards but not unclaimed rewards
   */
  total_claimed: string;

  /**
   * Total amount of NEPT issued, either locked or unlocked
   *
   * Includes initial balances and all claimed or claimable rewards
   */
  total_issued: string;

  /**
   * Total amount of NEPT locked
   *
   * Inlcudes unlocks which have not yet been claimed
   */
  total_locked: string;

  /**
   * Total supply of NEPT
   *
   * Includes locked and unissued tokens
   */
  total_supply: string;
}

export namespace NeptState {
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
      total_claimed: string;

      total_issued: string;

      total_locked: string;

      total_supply: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      extra: Value.Extra;

      total_claimed: string;

      total_issued: string;

      total_locked: string;

      total_supply: string;
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
          total_claimed: string;

          total_issued: string;

          total_locked: string;

          total_supply: string;
        }
      }
    }
  }

  /**
   * Staking pool contents along with associated pool state
   */
  export interface Staking {
    /**
     * The lockup duration for this pool in seconds
     */
    duration: number;

    extra: Staking.Extra;

    /**
     * The ordered index (position) of this pool
     */
    index: number;

    /**
     * Current contract state of staking pool
     */
    state: NeptAPI.StakingPoolState;
  }

  export namespace Staking {
    export interface Extra {
      /**
       * Human-readable field variants. Will not be null when query param `with_text` is
       * `true`.
       */
      text: Extra.Text | null;
    }

    export namespace Extra {
      /**
       * Human-readable field variants. Will not be null when query param `with_text` is
       * `true`.
       */
      export interface Text {
        duration: string;

        index: string;
      }
    }
  }
}

export interface NeptUnlockDistributionGroup {
  /**
   * The sum of all token distribution unlock amounts for this group.
   *
   * This value is immutable and does not change with regards to
   * expiry/reclamation/lock states.
   */
  amount: string;

  /**
   * The amount currently claimable
   *
   * This takes into account: reclamation, lock state, expiry, and previously
   * claimed. In other words, this is an accurate representation of what the user can
   * currently claim.
   */
  amount_claimable: string;

  /**
   * The amount that has already been successfully claimed by the user
   */
  amount_claimed: string;

  /**
   * The amount that has expired.
   *
   * This will be the remaining unclaimed amount (if any) once the time specified by
   * the `expires_at` is past (if one is set).
   *
   * **NOTE:** Reclaimed amouts take priority.
   *
   * - If the remaining amount is reclaimed prior to a configured `expires_at`, this
   *   will remain at 0 and will not change even after the `expires_at` time is
   *   reached.
   */
  amount_expired: string;

  /**
   * The total amount of NEPT currently held by the addresses in this group.
   */
  amount_held: string;

  /**
   * The total amount of NEPT currently time-locked.
   *
   * **NOTE:** This does not factor in reclaimed or expired states.
   *
   * - For linear unlock schedules:
   *
   *   - This represents how much NEPT is time-locked by the `begins_at` and the
   *     `ends_at` properties.
   *
   * - For lump sum unlocks:
   *   - This will be the full amount prior to the `begins_at` unlock property.
   *   - Once the time indicated by the `begins_at` property has been reached, this
   *     value will be 0.
   */
  amount_locked: string;

  /**
   * The amount that has been reclaimed from the unlock arrangement admin
   *
   * This will be the amount of the remaining unclaimed and locked at the time the
   * reclaim is issued.
   */
  amount_reclaimed: string;

  /**
   * The total amount of NEPT current staked by the addresses in this group.
   */
  amount_staked: string;

  /**
   * The total amount of NEPT currently unlocked
   *
   * **NOTE:** This does not factor in reclaimed or expired states.
   *
   * - For linear unlock schedules:
   *
   *   - This represents the "progress" of unlocked NEPT from the time range between
   *     the `begins_at` and the `ends_at` properties.
   *
   * - For lump sum unlocks:
   *   - This will be 0 at any given time prior to the timestamp provided by the
   *     `begins_at` unlock property.
   *   - Once the time indicated by the `begins_at` property has been reached, this
   *     value will be the full amount of the unlock.
   */
  amount_unlocked: string;

  extra: NeptUnlockDistributionGroup.Extra;

  /**
   * The group category
   */
  member_class: 'team' | 'advisor' | 'investor';
}

export namespace NeptUnlockDistributionGroup {
  export interface Extra {
    /**
     * Percentages for unlock amounts. These do not factor in the `amount_staked` or
     * `amount_held` values. Will not be null when query param `with_percent` is
     * `true`.
     */
    percent: Extra.Percent | null;

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
     * Percentages for unlock amounts. These do not factor in the `amount_staked` or
     * `amount_held` values. Will not be null when query param `with_percent` is
     * `true`.
     */
    export interface Percent {
      amount_claimable: string;

      amount_claimed: string;

      amount_expired: string;

      amount_locked: string;

      amount_reclaimed: string;

      amount_unlocked: string;

      extra: Percent.Extra;
    }

    export namespace Percent {
      export interface Extra {
        /**
         * Human-readable variants of percentages for unlock amounts. Will not be null when
         * query params `with_text` and `with_percent` are `true`.
         */
        text: Extra.Text | null;
      }

      export namespace Extra {
        /**
         * Human-readable variants of percentages for unlock amounts. Will not be null when
         * query params `with_text` and `with_percent` are `true`.
         */
        export interface Text {
          amount_claimable: string;

          amount_claimed: string;

          amount_expired: string;

          amount_locked: string;

          amount_reclaimed: string;

          amount_unlocked: string;
        }
      }
    }

    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    export interface Text {
      amount: string;

      amount_claimable: string;

      amount_claimed: string;

      amount_expired: string;

      amount_held: string;

      amount_locked: string;

      amount_reclaimed: string;

      amount_staked: string;

      amount_unlocked: string;

      member_class: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      amount: string;

      amount_claimable: string;

      amount_claimed: string;

      amount_expired: string;

      amount_held: string;

      amount_locked: string;

      amount_reclaimed: string;

      amount_staked: string;

      amount_unlocked: string;

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

          amount_claimable: string;

          amount_claimed: string;

          amount_expired: string;

          amount_held: string;

          amount_locked: string;

          amount_reclaimed: string;

          amount_staked: string;

          amount_unlocked: string;
        }
      }
    }
  }
}

/**
 * Staking pool contents along with associated pool state and pool params
 */
export interface StakingPoolFull {
  /**
   * The lockup duration for this pool in seconds
   */
  duration: number;

  extra: StakingPoolFull.Extra;

  /**
   * The ordered index (position) of this pool
   */
  index: number;

  /**
   * Staking pool contract parameters
   */
  params: StakingPoolParams;

  /**
   * Current contract state of staking pool
   */
  state: StakingPoolState;
}

export namespace StakingPoolFull {
  export interface Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    text: Extra.Text | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    export interface Text {
      duration: string;

      index: string;
    }
  }
}

export interface StakingPoolParams {
  /**
   * The pool's weight (multiplier) for flash loans volume
   */
  flash_loan_weight: string;

  /**
   * The pool's weight (multiplier) on governance for an associated stake
   */
  gov_weight: string;

  /**
   * The pool's weight (multiplier) on account health for an associated stake
   */
  health_weight: string;

  /**
   * The pool's weight (multiplier) on rewards for an associated stake
   */
  reward_weight: string;
}

export interface StakingPoolState {
  extra: StakingPoolState.Extra;

  /**
   * The total amount staked to this pool
   */
  total_bonded: string;
}

export namespace StakingPoolState {
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
      total_bonded: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      extra: Value.Extra;

      total_bonded: string;
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
          total_bonded: string;
        }
      }
    }
  }
}

export interface NeptGetParamsResponse {
  data: NeptParams;

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

export interface NeptGetStakingOverviewResponse {
  data: NeptGetStakingOverviewResponse.Data;

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

export namespace NeptGetStakingOverviewResponse {
  export interface Data {
    /**
     * Asset identifiers with associated metadata
     */
    asset_info: AssetsAPI.AssetInfo;

    /**
     * Staking state values that are not directly associated to a pool
     */
    global_state: Data.GlobalState;

    /**
     * List of available staking pools
     */
    pools: Array<NeptAPI.StakingPoolFull>;
  }

  export namespace Data {
    /**
     * Staking state values that are not directly associated to a pool
     */
    export interface GlobalState {
      extra: GlobalState.Extra;

      /**
       * When staking rewards were last distributed
       */
      rewards_last_distributed: string;

      /**
       * **! TODO:** rename, proper description, text/value?
       *
       * stake_acc = ∫ ( emission_rate / total_reward_weight ) dt
       */
      stake_acc: string;
    }

    export namespace GlobalState {
      export interface Extra {
        /**
         * Human-readable field variants. Will not be null when query param `with_text` is
         * `true`.
         */
        text: Extra.Text | null;
      }

      export namespace Extra {
        /**
         * Human-readable field variants. Will not be null when query param `with_text` is
         * `true`.
         */
        export interface Text {
          rewards_last_distributed: string;
        }
      }
    }
  }
}

export interface NeptGetStateResponse {
  data: NeptState;

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

export interface NeptGetParamsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface NeptGetStakingOverviewParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface NeptGetStateParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export declare namespace Nept {
  export {
    type NeptParams as NeptParams,
    type NeptState as NeptState,
    type NeptUnlockDistributionGroup as NeptUnlockDistributionGroup,
    type StakingPoolFull as StakingPoolFull,
    type StakingPoolParams as StakingPoolParams,
    type StakingPoolState as StakingPoolState,
    type NeptGetParamsResponse as NeptGetParamsResponse,
    type NeptGetStakingOverviewResponse as NeptGetStakingOverviewResponse,
    type NeptGetStateResponse as NeptGetStateResponse,
    type NeptGetParamsParams as NeptGetParamsParams,
    type NeptGetStakingOverviewParams as NeptGetStakingOverviewParams,
    type NeptGetStateParams as NeptGetStateParams,
  };
}
