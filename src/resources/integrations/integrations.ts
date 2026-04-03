// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BantrAPI from './bantr';
import { Bantr } from './bantr';

export class Integrations extends APIResource {
  bantr: BantrAPI.Bantr = new BantrAPI.Bantr(this._client);
}

Integrations.Bantr = Bantr;

export declare namespace Integrations {
  export { Bantr as Bantr };
}
