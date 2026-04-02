// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as MarketsAPI from '../../markets/markets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
  getByAsset(
    address: string,
    query: LendGetByAssetParams,
    options?: RequestOptions,
  ): APIPromise<LendGetByAssetResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/lend/lookup`, { query, ...options });
  }
}

export interface UserLendAssetPool {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * Current market lending rate
   */
  market_rate: MarketsAPI.MarketRate;

  /**
   * The lending amounts converted into the equivalent for the receipt token's
   * origin/source asset
   */
  origin_equivalent: UserLendOriginAmounts;

  /**
   * The lending amounts in the original receipt token amounts
   */
  receipt_amounts: UserLendReceiptAmounts;
}

export interface UserLendMarket {
  /**
   * User lending allocations
   */
  asset_pools: Array<UserLendAssetPool>;

  /**
   * Account debt net rate
   */
  net_rate: MarketsAPI.MarketRate;
}

export interface UserLendOriginAmounts {
  /**
   * Total equivalent amount of origin token collateralized across this user's
   * borrowing portfolio
   *
   * **NOTE:** This is **not** the amount of the origin asset that the user holds,
   * but the amount held in the receipt token rendered as the equivalent amount in
   * the origin asset.
   *
   * Or, more formally:
   * `origin_equivalent_collateralized = receipt_collateralized / receipt_redemption_ratio`
   */
  collateralized: string;

  extra: UserLendOriginAmounts.Extra;

  /**
   * Total equivalent amount of origin token held in address balance
   *
   * **NOTE:** This is **not** the amount of the origin asset that the user holds,
   * but the amount held in the receipt token rendered as the equivalent amount in
   * the origin asset.
   *
   * Or, more formally:
   * `origin_equivalent_held = receipt_held / receipt_redemption_ratio`
   */
  held: string;

  /**
   * Total of held and collateralized equivalent for origin asset
   *
   * Or, more formally:
   * `origin_equivalent_total = receipt_lent_total / receipt_redemption_ratio`
   */
  total: string;
}

export namespace UserLendOriginAmounts {
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
      collateralized: string;

      held: string;

      total: string;
    }
  }
}

export interface UserLendReceiptAmounts {
  /**
   * Total amount of receipt token collateralized across this user's borrowing
   * portfolio
   */
  collateralized: string;

  extra: UserLendReceiptAmounts.Extra;

  /**
   * Total amount of receipt token held in address balance
   */
  held: string;

  /**
   * Sum of receipt amount held and receipt amount collateralized
   */
  total: string;
}

export namespace UserLendReceiptAmounts {
  export interface Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    text: Extra.Text | null;

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     *
     * ### Note
     *
     * This variant group contains an additional `price` field (set to the number used
     * in value calculation).
     *
     * The embedded text group will contain the text variant if `with_text` was
     * specified as well.
     */
    value: Extra.Value | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    export interface Text {
      collateralized: string;

      held: string;

      total: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     *
     * ### Note
     *
     * This variant group contains an additional `price` field (set to the number used
     * in value calculation).
     *
     * The embedded text group will contain the text variant if `with_text` was
     * specified as well.
     */
    export interface Value {
      collateralized: string;

      extra: Value.Extra;

      held: string;

      /**
       * Price used in value calculations
       */
      price: string;

      total: string;
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
          collateralized: string;

          held: string;

          /**
           * Text representation of price
           */
          price: string;

          total: string;
        }
      }
    }
  }
}

export interface LendListResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<UserLendMarket>;

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

export interface LendGetByAssetResponse {
  data: UserLendAssetPool;

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

export interface LendGetByAssetParams {
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
    type UserLendAssetPool as UserLendAssetPool,
    type UserLendMarket as UserLendMarket,
    type UserLendOriginAmounts as UserLendOriginAmounts,
    type UserLendReceiptAmounts as UserLendReceiptAmounts,
    type LendListResponse as LendListResponse,
    type LendGetByAssetResponse as LendGetByAssetResponse,
    type LendListParams as LendListParams,
    type LendGetByAssetParams as LendGetByAssetParams,
  };
}
