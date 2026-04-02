// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NeptAPI from '../nept';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Nept extends APIResource {
  /**
   * Get distribution analytics for NEPT unlocks
   */
  unlocksDistribution(
    query: NeptUnlocksDistributionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NeptUnlocksDistributionResponse> {
    return this._client.get('/api/v1/analytics/nept/unlocks-distribution', { query, ...options });
  }
}

export interface NeptUnlocksDistributionResponse {
  data: NeptUnlocksDistributionResponse.Data;

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

export namespace NeptUnlocksDistributionResponse {
  export interface Data {
    groups: Array<NeptAPI.NeptUnlockDistributionGroup>;
  }
}

export interface NeptUnlocksDistributionParams {
  /**
   * Calculate and include proportional percentages, where applicable
   */
  with_percent?: boolean;

  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export declare namespace Nept {
  export {
    type NeptUnlocksDistributionResponse as NeptUnlocksDistributionResponse,
    type NeptUnlocksDistributionParams as NeptUnlocksDistributionParams,
  };
}
