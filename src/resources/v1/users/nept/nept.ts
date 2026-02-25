// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as NeptNeptAPI from './nept';
import * as AssetsAPI from '../../assets';
import * as NeptAPI from '../../nept';
import * as StakingAPI from './staking/staking';
import {
  Staking,
  StakingListParams,
  StakingListResponse,
  StakingRetrieveUnstakingParams,
  StakingRetrieveUnstakingResponse,
  UserStake,
  UserStakeUnbondingEntry,
} from './staking/staking';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Nept extends APIResource {
  staking: StakingAPI.Staking = new StakingAPI.Staking(this._client);

  /**
   * Get user NEPT unlocks
   */
  retrieveUnlocks(
    address: string,
    query: NeptRetrieveUnlocksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NeptRetrieveUnlocksResponse> {
    return this._client.get(path`/api/v1/users/${address}/nept/unlocks`, { query, ...options });
  }
}

/**
 * `UserNeptUnlockAmounts`
 */
export interface UserNeptUnlockAmounts {
  /**
   * The full unlock amount.
   *
   * This value is immutable and does not change with regards to
   * expiry/reclamation/lock states.
   */
  amount: string;

  /**
   * The amount currently claimable.
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
   * subsequent passing of `expires_at`.
   */
  expired: string;

  extra: UserNeptUnlockAmounts.Extra;

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

export namespace UserNeptUnlockAmounts {
  export interface Extra {
    /**
     * Percentages for unlock amounts. Must provide `?with-percent=true`
     */
    percent?: Extra.Percent | null;

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
     * Percentages for unlock amounts. Must provide `?with-percent=true`
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
         * Human-readable variants of percentages for unlock amounts. Must provide
         * `?with-text=true&with-percent=true`
         */
        text?: Extra.Text | null;
      }

      export namespace Extra {
        /**
         * Human-readable variants of percentages for unlock amounts. Must provide
         * `?with-text=true&with-percent=true`
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
     * Human-readable field variants. Must provide `?with-text=true`
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
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
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

/**
 * `UserNeptUnlockOverview`
 */
export interface UserNeptUnlockOverview {
  /**
   * `UserNeptUnlockArrangement[]` -- A list of the user's active unlock arrangements
   */
  arrangements: Array<UserNeptUnlockOverview.Arrangement>;

  extra: UserNeptUnlockOverview.Extra;

  /**
   * `UserNeptUnlockAmounts`
   */
  totals: UserNeptUnlockAmounts;

  /**
   * The time at which the most recent unlock claim occurred, if any
   */
  last_claimed_at?: string | null;
}

export namespace UserNeptUnlockOverview {
  /**
   * `UserNeptUnlockArrangement`
   */
  export interface Arrangement {
    /**
     * `UserNeptUnlockAmounts`
     */
    amounts: NeptNeptAPI.UserNeptUnlockAmounts;

    /**
     * The time at which the unlock begins
     */
    begins_at: string;

    extra: Arrangement.Extra;

    /**
     * `UserNeptUnlockSchedule`
     */
    schedule: Arrangement.UnionMember0 | Arrangement.LumpSum;

    /**
     * `UserNeptUnlockArrangementAdmin`
     */
    admin?: Arrangement.Admin | null;

    /**
     * The time at which the unlock expires, if any
     */
    expires_at?: string | null;

    /**
     * The time at which the unlock was last claimed, if any
     */
    last_claimed_at?: string | null;
  }

  export namespace Arrangement {
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
        begins_at: string;

        expires_at: string;

        last_claimed_at: string;
      }
    }

    export interface UnionMember0 {
      /**
       * The duration of the unlock
       */
      duration: NeptAPI.Duration;

      /**
       * The time at which the unlock has/was/would've completed. This is identical to
       * `begins_at + duration`.
       *
       * This timestamp will remain valid even if the unlock has been reclaimed.
       * Therefore, it should not be used as a validity check.
       */
      ends_at: string;

      extra: UnionMember0.Extra;

      kind: 'linear';
    }

    export namespace UnionMember0 {
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

          ends_at: string;
        }
      }
    }

    export interface LumpSum {
      kind: 'lump_sum';
    }

    /**
     * `UserNeptUnlockArrangementAdmin`
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
  }

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
      last_claimed_at: string;
    }
  }
}

export interface NeptRetrieveUnlocksResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserNeptUnlockOverview`
   */
  data?: UserNeptUnlockOverview | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface NeptRetrieveUnlocksParams {
  /**
   * Calculate and include proportion percentages, where applicable
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
    type UserNeptUnlockAmounts as UserNeptUnlockAmounts,
    type UserNeptUnlockOverview as UserNeptUnlockOverview,
    type NeptRetrieveUnlocksResponse as NeptRetrieveUnlocksResponse,
    type NeptRetrieveUnlocksParams as NeptRetrieveUnlocksParams,
  };

  export {
    Staking as Staking,
    type UserStake as UserStake,
    type UserStakeUnbondingEntry as UserStakeUnbondingEntry,
    type StakingListResponse as StakingListResponse,
    type StakingRetrieveUnstakingResponse as StakingRetrieveUnstakingResponse,
    type StakingListParams as StakingListParams,
    type StakingRetrieveUnstakingParams as StakingRetrieveUnstakingParams,
  };
}
