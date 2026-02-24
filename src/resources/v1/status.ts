// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Status extends APIResource {
  /**
   * `status` will always be `ok` whenever a 200 response is provided.
   *
   * Clients can check response data or response status code to confirm health.
   */
  checkHealth(options?: RequestOptions): APIPromise<StatusCheckHealthResponse> {
    return this._client.get('/api/v1/status/health', options);
  }
}

/**
 * API health response
 */
export interface StatusCheckHealthResponse {
  status: 'ok';
}

export declare namespace Status {
  export { type StatusCheckHealthResponse as StatusCheckHealthResponse };
}
