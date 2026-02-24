// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../assets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Wallet extends APIResource {
  /**
   * Get user portfolio
   */
  retrieveBalances(
    address: string,
    query: WalletRetrieveBalancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WalletRetrieveBalancesResponse> {
    return this._client.get(path`/api/v1/users/${address}/wallet/balances`, { query, ...options });
  }
}

/**
 * `UserWalletPortfolio`
 */
export interface UserWalletPortfolio {
  /**
   * Array of each wallet balance
   */
  balances: Array<UserWalletPortfolio.Balance>;

  extra: UserWalletPortfolio.Extra;

  /**
   * Sum value in USD. Only available when value calculation is enabled.
   *
   * **NOTE:** this only accounts for assets which are internally known & tracked.
   * See the `/assets` endpoint for a list of supported assets.
   */
  total_value?: string;
}

export namespace UserWalletPortfolio {
  /**
   * `WalletBalance`
   */
  export interface Balance {
    /**
     * `AssetSpec`
     *
     * Provides a unique identifier for an asset for use throughout the Neptune API.
     * IDs are unique across asset domains (contract tokens, native denoms, etc)
     */
    asset: AssetsAPI.AssetSpec;

    /**
     * Derived values and amounts.
     */
    values: Balance.UnionMember0 | Balance.UnknownWalletValues;
  }

  export namespace Balance {
    export interface UnionMember0 {
      /**
       * Wallet balance in native denom.
       */
      amount: string;

      /**
       * Amount scaled to the asset's standard unit / decimal places.
       */
      amount_scaled: string;

      /**
       * `AssetInfo`
       */
      asset_info: AssetsAPI.AssetInfo;

      extra: UnionMember0.Extra;

      kind: 'known_asset';
    }

    export namespace UnionMember0 {
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

    /**
     * `UnknownWalletValues`
     */
    export interface UnknownWalletValues {
      kind: 'unknown_asset';
    }
  }

  export interface Extra {
    text?: Extra.Text | null;
  }

  export namespace Extra {
    export interface Text {
      total_value: string;
    }
  }
}

export interface WalletRetrieveBalancesResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserWalletPortfolio`
   */
  data?: UserWalletPortfolio | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface WalletRetrieveBalancesParams {
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
    type WalletRetrieveBalancesResponse as WalletRetrieveBalancesResponse,
    type WalletRetrieveBalancesParams as WalletRetrieveBalancesParams,
  };
}
