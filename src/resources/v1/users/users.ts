// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from './users';
import * as AssetsAPI from '../assets';
import * as WalletAPI from './wallet';
import {
  UserWalletPortfolio,
  Wallet,
  WalletRetrieveBalancesParams,
  WalletRetrieveBalancesResponse,
} from './wallet';
import * as MarketsAPI from './markets/markets';
import { MarketListParams, MarketListResponse, Markets, UserMarket } from './markets/markets';
import * as NeptAPI from './nept/nept';
import {
  Nept as NeptAPINept,
  NeptRetrieveUnlocksParams,
  NeptRetrieveUnlocksResponse,
  UserNeptUnlockAmounts,
  UserNeptUnlockOverview,
} from './nept/nept';
import * as StakingAPI from './nept/staking/staking';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  markets: MarketsAPI.Markets = new MarketsAPI.Markets(this._client);
  nept: NeptAPI.Nept = new NeptAPI.Nept(this._client);
  wallet: WalletAPI.Wallet = new WalletAPI.Wallet(this._client);

  /**
   * Get user tx history
   */
  retrieveTxHistory(
    address: string,
    query: UserRetrieveTxHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserRetrieveTxHistoryResponse> {
    return this._client.get(path`/api/v1/users/${address}/tx-history`, { query, ...options });
  }

  /**
   * Get user
   */
  retrieveUser(
    address: string,
    query: UserRetrieveUserParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserRetrieveUserResponse> {
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

export interface UserRetrieveTxHistoryResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * Total number of objects in all pages
   */
  count?: number | null;

  /**
   * List contents
   */
  data?: Array<UserRetrieveTxHistoryResponse.Data> | null;

  /**
   * Error message, if any
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace UserRetrieveTxHistoryResponse {
  /**
   * `UserTx`
   */
  export interface Data {
    /**
     * Account address corresponding to the transaction
     */
    account_address: string;

    /**
     * Neptune event type for the given market/token contract execute call
     */
    action: UsersAPI.EventAction;

    /**
     * `AssetInfo`
     */
    asset: AssetsAPI.AssetInfo;

    /**
     * Address for the event's corresponding contract
     */
    contract_address: string;

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

    extra: Data.Extra;

    /**
     * Transaction hash
     */
    tx_hash: string;

    /**
     * Neptune market sub-account index. Will be set for the following event types:
     * `borrow`, `return`, `deposit_collateral`, `withdraw_collateral`, `liquidate`,
     * `bond`, `unbond`.
     *
     * Otherwise the value is guaranteed to be null.
     */
    account_index?: number | null;

    /**
     * The relevant amount for the given tx/event.
     *
     * This value will be set for all currently implemented action types. It is set as
     * nullable for forwards compatibility for future action types which may not have
     * an associated amount.
     */
    amount?: string | null;

    /**
     * Destination account address. Only set for `send` transactions. This field will
     * be null for all other action types.
     */
    destination_address?: string | null;

    /**
     * The price of the associated asset at the time of the transaction.
     *
     * This value will be set for all currently implemented action types. It is set as
     * nullable for forwards compatibility for future action types which may not have
     * an associated amount.
     */
    price?: string | number | null;

    /**
     * The USD value at the time of the transaction. Derived using the amount and
     * historical price of the associated asset.
     *
     * This value will be set for all currently implemented action types. It is set as
     * nullable for forwards compatibility for future action types which may not have
     * an associated amount.
     */
    value?: string | number | null;
  }

  export namespace Data {
    export interface Extra {
      /**
       * Human-readable field variants. Must provide `?with-text=true`
       */
      text?: Extra.Text | null;

      /**
       * USD values for the corresponding amounts above. Must provide `?with-value=true`
       */
      value?: Extra.Value | null;
    }

    export namespace Extra {
      /**
       * Human-readable field variants. Must provide `?with-text=true`
       */
      export interface Text {
        action: string;

        amount: string;

        event_time: string;

        price: string;

        value: string;
      }

      /**
       * USD values for the corresponding amounts above. Must provide `?with-value=true`
       */
      export interface Value {
        extra: Value.Extra;

        amount?: string | null;
      }

      export namespace Value {
        export interface Extra {
          /**
           * Human-readable variants of USD values. Must provide
           * `?with-text=true&with-value=true`
           */
          text?: Extra.Text | null;
        }

        export namespace Extra {
          /**
           * Human-readable variants of USD values. Must provide
           * `?with-text=true&with-value=true`
           */
          export interface Text {
            amount?: string | null;
          }
        }
      }
    }
  }
}

export interface UserRetrieveUserResponse {
  /**
   * Request status
   */
  status: number;

  /**
   * Request status text
   */
  status_text: string;

  /**
   * `User`
   */
  data?: UserRetrieveUserResponse.Data | null;

  /**
   * Error content, only set if an error occurs
   */
  error?: AssetsAPI.ErrorData | null;
}

export namespace UserRetrieveUserResponse {
  /**
   * `User`
   */
  export interface Data {
    /**
     * `UserMarket`
     */
    markets: MarketsAPI.UserMarket;

    /**
     * `UserNeptOverview`
     */
    nept: Data.Nept;

    /**
     * `UserWalletPortfolio`
     */
    wallets: WalletAPI.UserWalletPortfolio;
  }

  export namespace Data {
    /**
     * `UserNeptOverview`
     */
    export interface Nept {
      /**
       * `UserStake`
       */
      staking: StakingAPI.UserStake;

      /**
       * `UserNeptUnlockOverview`
       */
      unlocks: NeptAPI.UserNeptUnlockOverview;
    }
  }
}

export interface UserRetrieveTxHistoryParams {
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

export interface UserRetrieveUserParams {
  /**
   * Calculate and include proportion percentages, where applicable
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

Users.Markets = Markets;
Users.Nept = NeptAPINept;
Users.Wallet = Wallet;

export declare namespace Users {
  export {
    type EventAction as EventAction,
    type UserRetrieveTxHistoryResponse as UserRetrieveTxHistoryResponse,
    type UserRetrieveUserResponse as UserRetrieveUserResponse,
    type UserRetrieveTxHistoryParams as UserRetrieveTxHistoryParams,
    type UserRetrieveUserParams as UserRetrieveUserParams,
  };

  export {
    Markets as Markets,
    type UserMarket as UserMarket,
    type MarketListResponse as MarketListResponse,
    type MarketListParams as MarketListParams,
  };

  export {
    NeptAPINept as Nept,
    type UserNeptUnlockAmounts as UserNeptUnlockAmounts,
    type UserNeptUnlockOverview as UserNeptUnlockOverview,
    type NeptRetrieveUnlocksResponse as NeptRetrieveUnlocksResponse,
    type NeptRetrieveUnlocksParams as NeptRetrieveUnlocksParams,
  };

  export {
    Wallet as Wallet,
    type UserWalletPortfolio as UserWalletPortfolio,
    type WalletRetrieveBalancesResponse as WalletRetrieveBalancesResponse,
    type WalletRetrieveBalancesParams as WalletRetrieveBalancesParams,
  };
}
