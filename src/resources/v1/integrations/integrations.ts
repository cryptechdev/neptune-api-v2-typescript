// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BantrAPI from './bantr';
import { Bantr, BantrRetrieveTransactionsParams, BantrRetrieveTransactionsResponse } from './bantr';

export class Integrations extends APIResource {
  bantr: BantrAPI.Bantr = new BantrAPI.Bantr(this._client);
}

Integrations.Bantr = Bantr;

export declare namespace Integrations {
  export {
    Bantr as Bantr,
    type BantrRetrieveTransactionsResponse as BantrRetrieveTransactionsResponse,
    type BantrRetrieveTransactionsParams as BantrRetrieveTransactionsParams,
  };
}
