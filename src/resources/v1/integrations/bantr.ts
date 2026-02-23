// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Bantr extends APIResource {
  /**
   * .
   */
  retrieveTransactions(
    query: BantrRetrieveTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<BantrRetrieveTransactionsResponse> {
    return this._client.get('/api/v1/integrations/bantr/transactions', { query, ...options });
  }
}

export interface BantrRetrieveTransactionsResponse {
  success: boolean;

  data?: Array<BantrRetrieveTransactionsResponse.Data> | null;

  error?: BantrRetrieveTransactionsResponse.Error | null;
}

export namespace BantrRetrieveTransactionsResponse {
  export interface Data {
    /**
     * The type of action (e.g., lend, borrow).
     */
    action: string;

    /**
     * The block number where the transaction was
     */
    block: number;

    /**
     * Value of tokens sent into the transaction in USD.
     */
    tokens_amount_in_usd: string;

    /**
     * Value of tokens received from the transaction in USD.
     */
    tokens_amount_out_usd: string;

    /**
     * The transaction hash.
     */
    txn_hash: string;

    /**
     * A unique identifier for the transaction from your system
     */
    unique_foreign_txn_id: string;

    /**
     * The wallet address of the user.
     */
    user_address: string;

    /**
     * Total transaction volume in USD.
     */
    volume_usd: string;
  }

  export interface Error {
    code: string;

    message: string;
  }
}

export interface BantrRetrieveTransactionsParams {
  /**
   * End block
   */
  end_block: number;

  /**
   * Start Block
   */
  start_block: number;

  /**
   * Pagination limit
   */
  limit?: number | null;
}

export declare namespace Bantr {
  export {
    type BantrRetrieveTransactionsResponse as BantrRetrieveTransactionsResponse,
    type BantrRetrieveTransactionsParams as BantrRetrieveTransactionsParams,
  };
}
