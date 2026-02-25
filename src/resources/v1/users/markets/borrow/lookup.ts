// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Lookup extends APIResource {
  /**
   * Lookup user borrow market collateral accounts by asset
   */
  getCollateralAccounts(
    address: string,
    query: LookupGetCollateralAccountsParams,
    options?: RequestOptions,
  ): APIPromise<LookupGetCollateralAccountsResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/lookup/collateral`, {
      query,
      ...options,
    });
  }

  /**
   * Lookup user borrow market debt by accounts by asset
   */
  getDebtAccounts(
    address: string,
    query: LookupGetDebtAccountsParams,
    options?: RequestOptions,
  ): APIPromise<LookupGetDebtAccountsResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/lookup/debt`, { query, ...options });
  }
}

export interface LookupGetCollateralAccountsResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserCollateralLookup`
   */
  data?: LookupGetCollateralAccountsResponse.Data | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace LookupGetCollateralAccountsResponse {
  /**
   * `UserCollateralLookup`
   */
  export interface Data {
    /**
     * `UserMergedCollateralAccount[]`
     *
     * ---
     *
     * All collateral subaccounts for the associated asset type Collateral sub-accounts
     * for the user
     */
    accounts: Array<Data.Account>;

    /**
     * `AssetInfo`
     */
    asset_info: AssetsAPI.AssetInfo;
  }

  export namespace Data {
    /**
     * `UserCollateralAccountPool`
     */
    export interface Account {
      /**
       * Amount of this asset which is actively collateralized
       */
      amount: string;

      extra: Account.Extra;

      /**
       * Account index
       */
      index: number;
    }

    export namespace Account {
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
  }
}

export interface LookupGetDebtAccountsResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `UserDebtLookup`
   */
  data?: LookupGetDebtAccountsResponse.Data | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace LookupGetDebtAccountsResponse {
  /**
   * `UserDebtLookup`
   */
  export interface Data {
    /**
     * `UserDebtAccountPool[]`
     *
     * ---
     *
     * All debt subaccounts for the associated asset type
     */
    accounts: Array<Data.Account>;

    /**
     * `AssetInfo`
     */
    asset_info: AssetsAPI.AssetInfo;
  }

  export namespace Data {
    /**
     * `UserCollateralAccountPool`
     */
    export interface Account {
      /**
       * Sum open debt amount (this is simply the principal + interest)
       */
      debt: string;

      extra: Account.Extra;

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

    export namespace Account {
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
          debt: string;

          interest: string;

          principal: string;
        }

        /**
         * USD values for the corresponding amounts above. Must provide `?with-value=true`
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
              debt: string;

              interest: string;

              principal: string;
            }
          }
        }
      }
    }
  }
}

export interface LookupGetCollateralAccountsParams {
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

export interface LookupGetDebtAccountsParams {
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

export declare namespace Lookup {
  export {
    type LookupGetCollateralAccountsResponse as LookupGetCollateralAccountsResponse,
    type LookupGetDebtAccountsResponse as LookupGetDebtAccountsResponse,
    type LookupGetCollateralAccountsParams as LookupGetCollateralAccountsParams,
    type LookupGetDebtAccountsParams as LookupGetDebtAccountsParams,
  };
}
