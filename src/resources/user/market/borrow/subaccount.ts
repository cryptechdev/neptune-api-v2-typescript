// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import * as MarketsAPI from '../../../markets/markets';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Subaccount extends APIResource {
  /**
   * Get user borrow subaccount
   */
  getSubaccount(
    index: number,
    params: SubaccountGetSubaccountParams,
    options?: RequestOptions,
  ): APIPromise<SubaccountGetSubaccountResponse> {
    const { address, ...query } = params;
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/accounts/${index}`, {
      query,
      ...options,
    });
  }

  /**
   * Get user borrow subaccount collaterals
   */
  getSubaccountCollaterals(
    index: number,
    params: SubaccountGetSubaccountCollateralsParams,
    options?: RequestOptions,
  ): APIPromise<SubaccountGetSubaccountCollateralsResponse> {
    const { address, ...query } = params;
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/accounts/${index}/collaterals`, {
      query,
      ...options,
    });
  }

  /**
   * Get user borrow subaccount debts
   */
  getSubaccountDebts(
    index: number,
    params: SubaccountGetSubaccountDebtsParams,
    options?: RequestOptions,
  ): APIPromise<SubaccountGetSubaccountDebtsResponse> {
    const { address, ...query } = params;
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/accounts/${index}/debts`, {
      query,
      ...options,
    });
  }

  /**
   * Get user borrow subaccount health
   */
  getSubaccountHealth(
    index: number,
    params: SubaccountGetSubaccountHealthParams,
    options?: RequestOptions,
  ): APIPromise<SubaccountGetSubaccountHealthResponse> {
    const { address, ...query } = params;
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/accounts/${index}/health`, {
      query,
      ...options,
    });
  }
}

export interface UserAccountHealth {
  /**
   * Account health value, before any added health boosts
   */
  base: string;

  /**
   * Account health boost to be applied
   */
  boost: string;

  extra: UserAccountHealth.Extra;

  /**
   * Account health, with boost
   */
  result: string;
}

export namespace UserAccountHealth {
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
      base: string;

      boost: string;

      result: string;
    }
  }
}

/**
 * User borrowing subaccount
 */
export interface UserBorrowMarketAccount {
  /**
   * Account collateral allocations
   */
  collaterals: Array<UserCollateralAssetPool>;

  /**
   * Account debt allocations
   */
  debts: Array<UserDebtAssetPool>;

  /**
   * Account debt net rate
   */
  debts_net_rate: MarketsAPI.MarketRate;

  /**
   * Health data for this account
   */
  health: UserAccountHealth | null;

  /**
   * Account index
   */
  index: number;
}

/**
 * Associates a subaccount's index with it's inner allocations for a given asset.
 *
 * This type is identical to `UserCollateralAssetPool`, except the asset
 * association is interchanged for an account index.
 *
 * Typically used in contexts where multiple subaccounts with a shared underlying
 * asset are batched together.
 */
export interface UserCollateralAccountPool {
  extra: UserCollateralAccountPool.Extra;

  /**
   * Account index
   */
  index: number;

  /**
   * Amount of this asset which is actively collateralized
   */
  principal: string;

  shares: string;
}

export namespace UserCollateralAccountPool {
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
      principal: string;

      shares: string;
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
      extra: Value.Extra;

      /**
       * Price used in value calculations
       */
      price: string;

      principal: string;

      shares: string;
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
          /**
           * Text representation of price
           */
          price: string;

          principal: string;

          shares: string;
        }
      }
    }
  }
}

export interface UserCollateralAssetPool {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  extra: UserCollateralAssetPool.Extra;

  /**
   * Amount of this asset which is actively collateralized
   */
  principal: string;

  shares: string;
}

export namespace UserCollateralAssetPool {
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
      principal: string;

      shares: string;
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
      extra: Value.Extra;

      /**
       * Price used in value calculations
       */
      price: string;

      principal: string;

      shares: string;
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
          /**
           * Text representation of price
           */
          price: string;

          principal: string;

          shares: string;
        }
      }
    }
  }
}

/**
 * Associates a subaccount's index with it's inner allocations for a given asset.
 *
 * This type is identical to `UserDebtAssetPool`, except the asset association is
 * interchanged for an account index.
 *
 * Typically used in contexts where multiple subaccounts with a shared underlying
 * asset are batched together.
 */
export interface UserDebtAccountPool {
  extra: UserDebtAccountPool.Extra;

  /**
   * Account index
   */
  index: number;

  /**
   * Initial amount borrowed (of debts which have not yet been repaid)
   */
  principal: string;

  shares: string;
}

export namespace UserDebtAccountPool {
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
      principal: string;

      shares: string;
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
      extra: Value.Extra;

      /**
       * Price used in value calculations
       */
      price: string;

      principal: string;

      shares: string;
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
          /**
           * Text representation of price
           */
          price: string;

          principal: string;

          shares: string;
        }
      }
    }
  }
}

export interface UserDebtAssetPool {
  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  extra: UserDebtAssetPool.Extra;

  /**
   * Current market borrowing rate
   */
  market_rate: MarketsAPI.MarketRate;

  /**
   * Initial amount borrowed (of debts which have not yet been repaid)
   */
  principal: string;

  shares: string;
}

export namespace UserDebtAssetPool {
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
      principal: string;

      shares: string;
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
      extra: Value.Extra;

      /**
       * Price used in value calculations
       */
      price: string;

      principal: string;

      shares: string;
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
          /**
           * Text representation of price
           */
          price: string;

          principal: string;

          shares: string;
        }
      }
    }
  }
}

export interface SubaccountGetSubaccountResponse {
  /**
   * User borrowing subaccount
   */
  data: UserBorrowMarketAccount;

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

export interface SubaccountGetSubaccountCollateralsResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<UserCollateralAssetPool>;

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

export interface SubaccountGetSubaccountDebtsResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<UserDebtAssetPool>;

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

export interface SubaccountGetSubaccountHealthResponse {
  data: UserAccountHealth;

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

export interface SubaccountGetSubaccountParams {
  /**
   * Path param: The user account address
   */
  address: string;

  /**
   * Query param: Include text variation fields
   */
  with_text?: boolean;

  /**
   * Query param: Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface SubaccountGetSubaccountCollateralsParams {
  /**
   * Path param: The user account address
   */
  address: string;

  /**
   * Query param: Include text variation fields
   */
  with_text?: boolean;

  /**
   * Query param: Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface SubaccountGetSubaccountDebtsParams {
  /**
   * Path param: The user account address
   */
  address: string;

  /**
   * Query param: Include text variation fields
   */
  with_text?: boolean;

  /**
   * Query param: Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface SubaccountGetSubaccountHealthParams {
  /**
   * Path param: The user account address
   */
  address: string;

  /**
   * Query param: Include text variation fields
   */
  with_text?: boolean;
}

export declare namespace Subaccount {
  export {
    type UserAccountHealth as UserAccountHealth,
    type UserBorrowMarketAccount as UserBorrowMarketAccount,
    type UserCollateralAccountPool as UserCollateralAccountPool,
    type UserCollateralAssetPool as UserCollateralAssetPool,
    type UserDebtAccountPool as UserDebtAccountPool,
    type UserDebtAssetPool as UserDebtAssetPool,
    type SubaccountGetSubaccountResponse as SubaccountGetSubaccountResponse,
    type SubaccountGetSubaccountCollateralsResponse as SubaccountGetSubaccountCollateralsResponse,
    type SubaccountGetSubaccountDebtsResponse as SubaccountGetSubaccountDebtsResponse,
    type SubaccountGetSubaccountHealthResponse as SubaccountGetSubaccountHealthResponse,
    type SubaccountGetSubaccountParams as SubaccountGetSubaccountParams,
    type SubaccountGetSubaccountCollateralsParams as SubaccountGetSubaccountCollateralsParams,
    type SubaccountGetSubaccountDebtsParams as SubaccountGetSubaccountDebtsParams,
    type SubaccountGetSubaccountHealthParams as SubaccountGetSubaccountHealthParams,
  };
}
