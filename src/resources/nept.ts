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

/**
 * Merges `StakingPool` with both `StakingPoolWithParams` and `StakingPoolState`
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

/**
 * Object data success response
 */
export interface NeptGetParamsResponse {
  /**
   * Primary response content (object)
   */
  data: NeptGetParamsResponse.Data;

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

export namespace NeptGetParamsResponse {
  /**
   * Primary response content (object)
   */
  export interface Data {
    /**
     * The emission rate of NEPT in tokens per year
     */
    emission_rate: string;

    extra: Data.Extra;

    /**
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
     * Merges `StakingPool` with `StakingPoolParams`
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
}

/**
 * Object data success response
 */
export interface NeptGetStakingOverviewResponse {
  /**
   * Primary response content (object)
   */
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
  /**
   * Primary response content (object)
   */
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
     * Staking pool contract parameter.
     *
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

/**
 * Object data success response
 */
export interface NeptGetStateResponse {
  /**
   * Primary response content (object)
   */
  data: NeptGetStateResponse.Data;

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

export namespace NeptGetStateResponse {
  /**
   * Primary response content (object)
   */
  export interface Data {
    extra: Data.Extra;

    /**
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
     * Merges `StakingPool` with `StakingPoolState`
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
