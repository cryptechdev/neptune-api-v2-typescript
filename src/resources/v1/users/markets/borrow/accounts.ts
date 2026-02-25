// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import * as LendAPI from '../lend';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Get user borrow subaccount
   */
  retrieve(
    index: number,
    params: AccountRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveResponse> {
    const { address, ...query } = params;
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/accounts/${index}`, {
      query,
      ...options,
    });
  }

  /**
   * Get user borrow subaccount collaterals
   */
  getCollaterals(
    index: number,
    params: AccountGetCollateralsParams,
    options?: RequestOptions,
  ): APIPromise<AccountGetCollateralsResponse> {
    const { address, ...query } = params;
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/accounts/${index}/collaterals`, {
      query,
      ...options,
    });
  }

  /**
   * Get user borrow subaccount debts
   */
  getDebts(
    index: number,
    params: AccountGetDebtsParams,
    options?: RequestOptions,
  ): APIPromise<AccountGetDebtsResponse> {
    const { address, ...query } = params;
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/accounts/${index}/debts`, {
      query,
      ...options,
    });
  }

  /**
   * Get user borrow subaccount health
   */
  getHealth(
    index: number,
    params: AccountGetHealthParams,
    options?: RequestOptions,
  ): APIPromise<AccountGetHealthResponse> {
    const { address, ...query } = params;
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/accounts/${index}/health`, {
      query,
      ...options,
    });
  }
}

/**
 * `UserAccountHealth`
 */
export interface UserAccountHealth {
  /**
   * `UserAccountHealthValue`
   *
   * ---
   *
   * Account health value, before any added health boosts
   */
  base: string;

  /**
   * `UserAccountHealthBoost`
   *
   * ---
   *
   * Account health boost to be applied
   */
  boost: string;

  extra: UserAccountHealth.Extra;

  /**
   * `UserAccountHealthValue`
   *
   * ---
   *
   * Account health, with boost
   */
  result: string;
}

export namespace UserAccountHealth {
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
      base: string;

      boost: string;

      result: string;
    }
  }
}

/**
 * `UserBorrowMarketAccount`
 */
export interface UserBorrowMarketAccount {
  /**
   * `UserCollateralAssetPool[]`
   *
   * ---
   *
   * Account collateral allocations
   */
  collaterals: Array<UserCollateralAssetPool>;

  /**
   * `UserDebtAssetPool[]`
   *
   * ---
   *
   * Account debt allocations
   */
  debts: Array<LendAPI.UserDebtAssetPool>;

  /**
   * Account index
   */
  index: number;

  /**
   * `UserAccountHealth`
   */
  health?: UserAccountHealth | null;
}

/**
 * `UserCollateralAssetPool`
 */
export interface UserCollateralAssetPool {
  /**
   * Amount of this asset which is actively collateralized
   */
  amount: string;

  /**
   * `AssetInfo`
   */
  asset_info: AssetsAPI.AssetInfo;

  extra: UserCollateralAssetPool.Extra;
}

export namespace UserCollateralAssetPool {
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
      amount: string;
    }

    /**
     * USD values for the corresponding amounts above. Must provide `?with-value=true`
     */
    export interface Value {
      amount: string;

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
          amount: string;
        }
      }
    }
  }
}

export interface AccountRetrieveResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserBorrowMarketAccount`
   */
  data?: UserBorrowMarketAccount | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface AccountGetCollateralsResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * Total number of objects in all pages
   */
  count?: number | null;

  /**
   * List contents
   */
  data?: Array<UserCollateralAssetPool> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface AccountGetDebtsResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * Total number of objects in all pages
   */
  count?: number | null;

  /**
   * List contents
   */
  data?: Array<LendAPI.UserDebtAssetPool> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface AccountGetHealthResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserAccountHealth`
   */
  data?: UserAccountHealth | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface AccountRetrieveParams {
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

export interface AccountGetCollateralsParams {
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

export interface AccountGetDebtsParams {
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

export interface AccountGetHealthParams {
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

export declare namespace Accounts {
  export {
    type UserAccountHealth as UserAccountHealth,
    type UserBorrowMarketAccount as UserBorrowMarketAccount,
    type UserCollateralAssetPool as UserCollateralAssetPool,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountGetCollateralsResponse as AccountGetCollateralsResponse,
    type AccountGetDebtsResponse as AccountGetDebtsResponse,
    type AccountGetHealthResponse as AccountGetHealthResponse,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountGetCollateralsParams as AccountGetCollateralsParams,
    type AccountGetDebtsParams as AccountGetDebtsParams,
    type AccountGetHealthParams as AccountGetHealthParams,
  };
}
