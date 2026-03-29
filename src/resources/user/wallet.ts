// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WalletAPI from './wallet';
import * as AssetsAPI from '../assets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Wallet extends APIResource {
  /**
   * Get user balance by asset
   */
  getBalanceByAsset(
    address: string,
    query: WalletGetBalanceByAssetParams,
    options?: RequestOptions,
  ): APIPromise<WalletGetBalanceByAssetResponse> {
    return this._client.get(path`/api/v1/users/${address}/wallet/balance`, { query, ...options });
  }

  /**
   * Get user portfolio
   */
  getBalances(
    address: string,
    query: WalletGetBalancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WalletGetBalancesResponse> {
    return this._client.get(path`/api/v1/users/${address}/wallet/balances`, { query, ...options });
  }
}

export interface UserWalletPortfolio {
  /**
   * Array of each wallet balance
   */
  balances: Array<WalletBalance>;

  extra: UserWalletPortfolio.Extra;

  /**
   * Sum value in USD. Guaranteed null if value calculation is disabled / guaranteed
   * non-null if calculation is enabled.
   *
   * **NOTE:** this only accounts for assets which are internally known & tracked.
   * See the `/assets` endpoint for a list of supported assets.
   */
  total_value: string | null;
}

export namespace UserWalletPortfolio {
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
      total_value: string;
    }
  }
}

export interface WalletAssetKnown {
  /**
   * Wallet balance in native denom.
   */
  amount: string;

  /**
   * Amount scaled to the asset's standard unit / decimal places.
   */
  amount_scaled: string;

  /**
   * Asset identifiers with associated metadata
   */
  asset_info: AssetsAPI.AssetInfo;

  extra: WalletAssetKnown.Extra;

  kind: 'known';
}

export namespace WalletAssetKnown {
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

export interface WalletBalance {
  /**
   * Provides a unique identifier for an asset for use throughout the Neptune API.
   * IDs are unique across asset domains (contract tokens, native denoms, etc)
   */
  asset: AssetsAPI.AssetSpec;

  /**
   * Derived values and amounts.
   */
  values: WalletAssetKnown | WalletBalance.WalletAssetUnknown;
}

export namespace WalletBalance {
  export interface WalletAssetUnknown {
    /**
     * Wallet balance in native denom.
     */
    amount: string;

    kind: 'unknown';
  }
}

/**
 * Object data success response
 */
export interface WalletGetBalanceByAssetResponse {
  /**
   * Primary response content (object)
   */
  data: WalletBalance;

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
export interface WalletGetBalancesResponse {
  /**
   * Primary response content (object)
   */
  data: WalletGetBalancesResponse.Data;

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

export namespace WalletGetBalancesResponse {
  /**
   * Primary response content (object)
   */
  export interface Data {
    /**
     * Array of each wallet balance
     */
    balances: Array<WalletAPI.WalletBalance>;

    /**
     * Sum value in USD. Guaranteed null if value calculation is disabled / guaranteed
     * non-null if calculation is enabled.
     *
     * **NOTE:** this only accounts for assets which are internally known & tracked.
     * See the `/assets` endpoint for a list of supported assets.
     */
    total_value: string | null;
  }
}

export interface WalletGetBalanceByAssetParams {
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

export interface WalletGetBalancesParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export declare namespace Wallet {
  export {
    type UserWalletPortfolio as UserWalletPortfolio,
    type WalletAssetKnown as WalletAssetKnown,
    type WalletBalance as WalletBalance,
    type WalletGetBalanceByAssetResponse as WalletGetBalanceByAssetResponse,
    type WalletGetBalancesResponse as WalletGetBalancesResponse,
    type WalletGetBalanceByAssetParams as WalletGetBalanceByAssetParams,
    type WalletGetBalancesParams as WalletGetBalancesParams,
  };
}
