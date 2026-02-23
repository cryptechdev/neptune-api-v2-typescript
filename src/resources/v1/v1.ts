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
  NeptGetStakingOverviewParams,
  NeptGetStakingOverviewResponse,
  NeptGetTokenParamsParams,
  NeptGetTokenParamsResponse,
  NeptGetTokenStateParams,
  NeptGetTokenStateResponse,
  StakingPoolFull,
  StakingPoolParams,
  StakingPoolState,
} from './nept';
import * as StatusAPI from './status';
import { Status } from './status';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics } from './analytics/analytics';
import * as IntegrationsAPI from './integrations/integrations';
import { Integrations } from './integrations/integrations';
import * as MarketsAPI from './markets/markets';
import {
  GlobalMarketConfig,
  MarketGetMarketParamsParams,
  MarketGetMarketParamsResponse,
  MarketOverviewParams,
  MarketOverviewResponse,
  Markets,
} from './markets/markets';
import * as UsersAPI from './users/users';
import {
  EventAction,
  UserRetrieveTxHistoryParams,
  UserRetrieveTxHistoryResponse,
  UserRetrieveUserParams,
  UserRetrieveUserResponse,
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
  export { Status as Status };

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
    type MarketGetMarketParamsResponse as MarketGetMarketParamsResponse,
    type MarketOverviewResponse as MarketOverviewResponse,
    type MarketGetMarketParamsParams as MarketGetMarketParamsParams,
    type MarketOverviewParams as MarketOverviewParams,
  };

  export {
    Nept as Nept,
    type Duration as Duration,
    type StakingPoolFull as StakingPoolFull,
    type StakingPoolParams as StakingPoolParams,
    type StakingPoolState as StakingPoolState,
    type NeptGetStakingOverviewResponse as NeptGetStakingOverviewResponse,
    type NeptGetTokenParamsResponse as NeptGetTokenParamsResponse,
    type NeptGetTokenStateResponse as NeptGetTokenStateResponse,
    type NeptGetStakingOverviewParams as NeptGetStakingOverviewParams,
    type NeptGetTokenParamsParams as NeptGetTokenParamsParams,
    type NeptGetTokenStateParams as NeptGetTokenStateParams,
  };

  export {
    Users as Users,
    type EventAction as EventAction,
    type UserRetrieveTxHistoryResponse as UserRetrieveTxHistoryResponse,
    type UserRetrieveUserResponse as UserRetrieveUserResponse,
    type UserRetrieveTxHistoryParams as UserRetrieveTxHistoryParams,
    type UserRetrieveUserParams as UserRetrieveUserParams,
  };

  export { Analytics as Analytics };

  export { Integrations as Integrations };
}
