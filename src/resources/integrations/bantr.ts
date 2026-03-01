// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bantr extends APIResource {
  /**
   * .
   */
  getTransactions(
    query: BantrGetTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<BantrGetTransactionsResponse> {
    return this._client.get('/api/v1/integrations/bantr/transactions', { query, ...options });
  }
}

export interface BantrGetTransactionsResponse {
  data: Array<BantrGetTransactionsResponse.Data> | null;

  error: BantrGetTransactionsResponse.Error | null;

  success: boolean;
}

export namespace BantrGetTransactionsResponse {
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
    tokens_amount_in_usd: string | null;

    /**
     * Value of tokens received from the transaction in USD.
     */
    tokens_amount_out_usd: string | null;

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
    volume_usd: string | null;
  }

  export interface Error {
    code: string;

    message: string;
  }
}

export interface BantrGetTransactionsParams {
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
    type BantrGetTransactionsResponse as BantrGetTransactionsResponse,
    type BantrGetTransactionsParams as BantrGetTransactionsParams,
  };
}
