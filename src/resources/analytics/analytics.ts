// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MarketAPI from './market/market';
import { Market, MarketGetCurrentStateResponse } from './market/market';

export class Analytics extends APIResource {
  market: MarketAPI.Market = new MarketAPI.Market(this._client);
}

Analytics.Market = Market;

export declare namespace Analytics {
  export { Market as Market, type MarketGetCurrentStateResponse as MarketGetCurrentStateResponse };
}
