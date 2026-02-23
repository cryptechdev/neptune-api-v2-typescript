// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NeptAPI from './nept';
import * as AssetsAPI from './assets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Nept extends APIResource {
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
   * Get NEPT token params
   */
  getTokenParams(
    query: NeptGetTokenParamsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NeptGetTokenParamsResponse> {
    return this._client.get('/api/v1/nept/params', { query, ...options });
  }

  /**
   * Get NEPT token state
   */
  getTokenState(
    query: NeptGetTokenStateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NeptGetTokenStateResponse> {
    return this._client.get('/api/v1/nept/state', { query, ...options });
  }
}

export interface Duration {
  nanos: number;

  secs: number;
}

/**
 * `StakingPoolFull`
 *
 * ---
 *
 * Merges `StakingPool` with both `StakingPoolWithParams` and `StakingPoolState`
 */
export interface StakingPoolFull {
  /**
   * The lockup duration for this pool
   */
  duration: Duration;

  extra: StakingPoolFull.Extra;

  /**
   * The ordered index (position) of this pool
   */
  index: number;

  /**
   * `StakingPoolParams`
   */
  params: StakingPoolParams;

  /**
   * `StakingPoolState`
   */
  state: StakingPoolState;
}

export namespace StakingPoolFull {
  export interface Extra {
    /**
     * Human-readable field variants. Must provide `?with-text=true`
     */
    text?: Extra.Text | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Must provide `?with-text=true`
     */
    export interface Text {
      duration: string;

      index: string;
    }
  }
}

/**
 * `StakingPoolParams`
 */
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

/**
 * `StakingPoolState`
 */
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
      total_bonded: string;
    }

    /**
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
     */
    export interface Value {
      extra: Value.Extra;

      total_bonded: string;
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
          total_bonded: string;
        }
      }
    }
  }
}

export interface NeptGetStakingOverviewResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `StakingOverview`
   */
  data?: NeptGetStakingOverviewResponse.Data | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace NeptGetStakingOverviewResponse {
  /**
   * `StakingOverview`
   */
  export interface Data {
    /**
     * `AssetInfo`
     */
    asset_info: AssetsAPI.AssetInfo;

    /**
     * `StakingGlobalState` /// -- /// Staking state values that are not directly
     * associated to a pool
     */
    global_state: Data.GlobalState;

    /**
     * `StakingPool[]` -- Staking pool contract parameter.
     *
     * List of available staking pools
     */
    pools: Array<NeptAPI.StakingPoolFull>;
  }

  export namespace Data {
    /**
     * `StakingGlobalState` /// -- /// Staking state values that are not directly
     * associated to a pool
     */
    export interface GlobalState {
      extra: GlobalState.Extra;

      /**
       * When staking rewards were last distributed
       */
      rewards_last_distributed: string;

      /**
       * **TODO:** rename, proper description
       *
       * stake_acc = âˆ« ( emission_rate / total_reward_weight ) dt
       */
      stake_acc: string;
    }

    export namespace GlobalState {
      export interface Extra {
        /**
         * Human-readable field variants. Must provide `?with-text=true`
         */
        text?: Extra.Text | null;
      }

      export namespace Extra {
        /**
         * Human-readable field variants. Must provide `?with-text=true`
         */
        export interface Text {
          rewards_last_distributed: string;
        }
      }
    }
  }
}

export interface NeptGetTokenParamsResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `NeptParams`
   */
  data?: NeptGetTokenParamsResponse.Data | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace NeptGetTokenParamsResponse {
  /**
   * `NeptParams`
   */
  export interface Data {
    /**
     * The emission rate of NEPT in tokens per year
     */
    emission_rate: string;

    extra: Data.Extra;

    /**
     * `StakingPool[]`
     *
     * ---
     *
     * Staking pools (pool params are included)
     */
    staking_pools: Array<Data.StakingPool>;

    /**
     * Weight:token scaling factor
     *
     * This is defined in the contract spec to mitigate library type restrictions
     */
    tokens_per_weight: number;
  }

  export namespace Data {
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
        emission_rate: string;
      }

      /**
       * USD values for the corresponding amounts above. Must provide `?with-value=true`
       */
      export interface Value {
        emission_rate: string;

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
            emission_rate: string;
          }
        }
      }
    }

    /**
     * `StakingPoolWithParams`
     *
     * ---
     *
     * Merges `StakingPool` with `StakingPoolParams`
     */
    export interface StakingPool {
      /**
       * The lockup duration for this pool
       */
      duration: NeptAPI.Duration;

      extra: StakingPool.Extra;

      /**
       * The ordered index (position) of this pool
       */
      index: number;

      /**
       * `StakingPoolParams`
       */
      params: NeptAPI.StakingPoolParams;
    }

    export namespace StakingPool {
      export interface Extra {
        /**
         * Human-readable field variants. Must provide `?with-text=true`
         */
        text?: Extra.Text | null;
      }

      export namespace Extra {
        /**
         * Human-readable field variants. Must provide `?with-text=true`
         */
        export interface Text {
          duration: string;

          index: string;
        }
      }
    }
  }
}

export interface NeptGetTokenStateResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `NeptState`
   */
  data?: NeptGetTokenStateResponse.Data | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace NeptGetTokenStateResponse {
  /**
   * `NeptState`
   */
  export interface Data {
    extra: Data.Extra;

    /**
     * `StakingPool[]`
     *
     * ---
     *
     * Staking pools (current pool state is included)
     */
    staking: Array<Data.Staking>;

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

  export namespace Data {
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
        total_claimed: string;

        total_issued: string;

        total_locked: string;

        total_supply: string;
      }

      /**
       * USD values for the corresponding amounts above. Must provide `?with-value=true`
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
            total_claimed: string;

            total_issued: string;

            total_locked: string;

            total_supply: string;
          }
        }
      }
    }

    /**
     * `StakingPoolWithState`
     *
     * ---
     *
     * Merges `StakingPool` with `StakingPoolState`
     */
    export interface Staking {
      /**
       * The lockup duration for this pool
       */
      duration: NeptAPI.Duration;

      extra: Staking.Extra;

      /**
       * The ordered index (position) of this pool
       */
      index: number;

      /**
       * `StakingPoolState`
       */
      state: NeptAPI.StakingPoolState;
    }

    export namespace Staking {
      export interface Extra {
        /**
         * Human-readable field variants. Must provide `?with-text=true`
         */
        text?: Extra.Text | null;
      }

      export namespace Extra {
        /**
         * Human-readable field variants. Must provide `?with-text=true`
         */
        export interface Text {
          duration: string;

          index: string;
        }
      }
    }
  }
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

export interface NeptGetTokenParamsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface NeptGetTokenStateParams {
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
    type Duration as Duration,
    type StakingPoolFull as StakingPoolFull,
    type StakingPoolParams as StakingPoolParams,
    type StakingPoolState as StakingPoolState,
    type NeptGetStakingOverviewResponse as NeptGetStakingOverviewResponse,
    type NeptGetTokenParamsResponse as NeptGetTokenParamsResponse,
    type NeptGetTokenStateResponse as NeptGetTokenStateResponse,
    type NeptGetStakingOverviewParams as NeptGetStakingOverviewParams,
    type NeptGetTokenParamsParams as NeptGetTokenParamsParams,
    type NeptGetTokenStateParams as NeptGetTokenStateParams,
  };
}
