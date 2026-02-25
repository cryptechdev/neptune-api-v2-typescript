// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetsAPI from './assets';
import {
  AssetClassification,
  AssetGetPriceHistoryParams,
  AssetGetPriceHistoryResponse,
  AssetInfo,
  AssetListPricesParams,
  AssetListPricesResponse,
  AssetListResponse,
  AssetMetadata,
  AssetSpec,
  Assets,
  ErrorData,
  Interval,
  IntervalUnit,
} from './assets';
import * as NeptAPI from './nept';
import {
  Duration,
  Nept,
  NeptGetParamsParams,
  NeptGetParamsResponse,
  NeptGetStakingOverviewParams,
  NeptGetStakingOverviewResponse,
  NeptGetStateParams,
  NeptGetStateResponse,
  StakingPoolFull,
  StakingPoolParams,
  StakingPoolState,
} from './nept';
import * as StatusAPI from './status';
import { Status, StatusCheckHealthResponse } from './status';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics } from './analytics/analytics';
import * as IntegrationsAPI from './integrations/integrations';
import { Integrations } from './integrations/integrations';
import * as MarketsAPI from './markets/markets';
import {
  GlobalMarketConfig,
  MarketGetParamsParams,
  MarketGetParamsResponse,
  MarketOverviewParams,
  MarketOverviewResponse,
  Markets,
} from './markets/markets';
import * as UsersAPI from './users/users';
import {
  EventAction,
  UserGetTxHistoryParams,
  UserGetTxHistoryResponse,
  UserRetrieveParams,
  UserRetrieveResponse,
  Users,
} from './users/users';

export class V1 extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  markets: MarketsAPI.Markets = new MarketsAPI.Markets(this._client);
  nept: NeptAPI.Nept = new NeptAPI.Nept(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

V1.Status = Status;
V1.Assets = Assets;
V1.Markets = Markets;
V1.Nept = Nept;
V1.Users = Users;
V1.Analytics = Analytics;
V1.Integrations = Integrations;

export declare namespace V1 {
  export { Status as Status, type StatusCheckHealthResponse as StatusCheckHealthResponse };

  export {
    Assets as Assets,
    type AssetClassification as AssetClassification,
    type AssetInfo as AssetInfo,
    type AssetMetadata as AssetMetadata,
    type AssetSpec as AssetSpec,
    type ErrorData as ErrorData,
    type Interval as Interval,
    type IntervalUnit as IntervalUnit,
    type AssetListResponse as AssetListResponse,
    type AssetGetPriceHistoryResponse as AssetGetPriceHistoryResponse,
    type AssetListPricesResponse as AssetListPricesResponse,
    type AssetGetPriceHistoryParams as AssetGetPriceHistoryParams,
    type AssetListPricesParams as AssetListPricesParams,
  };

  export {
    Markets as Markets,
    type GlobalMarketConfig as GlobalMarketConfig,
    type MarketGetParamsResponse as MarketGetParamsResponse,
    type MarketOverviewResponse as MarketOverviewResponse,
    type MarketGetParamsParams as MarketGetParamsParams,
    type MarketOverviewParams as MarketOverviewParams,
  };

  export {
    Nept as Nept,
    type Duration as Duration,
    type StakingPoolFull as StakingPoolFull,
    type StakingPoolParams as StakingPoolParams,
    type StakingPoolState as StakingPoolState,
    type NeptGetParamsResponse as NeptGetParamsResponse,
    type NeptGetStakingOverviewResponse as NeptGetStakingOverviewResponse,
    type NeptGetStateResponse as NeptGetStateResponse,
    type NeptGetParamsParams as NeptGetParamsParams,
    type NeptGetStakingOverviewParams as NeptGetStakingOverviewParams,
    type NeptGetStateParams as NeptGetStateParams,
  };

  export {
    Users as Users,
    type EventAction as EventAction,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserGetTxHistoryResponse as UserGetTxHistoryResponse,
    type UserRetrieveParams as UserRetrieveParams,
    type UserGetTxHistoryParams as UserGetTxHistoryParams,
  };

  export { Analytics as Analytics };

  export { Integrations as Integrations };
}
