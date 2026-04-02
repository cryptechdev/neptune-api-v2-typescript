// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Routes extends APIResource {
  /**
   * Get swap routes for all denoms
   */
  listAll(query: RouteListAllParams, options?: RequestOptions): APIPromise<RouteListAllResponse> {
    return this._client.get('/api/v1/swap/routes/all', { query, ...options });
  }

  /**
   * Get swap routes for a denom
   */
  listByDenom(query: RouteListByDenomParams, options?: RequestOptions): APIPromise<RouteListByDenomResponse> {
    return this._client.get('/api/v1/swap/routes', { query, ...options });
  }
}

export interface SwapRouteTargetSet {
  /**
   * Source denom for swap routes
   */
  source: string;

  /**
   * List of target denoms for available swap routes
   */
  targets: Array<string>;
}

export interface RouteListAllResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<SwapRouteTargetSet>;

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

export interface RouteListByDenomResponse {
  data: SwapRouteTargetSet;

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

export interface RouteListAllParams {
  /**
   * Swap contract address
   */
  contract_address: string;
}

export interface RouteListByDenomParams {
  /**
   * Swap contract address
   */
  contract_address: string;

  /**
   * Source asset denom to fetch target routes for
   *
   * **Note**: This is a normal injective asset denom, and not an `AssetSpec` ID.
   * E.g. While `inj` is a valid `source_denom, `native;inj` is not valid.
   */
  source_denom: string;
}

export declare namespace Routes {
  export {
    type SwapRouteTargetSet as SwapRouteTargetSet,
    type RouteListAllResponse as RouteListAllResponse,
    type RouteListByDenomResponse as RouteListByDenomResponse,
    type RouteListAllParams as RouteListAllParams,
    type RouteListByDenomParams as RouteListByDenomParams,
  };
}
