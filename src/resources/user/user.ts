// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetsAPI from '../assets';
import * as WalletAPI from './wallet';
import {
  UserWalletPortfolio,
  Wallet,
  WalletAsset,
  WalletAssetKnown,
  WalletAssetUnknown,
  WalletBalance,
  WalletGetBalanceByAssetParams,
  WalletGetBalanceByAssetResponse,
  WalletGetBalancesParams,
  WalletGetBalancesResponse,
} from './wallet';
import * as MarketAPI from './market/market';
import {
  Market,
  MarketGetMergedByAssetParams,
  MarketGetMergedByAssetResponse,
  MarketGetMergedParams,
  MarketGetMergedResponse,
  MarketGetPortfolioParams,
  MarketGetPortfolioResponse,
  UserMarket,
  UserMergedMarket,
} from './market/market';
import * as NeptAPI from './nept/nept';
import {
  Nept as NeptAPINept,
  NeptGetUnlocksParams,
  NeptGetUnlocksResponse,
  UserUnlockAmounts,
  UserUnlockOverview,
  UserUnlockSchedule,
  UserUnlockScheduleLinear,
  UserUnlockScheduleLumpSum,
} from './nept/nept';
import * as StakingAPI from './nept/staking';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UserResource extends APIResource {
  market: MarketAPI.Market = new MarketAPI.Market(this._client);
  nept: NeptAPI.Nept = new NeptAPI.Nept(this._client);
  wallet: WalletAPI.Wallet = new WalletAPI.Wallet(this._client);

  /**
   * Get user tx history
   */
  getTxHistory(
    address: string,
    query: UserGetTxHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserGetTxHistoryResponse> {
    return this._client.get(path`/api/v1/users/${address}/tx-history`, { query, ...options });
  }

  /**
   * Get user
   */
  getUser(
    address: string,
    query: UserGetUserParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserGetUserResponse> {
    return this._client.get(path`/api/v1/users/${address}/user`, { query, ...options });
  }
}

export type EventAction =
  | 'borrow_flash_loan'
  | 'return_flash_loan'
  | 'create_token_unlock'
  | 'reclaim_token_unlock'
  | 'liquidate'
  | 'borrow'
  | 'return'
  | 'lend'
  | 'redeem'
  | 'deposit_collateral'
  | 'withdraw_collateral'
  | 'claim_war_chest'
  | 'bond'
  | 'unbond'
  | 'claim_unbonded'
  | 'claim_token_unlock'
  | 'claim_rewards'
  | 'cascade'
  | 'send';

export interface User {
  /**
   * User's market contribution overview
   */
  markets: MarketAPI.UserMarket;

  /**
   * User's NEPT associations (e.g. stake, unlocks)
   */
  nept: User.Nept;

  /**
   * User's wallets and balances
   */
  wallets: WalletAPI.UserWalletPortfolio;
}

export namespace User {
  /**
   * User's NEPT associations (e.g. stake, unlocks)
   */
  export interface Nept {
    /**
     * Overview of the user's staking contributions/activity
     */
    staking: StakingAPI.UserStake;

    /**
     * Overview of the user's unlock arrangements and claim statistics
     */
    unlocks: NeptAPI.UserUnlockOverview;
  }
}

export interface UserTx {
  /**
   * Account address corresponding to the transaction
   */
  account_address: string;

  /**
   * Neptune market sub-account index. Will be set for the following event types:
   * `borrow`, `return`, `deposit_collateral`, `withdraw_collateral`, `liquidate`,
   * `bond`, `unbond`.
   *
   * Otherwise the value is guaranteed to be null.
   */
  account_index: number | null;

  /**
   * Neptune event type for the given market/token contract execute call
   */
  action: EventAction;

  /**
   * The relevant amount for the given tx/event.
   *
   * This value will be set for all currently implemented action types. It is set as
   * nullable for forwards compatibility for future action types which may not have
   * an associated amount.
   */
  amount: string | null;

  /**
   * Asset identifiers with associated metadata
   */
  asset: AssetsAPI.AssetInfo;

  /**
   * Address for the event's corresponding contract
   */
  contract_address: string;

  /**
   * Destination account address. Non-null for `send`/`transfer` transactions. This
   * field will be null for all other action types.
   */
  destination_address: string | null;

  /**
   * Event/transaction block time
   */
  event_time: string;

  /**
   * Internal UUID created when the transaction was first indexed by Neptune.
   *
   * Primary usage for API clients is tx history pagination offsets.
   *
   * NOTE: event UUIDs should not be used as a guaranteed method of uniquely
   * identifying a transaction event over extended periods of time.
   *
   * Future updates to our indexer may infrequently require a full re-index of
   * transactions, resulting in newly generated UUIDs.
   */
  event_uuid: string;

  extra: UserTx.Extra;

  /**
   * The price of the associated asset at the time of the transaction.
   *
   * This value will be set for all currently implemented action types. It is set as
   * nullable for forwards compatibility for future action types which may not have
   * an associated amount.
   */
  price: string | number | null;

  /**
   * Transaction hash
   */
  tx_hash: string;

  /**
   * The USD value at the time of the transaction. Derived using the amount and
   * historical price of the associated asset.
   *
   * This value will be set for all currently implemented action types. It is set as
   * nullable for forwards compatibility for future action types which may not have
   * an associated amount.
   */
  value: string | number | null;
}

export namespace UserTx {
  export interface Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    text: Extra.Text | null;

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    value: Extra.Value | null;
  }

  export namespace Extra {
    /**
     * Human-readable field variants. Will not be null when query param `with_text` is
     * `true`.
     */
    export interface Text {
      action: string;

      amount: string;

      event_time: string;

      price: string;

      value: string;
    }

    /**
     * USD values for the corresponding amounts above. Will not be null when query
     * param `with_value` is `true`.
     */
    export interface Value {
      amount: string | null;

      extra: Value.Extra;
    }

    export namespace Value {
      export interface Extra {
        /**
         * Human-readable variants of USD values. Will not be null when query params
         * `with_text` and `with_value` are `true`.
         */
        text: Extra.Text | null;
      }

      export namespace Extra {
        /**
         * Human-readable variants of USD values. Will not be null when query params
         * `with_text` and `with_value` are `true`.
         */
        export interface Text {
          amount?: string | null;
        }
      }
    }
  }
}

/**
 * List data success response
 */
export interface UserGetTxHistoryResponse {
  /**
   * Total number of objects irrespective of any pagination parameters.
   */
  count: number;

  data: Array<UserTx>;

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

/**
 * Object data success response
 */
export interface UserGetUserResponse {
  data: User;

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

export interface UserGetTxHistoryParams {
  /**
   * Optional event/tx action to filter against
   */
  action?: EventAction | null;

  /**
   * Maximum number of transactions to return.
   *
   * Optional and defaults to `20` if missing.
   */
  limit?: number;

  /**
   * Optional UUID skip parameter used for pagination.
   *
   * Providing the last event UUID on a given page will return the next page
   * beginning with the following (unseen) item.
   */
  prev_event_uuid?: string | null;

  /**
   * Changes the sort order for the returned txs.
   *
   * Transactions are always sorted by event time, however the direction (e.g. newest
   * to oldest) can be changed using this parameter.
   *
   * Optional and defaults to `desc` if missing.
   */
  sort_order?: 'asc' | 'desc';

  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

export interface UserGetUserParams {
  /**
   * Calculate and include proportional percentages, where applicable
   */
  with_percent?: boolean;

  /**
   * Include text variation fields
   */
  with_text?: boolean;

  /**
   * Calculate and include USD values for amounts, where applicable
   */
  with_value?: boolean;
}

UserResource.Market = Market;
UserResource.Nept = NeptAPINept;
UserResource.Wallet = Wallet;

export declare namespace UserResource {
  export {
    type EventAction as EventAction,
    type User as User,
    type UserTx as UserTx,
    type UserGetTxHistoryResponse as UserGetTxHistoryResponse,
    type UserGetUserResponse as UserGetUserResponse,
    type UserGetTxHistoryParams as UserGetTxHistoryParams,
    type UserGetUserParams as UserGetUserParams,
  };

  export {
    Market as Market,
    type UserMarket as UserMarket,
    type UserMergedMarket as UserMergedMarket,
    type MarketGetMergedResponse as MarketGetMergedResponse,
    type MarketGetMergedByAssetResponse as MarketGetMergedByAssetResponse,
    type MarketGetPortfolioResponse as MarketGetPortfolioResponse,
    type MarketGetMergedParams as MarketGetMergedParams,
    type MarketGetMergedByAssetParams as MarketGetMergedByAssetParams,
    type MarketGetPortfolioParams as MarketGetPortfolioParams,
  };

  export {
    NeptAPINept as Nept,
    type UserUnlockAmounts as UserUnlockAmounts,
    type UserUnlockOverview as UserUnlockOverview,
    type UserUnlockSchedule as UserUnlockSchedule,
    type UserUnlockScheduleLinear as UserUnlockScheduleLinear,
    type UserUnlockScheduleLumpSum as UserUnlockScheduleLumpSum,
    type NeptGetUnlocksResponse as NeptGetUnlocksResponse,
    type NeptGetUnlocksParams as NeptGetUnlocksParams,
  };

  export {
    Wallet as Wallet,
    type UserWalletPortfolio as UserWalletPortfolio,
    type WalletAsset as WalletAsset,
    type WalletAssetKnown as WalletAssetKnown,
    type WalletAssetUnknown as WalletAssetUnknown,
    type WalletBalance as WalletBalance,
    type WalletGetBalanceByAssetResponse as WalletGetBalanceByAssetResponse,
    type WalletGetBalancesResponse as WalletGetBalancesResponse,
    type WalletGetBalanceByAssetParams as WalletGetBalanceByAssetParams,
    type WalletGetBalancesParams as WalletGetBalancesParams,
  };
}
