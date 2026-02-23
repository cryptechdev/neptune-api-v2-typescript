// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as LoansOriginatedAPI from './loans-originated';
import {
  LoansOriginated,
  LoansOriginatedRetrieveByAssetParams,
  LoansOriginatedRetrieveByAssetResponse,
  LoansOriginatedRetrieveLoansOriginatedParams,
  LoansOriginatedRetrieveLoansOriginatedResponse,
} from './loans-originated';

export class History extends APIResource {
  loansOriginated: LoansOriginatedAPI.LoansOriginated = new LoansOriginatedAPI.LoansOriginated(this._client);
}

History.LoansOriginated = LoansOriginated;

export declare namespace History {
  export {
    LoansOriginated as LoansOriginated,
    type LoansOriginatedRetrieveByAssetResponse as LoansOriginatedRetrieveByAssetResponse,
    type LoansOriginatedRetrieveLoansOriginatedResponse as LoansOriginatedRetrieveLoansOriginatedResponse,
    type LoansOriginatedRetrieveByAssetParams as LoansOriginatedRetrieveByAssetParams,
    type LoansOriginatedRetrieveLoansOriginatedParams as LoansOriginatedRetrieveLoansOriginatedParams,
  };
}
