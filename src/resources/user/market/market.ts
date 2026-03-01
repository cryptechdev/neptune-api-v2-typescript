// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as CoreAPI from '../../core';
import * as LendAPI from './lend';
import {
  Lend as LendAPILend,
  LendGetByAssetParams,
  LendGetByAssetResponse,
  LendListParams,
  LendListResponse,
  UserDebtAssetPool,
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
} from './borrow/borrow';
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
  lend: UserMarket.Lend;
}

export namespace UserMarket {
  /**
   * Overview of user lending portfolio
   */
  export interface Lend {
    /**
     * User lending allocations
     */
    asset_pools: Array<LendAPI.UserDebtAssetPool>;
  }
}

export interface UserMergedMarket {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  /**
   * User collateral contribution for asset in borrow market, listed by subaccount
   */
  borrow_collateral: Array<UserMergedMarket.BorrowCollateral>;

  /**
   * User debt contribution for asset in borrow market, listed by subaccount
   */
  borrow_debt: Array<UserMergedMarket.BorrowDebt>;

  /**
   * User contirbution for asset's lending market, if one exists
   */
  lend?: UserMergedMarket.Lend | null;
}

export namespace UserMergedMarket {
  export interface BorrowCollateral {
    /**
     * Amount of this asset which is actively collateralized
     */
    amount: string;

    extra: BorrowCollateral.Extra;

    /**
     * Account index
     */
    index: number;
  }

  export namespace BorrowCollateral {
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

  export interface BorrowDebt {
    /**
     * Sum open debt amount (this is simply the principal + interest)
     */
    debt: string;

    extra: BorrowDebt.Extra;

    /**
     * Account index
     */
    index: number;

    /**
     * Sum of accrued interest for open debt position
     */
    interest: string;

    /**
     * Initial amount borrowed (of debts which have not yet been repaid)
     */
    principal: string;
  }

  export namespace BorrowDebt {
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
        debt: string;

        interest: string;

        principal: string;
      }

      /**
       * USD values for the corresponding amounts above. Will not be null when query
       * param `with_value` is `true`.
       */
      export interface Value {
        debt: string;

        extra: Value.Extra;

        interest: string;

        principal: string;
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
            debt: string;

            interest: string;

            principal: string;
          }
        }
      }
    }
  }

  /**
   * User contirbution for asset's lending market, if one exists
   */
  export interface Lend {
    /**
     * Sum open debt amount (this is simply the principal + interest)
     */
    debt: string;

    extra: Lend.Extra;

    /**
     * Sum of accrued interest for open debt position
     */
    interest: string;

    /**
     * Initial amount borrowed (of debts which have not yet been repaid)
     */
    principal: string;
  }

  export namespace Lend {
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
        debt: string;

        interest: string;

        principal: string;
      }

      /**
       * USD values for the corresponding amounts above. Will not be null when query
       * param `with_value` is `true`.
       */
      export interface Value {
        debt: string;

        extra: Value.Extra;

        interest: string;

        principal: string;
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
            debt: string;

            interest: string;

            principal: string;
          }
        }
      }
    }
  }
}

export interface MarketGetMergedResponse {
  /**
   * Total number of objects in all pages
   */
  count: number | null;

  /**
   * List contents
   */
  data: Array<UserMergedMarket> | null;

  /**
   * Error message, if any
   */
  error: CoreAPI.ErrorData | null;

  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;
}

export interface MarketGetMergedByAssetResponse {
  /**
   * Object data
   */
  data: UserMergedMarket | null;

  /**
   * Error content, only set if an error occurs
   */
  error: CoreAPI.ErrorData | null;

  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;
}

export interface MarketGetPortfolioResponse {
  /**
   * Object data
   */
  data: UserMarket | null;

  /**
   * Error content, only set if an error occurs
   */
  error: CoreAPI.ErrorData | null;

  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
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
    type UserDebtAssetPool as UserDebtAssetPool,
    type LendListResponse as LendListResponse,
    type LendGetByAssetResponse as LendGetByAssetResponse,
    type LendListParams as LendListParams,
    type LendGetByAssetParams as LendGetByAssetParams,
  };

  export {
    Borrow as Borrow,
    type UserBorrowMarket as UserBorrowMarket,
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
