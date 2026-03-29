// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NeptAPI from './nept';
import { Nept, NeptUnlocksDistributionParams, NeptUnlocksDistributionResponse } from './nept';
import * as MarketAPI from './market/market';
import { Market, MarketGetCurrentStateResponse } from './market/market';

export class Analytics extends APIResource {
  market: MarketAPI.Market = new MarketAPI.Market(this._client);
  nept: NeptAPI.Nept = new NeptAPI.Nept(this._client);
}

Analytics.Market = Market;
Analytics.Nept = Nept;

export declare namespace Analytics {
  export { Market as Market, type MarketGetCurrentStateResponse as MarketGetCurrentStateResponse };

  export {
    Nept as Nept,
    type NeptUnlocksDistributionResponse as NeptUnlocksDistributionResponse,
    type NeptUnlocksDistributionParams as NeptUnlocksDistributionParams,
  };
}
