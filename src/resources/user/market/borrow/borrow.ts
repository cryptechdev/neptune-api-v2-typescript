// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import * as CoreAPI from '../../../core';
import * as LendAPI from '../lend';
import * as SubaccountAPI from './subaccount';
import {
  Subaccount,
  SubaccountGetSubaccountCollateralsParams,
  SubaccountGetSubaccountCollateralsResponse,
  SubaccountGetSubaccountDebtsParams,
  SubaccountGetSubaccountDebtsResponse,
  SubaccountGetSubaccountHealthParams,
  SubaccountGetSubaccountHealthResponse,
  SubaccountGetSubaccountParams,
  SubaccountGetSubaccountResponse,
  UserAccountHealth,
  UserBorrowMarketAccount,
  UserCollateralAssetPool,
} from './subaccount';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Borrow extends APIResource {
  subaccount: SubaccountAPI.Subaccount = new SubaccountAPI.Subaccount(this._client);

  /**
   * Lookup user borrow market collateral accounts by asset
   */
  getCollateralAccountsByAsset(
    address: string,
    query: BorrowGetCollateralAccountsByAssetParams,
    options?: RequestOptions,
  ): APIPromise<BorrowGetCollateralAccountsByAssetResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/lookup/collateral`, {
      query,
      ...options,
    });
  }

  /**
   * Get user combined collaterals for all subaccounts
   */
  getCollateralTotals(
    address: string,
    query: BorrowGetCollateralTotalsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BorrowGetCollateralTotalsResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/sum/collaterals`, {
      query,
      ...options,
    });
  }

  /**
   * Lookup user borrow market debt accounts by asset
   */
  getDebtAccountsByAsset(
    address: string,
    query: BorrowGetDebtAccountsByAssetParams,
    options?: RequestOptions,
  ): APIPromise<BorrowGetDebtAccountsByAssetResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/lookup/debt`, { query, ...options });
  }

  /**
   * Get user combined debts for all subaccounts
   */
  getDebtsTotals(
    address: string,
    query: BorrowGetDebtsTotalsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BorrowGetDebtsTotalsResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/sum/debts`, { query, ...options });
  }

  /**
   * Get user borrow portfolio
   */
  getPortfolio(
    address: string,
    query: BorrowGetPortfolioParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BorrowGetPortfolioResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow`, { query, ...options });
  }
}

export interface UserBorrowMarket {
  /**
   * Market sub-accounts for the user
   */
  accounts: Array<SubaccountAPI.UserBorrowMarketAccount>;

  /**
   * Collateral/debt totals of all sub-accounts by asset
   */
  totals: UserBorrowMarket.Totals;
}

export namespace UserBorrowMarket {
  /**
   * Collateral/debt totals of all sub-accounts by asset
   */
  export interface Totals {
    /**
     * Account collateral allocations
     */
    collaterals: Array<SubaccountAPI.UserCollateralAssetPool>;

    /**
     * Account debt allocations
     */
    debts: Array<LendAPI.UserDebtAssetPool>;
  }
}

export interface BorrowGetCollateralAccountsByAssetResponse {
  /**
   * Object data
   */
  data: BorrowGetCollateralAccountsByAssetResponse.Data | null;

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

export namespace BorrowGetCollateralAccountsByAssetResponse {
  /**
   * Object data
   */
  export interface Data {
    /**
     * All collateral subaccounts for the associated asset type
     */
    accounts: Array<Data.Account>;

    /**
     * Asset identifiers with associated metadata
     */
    asset_info: AssetsAPI.AssetInfo;
  }

  export namespace Data {
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
  }
}

export interface BorrowGetCollateralTotalsResponse {
  /**
   * Total number of objects in all pages
   */
  count: number | null;

  /**
   * List contents
   */
  data: Array<SubaccountAPI.UserCollateralAssetPool> | null;

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

export interface BorrowGetDebtAccountsByAssetResponse {
  /**
   * Object data
   */
  data: BorrowGetDebtAccountsByAssetResponse.Data | null;

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

export namespace BorrowGetDebtAccountsByAssetResponse {
  /**
   * Object data
   */
  export interface Data {
    /**
     * All debt subaccounts for the associated asset type
     */
    accounts: Array<Data.Account>;

    /**
     * Asset identifiers with associated metadata
     */
    asset_info: AssetsAPI.AssetInfo;
  }

  export namespace Data {
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
}

export interface BorrowGetDebtsTotalsResponse {
  /**
   * Total number of objects in all pages
   */
  count: number | null;

  /**
   * List contents
   */
  data: Array<LendAPI.UserDebtAssetPool> | null;

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

export interface BorrowGetPortfolioResponse {
  /**
   * Object data
   */
  data: UserBorrowMarket | null;

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

export interface BorrowGetCollateralAccountsByAssetParams {
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

export interface BorrowGetCollateralTotalsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface BorrowGetDebtAccountsByAssetParams {
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

export interface BorrowGetDebtsTotalsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface BorrowGetPortfolioParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

Borrow.Subaccount = Subaccount;

export declare namespace Borrow {
  export {
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

  export {
    Subaccount as Subaccount,
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
