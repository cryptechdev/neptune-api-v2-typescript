// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import * as LendAPI from '../lend';
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

export interface UserBorrowMarketAccount {
  /**
   * Account collateral allocations
   */
  collaterals: Array<UserCollateralAssetPool>;

  /**
   * Account debt allocations
   */
  debts: Array<LendAPI.UserDebtAssetPool>;

  /**
   * Health data for this account
   */
  health: UserAccountHealth | null;

  /**
   * Account index
   */
  index: number;
}

export interface UserCollateralAssetPool {
  /**
   * Amount of this asset which is actively collateralized
   */
  amount: string;

  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  extra: UserCollateralAssetPool.Extra;
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

/**
 * Object data success response
 */
export interface SubaccountGetSubaccountResponse {
  /**
   * Primary response content (object)
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

/**
 * List data success response
 */
export interface SubaccountGetSubaccountCollateralsResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  /**
   * Primary response content (list)
   */
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

/**
 * List data success response
 */
export interface SubaccountGetSubaccountDebtsResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  /**
   * Primary response content (list)
   */
  data: Array<LendAPI.UserDebtAssetPool>;

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

/**
 * Object data success response
 */
export interface SubaccountGetSubaccountHealthResponse {
  /**
   * Primary response content (object)
   */
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
    type UserCollateralAssetPool as UserCollateralAssetPool,
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
