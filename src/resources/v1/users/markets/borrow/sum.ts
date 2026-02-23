// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AssetsAPI from '../../../assets';
import * as LendAPI from '../lend';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Sum extends APIResource {
  /**
   * Get user combined collaterals for all subaccounts
   */
  retrieveCollaterals(
    address: string,
    query: SumRetrieveCollateralsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SumRetrieveCollateralsResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/sum/collaterals`, {
      query,
      ...options,
    });
  }

  /**
   * Get user combined debts for all subaccounts
   */
  retrieveDebts(
    address: string,
    query: SumRetrieveDebtsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SumRetrieveDebtsResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/borrow/sum/debts`, { query, ...options });
  }
}

export interface SumRetrieveCollateralsResponse {
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
  data?: Array<AccountsAPI.UserCollateralAssetPool> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export interface SumRetrieveDebtsResponse {
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

export interface SumRetrieveCollateralsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface SumRetrieveDebtsParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export declare namespace Sum {
  export {
    type SumRetrieveCollateralsResponse as SumRetrieveCollateralsResponse,
    type SumRetrieveDebtsResponse as SumRetrieveDebtsResponse,
    type SumRetrieveCollateralsParams as SumRetrieveCollateralsParams,
    type SumRetrieveDebtsParams as SumRetrieveDebtsParams,
  };
}
