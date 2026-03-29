// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Nept extends APIResource {
  /**
   * Get distribution analytics for NEPT unlocks
   */
  unlocksDistribution(
    query: NeptUnlocksDistributionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NeptUnlocksDistributionResponse> {
    return this._client.get('/api/v1/analytics/nept/unlocks-distribution', { query, ...options });
  }
}

/**
 * Object data success response
 */
export interface NeptUnlocksDistributionResponse {
  /**
   * Primary response content (object)
   */
  data: NeptUnlocksDistributionResponse.Data;

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

export namespace NeptUnlocksDistributionResponse {
  /**
   * Primary response content (object)
   */
  export interface Data {
    groups: Array<Data.Group>;
  }

  export namespace Data {
    export interface Group {
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

      extra: Group.Extra;

      /**
       * The group category
       */
      member_class: 'team' | 'advisor' | 'investor';
    }

    export namespace Group {
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
  }
}

export interface NeptUnlocksDistributionParams {
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

export declare namespace Nept {
  export {
    type NeptUnlocksDistributionResponse as NeptUnlocksDistributionResponse,
    type NeptUnlocksDistributionParams as NeptUnlocksDistributionParams,
  };
}
