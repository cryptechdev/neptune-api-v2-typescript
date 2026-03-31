// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NeptAPI from './nept';
import * as StakingAPI from './staking';
import {
  Staking,
  StakingGetOverviewParams,
  StakingGetOverviewResponse,
  StakingGetStakingPoolParams,
  StakingGetStakingPoolResponse,
  StakingGetStakingPoolsParams,
  StakingGetStakingPoolsResponse,
  StakingGetUnstakingParams,
  StakingGetUnstakingResponse,
  UserStake,
  UserStakeBondingEntry,
  UserStakePool,
  UserStakeUnbonding,
  UserStakeUnbondingEntry,
} from './staking';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Nept extends APIResource {
  staking: StakingAPI.Staking = new StakingAPI.Staking(this._client);

  /**
   * Get user NEPT unlocks
   */
  getUnlocks(
    address: string,
    query: NeptGetUnlocksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NeptGetUnlocksResponse> {
    return this._client.get(path`/api/v1/users/${address}/nept/unlocks`, { query, ...options });
  }
}

export interface UserUnlockAmounts {
  /**
   * The full unlock amount
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
  claimable: string;

  /**
   * The amount that has already been successfully claimed by the user.
   */
  claimed: string;

  /**
   * The amount that was claimable but has now expired due to the presence and
   * subsequent passing of `expires_at`
   */
  expired: string;

  extra: UserUnlockAmounts.Extra;

  /**
   * The total amount of NEPT currently awaiting unlock **NOTE:** any reclaimed
   * unlocks are excluded from the total, regardless of how much the user had claimed
   * prior to reclamation.
   */
  locked: string;

  /**
   * The amount that has been reclaimed from the unlock arrangement admin
   */
  reclaimed: string;
}

export namespace UserUnlockAmounts {
  export interface Extra {
    /**
     * Percentages for unlock amounts. Will not be null when query param `with_percent`
     * is `true`.
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
     * Percentages for unlock amounts. Will not be null when query param `with_percent`
     * is `true`.
     */
    export interface Percent {
      claimable: string;

      claimed: string;

      expired: string;

      extra: Percent.Extra;

      locked: string;

      reclaimed: string;
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
          claimable: string;

          claimed: string;

          expired: string;

          locked: string;

          reclaimed: string;
        }
      }
    }

    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    export interface Text {
      amount: string;

      claimable: string;

      claimed: string;

      expired: string;

      locked: string;

      reclaimed: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      amount: string;

      claimable: string;

      claimed: string;

      expired: string;

      extra: Value.Extra;

      locked: string;

      reclaimed: string;
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

          claimable: string;

          claimed: string;

          expired: string;

          locked: string;

          reclaimed: string;
        }
      }
    }
  }
}

export interface UserUnlockOverview {
  /**
   * A list of the user's active unlock arrangements
   */
  arrangements: Array<UserUnlockOverview.Arrangement>;

  extra: UserUnlockOverview.Extra;

  /**
   * The time at which the most recent unlock claim occurred, if any
   */
  last_claimed_at: string | null;

  /**
   * Contains pre-calculated total amounts for all unlock agreements
   */
  totals: UserUnlockAmounts;
}

export namespace UserUnlockOverview {
  export interface Arrangement {
    /**
     * The admin of the unlock, if any
     */
    admin: Arrangement.Admin | null;

    /**
     * Primary unlock amount and other pre-calculated/derived amounts
     */
    amounts: NeptAPI.UserUnlockAmounts;

    /**
     * The time at which the unlock begins
     */
    begins_at: string;

    /**
     * The time at which the unlock expires, if any
     */
    expires_at: string | null;

    extra: Arrangement.Extra;

    /**
     * The time at which the unlock was last claimed, if any
     */
    last_claimed_at: string | null;

    /**
     * The schedule of the unlock
     */
    schedule: NeptAPI.UserUnlockSchedule;
  }

  export namespace Arrangement {
    /**
     * The admin of the unlock, if any
     */
    export interface Admin {
      /**
       * The address of the unlock arrangement's admin
       */
      address: string;

      /**
       * True if the admin his issued a reclaim on the unlock arrangement
       */
      issued_reclaim: boolean;
    }

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
        begins_at: string;

        expires_at: string;

        last_claimed_at: string;
      }
    }
  }

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
      last_claimed_at: string;
    }
  }
}

export type UserUnlockSchedule = UserUnlockScheduleLinear | UserUnlockScheduleLumpSum;

export interface UserUnlockScheduleLinear {
  /**
   * The duration of the unlock in seconds
   */
  duration: number;

  /**
   * The time at which the unlock has/was/would've completed. This is identical to
   * `begins_at + duration`.
   *
   * This timestamp will remain valid even if the unlock has been reclaimed.
   * Therefore, it should not be used as a validity check.
   */
  ends_at: string;

  extra: UserUnlockScheduleLinear.Extra;

  kind: 'linear';
}

export namespace UserUnlockScheduleLinear {
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

      ends_at: string;
    }
  }
}

export interface UserUnlockScheduleLumpSum {
  kind: 'lump_sum';
}

export interface NeptGetUnlocksResponse {
  data: UserUnlockOverview;

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

export interface NeptGetUnlocksParams {
  /**
   * Calculate and include proportional percentages, where applicable
   */
  with_percent?: boolean;

  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

Nept.Staking = Staking;

export declare namespace Nept {
  export {
    type UserUnlockAmounts as UserUnlockAmounts,
    type UserUnlockOverview as UserUnlockOverview,
    type UserUnlockSchedule as UserUnlockSchedule,
    type UserUnlockScheduleLinear as UserUnlockScheduleLinear,
    type UserUnlockScheduleLumpSum as UserUnlockScheduleLumpSum,
    type NeptGetUnlocksResponse as NeptGetUnlocksResponse,
    type NeptGetUnlocksParams as NeptGetUnlocksParams,
  };

  export {
    Staking as Staking,
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
