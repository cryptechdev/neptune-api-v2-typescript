// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as LoansOriginatedAPI from './loans-originated';
import {
  LoansOriginated,
  LoansOriginatedGetAllParams,
  LoansOriginatedGetAllResponse,
  LoansOriginatedGetByAssetParams,
  LoansOriginatedGetByAssetResponse,
} from './loans-originated';

export class History extends APIResource {
  loansOriginated: LoansOriginatedAPI.LoansOriginated = new LoansOriginatedAPI.LoansOriginated(this._client);
}

History.LoansOriginated = LoansOriginated;

export declare namespace History {
  export {
    LoansOriginated as LoansOriginated,
    type LoansOriginatedGetAllResponse as LoansOriginatedGetAllResponse,
    type LoansOriginatedGetByAssetResponse as LoansOriginatedGetByAssetResponse,
    type LoansOriginatedGetAllParams as LoansOriginatedGetAllParams,
    type LoansOriginatedGetByAssetParams as LoansOriginatedGetByAssetParams,
  };
}
