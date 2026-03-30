// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubaccountAPI from './borrow/subaccount';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Lend extends APIResource {
  /**
   * Get user lending portfolio
   */
  list(
    address: string,
    query: LendListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LendListResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/lend`, { query, ...options });
  }

  /**
   * Lookup user lending distribution by asset
   */
  getByAsset(
    address: string,
    query: LendGetByAssetParams,
    options?: RequestOptions,
  ): APIPromise<LendGetByAssetResponse> {
    return this._client.get(path`/api/v1/users/${address}/markets/lend/lookup`, { query, ...options });
  }
}

export interface UserLendMarket {
  /**
   * User lending allocations
   */
  asset_pools: Array<SubaccountAPI.UserDebtAssetPool>;
}

/**
 * List data success response
 */
export interface LendListResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<SubaccountAPI.UserDebtAssetPool>;

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
export interface LendGetByAssetResponse {
  data: SubaccountAPI.UserDebtAssetPool;

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

export interface LendListParams {
  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface LendGetByAssetParams {
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

export declare namespace Lend {
  export {
    type UserLendMarket as UserLendMarket,
    type LendListResponse as LendListResponse,
    type LendGetByAssetResponse as LendGetByAssetResponse,
    type LendListParams as LendListParams,
    type LendGetByAssetParams as LendGetByAssetParams,
  };
}
