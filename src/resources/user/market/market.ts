// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as LendAPI from './lend';
import {
  Lend as LendAPILend,
  LendGetByAssetParams,
  LendGetByAssetResponse,
  LendListParams,
  LendListResponse,
  UserLendMarket,
} from './lend';
import * as BorrowAPI from './borrow/borrow';
import {
  Borrow,
  BorrowGetCollateralAccountsByAssetParams,
  BorrowGetCollateralAccountsByAssetResponse,
  BorrowGetCollateralTotalsParams,
  BorrowGetCollateralTotalsResponse,
  BorrowGetDebtAccountsByAssetParams,
  BorrowGetDebtAccountsByAssetResponse,
  BorrowGetDebtsTotalsParams,
  BorrowGetDebtsTotalsResponse,
  BorrowGetPortfolioParams,
  BorrowGetPortfolioResponse,
  UserBorrowMarket,
  UserBorrowMarketPools,
} from './borrow/borrow';
import * as SubaccountAPI from './borrow/subaccount';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Market extends APIResource {
  lend: LendAPI.Lend = new LendAPI.Lend(this._client);
  borrow: BorrowAPI.Borrow = new BorrowAPI.Borrow(this._client);

  /**
   * Get user markets for all kinds (lend + borrow debt/collateral), grouped together
   * by asset
   */
  getMerged(
    address: string,
    query: MarketGetMergedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketGetMergedResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/merged`, { query, ...options });
  }

  /**
   * Get user's markets (lend + borrow debt/collateral) for a specific asset
   */
  getMergedByAsset(
    address: string,
    query: MarketGetMergedByAssetParams,
    options?: RequestOptions,
  ): APIPromise<MarketGetMergedByAssetResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/merged/lookup`, { query, ...options });
  }

  /**
   * Get user market portfolio
   */
  getPortfolio(
    address: string,
    query: MarketGetPortfolioParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketGetPortfolioResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets`, { query, ...options });
  }
}

export interface UserMarket {
  /**
   * Overview of user borrowing portfolio
   */
  borrow: BorrowAPI.UserBorrowMarket;

  /**
   * Overview of user lending portfolio
   */
  lend: LendAPI.UserLendMarket;
}

/**
 * User market allocations grouped by asset.
 *
 * **Note**: because of the inverted structure of merged market accounts, account
 * health cannot be represented and is excluded in the merged structures.
 */
export interface UserMergedMarket {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * User collateral contribution for asset in borrow market, listed by subaccount
   */
  borrow_collateral: Array<SubaccountAPI.UserCollateralAccountPool>;

  /**
   * User debt contribution for asset in borrow market, listed by subaccount
   */
  borrow_debt: Array<SubaccountAPI.UserDebtAccountPool>;

  /**
   * User contribution for asset's lending market, if one exists
   */
  lend?: UserMergedMarket.Lend | null;
}

export namespace UserMergedMarket {
  /**
   * User contribution for asset's lending market, if one exists
   */
  export interface Lend {
    /**
     * The lending amounts converted into the equivalent for the receipt token's
     * origin/source asset
     */
    origin_equivalent: Lend.OriginEquivalent;

    /**
     * The lending amounts in the original receipt token amounts
     */
    receipt_amounts: Lend.ReceiptAmounts;
  }

  export namespace Lend {
    /**
     * The lending amounts converted into the equivalent for the receipt token's
     * origin/source asset
     */
    export interface OriginEquivalent {
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

      extra: OriginEquivalent.Extra;

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

    export namespace OriginEquivalent {
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

    /**
     * The lending amounts in the original receipt token amounts
     */
    export interface ReceiptAmounts {
      /**
       * Total amount of receipt token collateralized across this user's borrowing
       * portfolio
       */
      collateralized: string;

      extra: ReceiptAmounts.Extra;

      /**
       * Total amount of receipt token held in address balance
       */
      held: string;

      /**
       * Sum of receipt amount held and receipt amount collateralized
       */
      total: string;
    }

    export namespace ReceiptAmounts {
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
  }
}

export interface MarketGetMergedResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<UserMergedMarket>;

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

export interface MarketGetMergedByAssetResponse {
  /**
   * User market allocations grouped by asset.
   *
   * **Note**: because of the inverted structure of merged market accounts, account
   * health cannot be represented and is excluded in the merged structures.
   */
  data: UserMergedMarket;

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

export interface MarketGetPortfolioResponse {
  data: UserMarket;

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

export interface MarketGetMergedParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface MarketGetMergedByAssetParams {
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

export interface MarketGetPortfolioParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

Market.Lend = LendAPILend;
Market.Borrow = Borrow;

export declare namespace Market {
  export {
    type UserMarket as UserMarket,
    type UserMergedMarket as UserMergedMarket,
    type MarketGetMergedResponse as MarketGetMergedResponse,
    type MarketGetMergedByAssetResponse as MarketGetMergedByAssetResponse,
    type MarketGetPortfolioResponse as MarketGetPortfolioResponse,
    type MarketGetMergedParams as MarketGetMergedParams,
    type MarketGetMergedByAssetParams as MarketGetMergedByAssetParams,
    type MarketGetPortfolioParams as MarketGetPortfolioParams,
  };

  export {
    LendAPILend as Lend,
    type UserLendMarket as UserLendMarket,
    type LendListResponse as LendListResponse,
    type LendGetByAssetResponse as LendGetByAssetResponse,
    type LendListParams as LendListParams,
    type LendGetByAssetParams as LendGetByAssetParams,
  };

  export {
    Borrow as Borrow,
    type UserBorrowMarket as UserBorrowMarket,
    type UserBorrowMarketPools as UserBorrowMarketPools,
    type BorrowGetCollateralAccountsByAssetResponse as BorrowGetCollateralAccountsByAssetResponse,
    type BorrowGetCollateralTotalsResponse as BorrowGetCollateralTotalsResponse,
    type BorrowGetDebtAccountsByAssetResponse as BorrowGetDebtAccountsByAssetResponse,
    type BorrowGetDebtsTotalsResponse as BorrowGetDebtsTotalsResponse,
    type BorrowGetPortfolioResponse as BorrowGetPortfolioResponse,
    type BorrowGetCollateralAccountsByAssetParams as BorrowGetCollateralAccountsByAssetParams,
    type BorrowGetCollateralTotalsParams as BorrowGetCollateralTotalsParams,
    type BorrowGetDebtAccountsByAssetParams as BorrowGetDebtAccountsByAssetParams,
    type BorrowGetDebtsTotalsParams as BorrowGetDebtsTotalsParams,
    type BorrowGetPortfolioParams as BorrowGetPortfolioParams,
  };
}
