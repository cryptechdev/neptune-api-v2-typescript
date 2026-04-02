// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from '../../assets';
import * as HistoryAPI from './history';
import {
  History,
  HistoryGetLoansOriginatedByAssetParams,
  HistoryGetLoansOriginatedByAssetResponse,
  HistoryGetLoansOriginatedByAssetResponsesIntervalMultiPage,
  HistoryGetLoansOriginatedParams,
  HistoryGetLoansOriginatedResponse,
  HistoryGetLoansOriginatedResponsesIntervalSinglePage,
} from './history';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Market extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Get analytics for current market state
   */
  getCurrentState(options?: RequestOptions): APIPromise<MarketGetCurrentStateResponse> {
    return this._client.get('/api/v1/analytics/market/state', options);
  }
}

export interface MarketGetCurrentStateResponse {
  data: MarketGetCurrentStateResponse.Data;

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

export namespace MarketGetCurrentStateResponse {
  export interface Data {
    assets: Array<Data.Asset>;

    borrower_account_active: number;

    borrower_active: number;

    flash_loan_volume_total: string;

    lender_active: number;

    /**
     * Analytics for accumulated value of originated loans
     */
    loans_originated: Data.LoansOriginated;
  }

  export namespace Data {
    /**
     * Provides a generic type for associating an `AssetSpec` with some arbitrary data
     *
     * Fields from `T` are flattened into the `WithAsset` struct, rendering data inline
     * with the `asset` field.
     */
    export interface Asset {
      /**
       * Provides a unique identifier for an asset for use throughout the Neptune API.
       * IDs are unique across asset domains (contract tokens, native denoms, etc)
       */
      asset: AssetsAPI.AssetSpec;

      lend_interest_paid: string;
    }

    /**
     * Analytics for accumulated value of originated loans
     */
    export interface LoansOriginated {
      breakdown: Array<LoansOriginated.Breakdown>;

      total_value: string | number;
    }

    export namespace LoansOriginated {
      export interface Breakdown {
        /**
         * Provides a unique identifier for an asset for use throughout the Neptune API.
         * IDs are unique across asset domains (contract tokens, native denoms, etc)
         */
        asset: AssetsAPI.AssetSpec;

        value: string | number;
      }
    }
  }
}

Market.History = History;

export declare namespace Market {
  export { type MarketGetCurrentStateResponse as MarketGetCurrentStateResponse };

  export {
    History as History,
    type HistoryGetLoansOriginatedResponse as HistoryGetLoansOriginatedResponse,
    type HistoryGetLoansOriginatedByAssetResponse as HistoryGetLoansOriginatedByAssetResponse,
    type HistoryGetLoansOriginatedResponsesIntervalSinglePage as HistoryGetLoansOriginatedResponsesIntervalSinglePage,
    type HistoryGetLoansOriginatedByAssetResponsesIntervalMultiPage as HistoryGetLoansOriginatedByAssetResponsesIntervalMultiPage,
    type HistoryGetLoansOriginatedParams as HistoryGetLoansOriginatedParams,
    type HistoryGetLoansOriginatedByAssetParams as HistoryGetLoansOriginatedByAssetParams,
  };
}
