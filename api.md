# V1

## Status

Methods:

- <code title="get /api/v1/status/health">client.v1.status.<a href="./src/resources/v1/status.ts">checkHealth</a>() -> void</code>

## Assets

Types:

- <code><a href="./src/resources/v1/assets.ts">AssetClassification</a></code>
- <code><a href="./src/resources/v1/assets.ts">AssetInfo</a></code>
- <code><a href="./src/resources/v1/assets.ts">AssetMetadata</a></code>
- <code><a href="./src/resources/v1/assets.ts">AssetSpec</a></code>
- <code><a href="./src/resources/v1/assets.ts">ErrorData</a></code>
- <code><a href="./src/resources/v1/assets.ts">Interval</a></code>
- <code><a href="./src/resources/v1/assets.ts">IntervalUnit</a></code>
- <code><a href="./src/resources/v1/assets.ts">AssetListResponse</a></code>
- <code><a href="./src/resources/v1/assets.ts">AssetGetPriceHistoryResponse</a></code>
- <code><a href="./src/resources/v1/assets.ts">AssetListPricesResponse</a></code>

Methods:

- <code title="get /api/v1/assets">client.v1.assets.<a href="./src/resources/v1/assets.ts">list</a>() -> AssetListResponse</code>
- <code title="get /api/v1/assets/price-history">client.v1.assets.<a href="./src/resources/v1/assets.ts">getPriceHistory</a>({ ...params }) -> AssetGetPriceHistoryResponse</code>
- <code title="get /api/v1/assets/prices">client.v1.assets.<a href="./src/resources/v1/assets.ts">listPrices</a>({ ...params }) -> AssetListPricesResponse</code>

## Markets

Types:

- <code><a href="./src/resources/v1/markets/markets.ts">GlobalMarketConfig</a></code>
- <code><a href="./src/resources/v1/markets/markets.ts">MarketGetMarketParamsResponse</a></code>
- <code><a href="./src/resources/v1/markets/markets.ts">MarketOverviewResponse</a></code>

Methods:

- <code title="get /api/v1/markets/config">client.v1.markets.<a href="./src/resources/v1/markets/markets.ts">getMarketParams</a>({ ...params }) -> MarketGetMarketParamsResponse</code>
- <code title="get /api/v1/markets">client.v1.markets.<a href="./src/resources/v1/markets/markets.ts">overview</a>({ ...params }) -> MarketOverviewResponse</code>

### Merged

Types:

- <code><a href="./src/resources/v1/markets/merged.ts">MergedMarket</a></code>
- <code><a href="./src/resources/v1/markets/merged.ts">MergedGetMergedDataResponse</a></code>
- <code><a href="./src/resources/v1/markets/merged.ts">MergedLookupByAssetResponse</a></code>

Methods:

- <code title="get /api/v1/markets/merged">client.v1.markets.merged.<a href="./src/resources/v1/markets/merged.ts">getMergedData</a>({ ...params }) -> MergedGetMergedDataResponse</code>
- <code title="get /api/v1/markets/merged/lookup">client.v1.markets.merged.<a href="./src/resources/v1/markets/merged.ts">lookupByAsset</a>({ ...params }) -> MergedLookupByAssetResponse</code>

### Lend

Types:

- <code><a href="./src/resources/v1/markets/lend.ts">AssetRateHistory</a></code>
- <code><a href="./src/resources/v1/markets/lend.ts">LendMarket</a></code>
- <code><a href="./src/resources/v1/markets/lend.ts">LendMarketState</a></code>
- <code><a href="./src/resources/v1/markets/lend.ts">MarketRate</a></code>
- <code><a href="./src/resources/v1/markets/lend.ts">LendGetLendingMarketsResponse</a></code>
- <code><a href="./src/resources/v1/markets/lend.ts">LendGetRateHistoryResponse</a></code>
- <code><a href="./src/resources/v1/markets/lend.ts">LendLookupByAssetResponse</a></code>

Methods:

- <code title="get /api/v1/markets/lend">client.v1.markets.lend.<a href="./src/resources/v1/markets/lend.ts">getLendingMarkets</a>({ ...params }) -> LendGetLendingMarketsResponse</code>
- <code title="get /api/v1/markets/lend/rate-history">client.v1.markets.lend.<a href="./src/resources/v1/markets/lend.ts">getRateHistory</a>({ ...params }) -> LendGetRateHistoryResponse</code>
- <code title="get /api/v1/markets/lend/lookup">client.v1.markets.lend.<a href="./src/resources/v1/markets/lend.ts">lookupByAsset</a>({ ...params }) -> LendLookupByAssetResponse</code>

### Borrow

Types:

- <code><a href="./src/resources/v1/markets/borrow/borrow.ts">BorrowMarketOverview</a></code>
- <code><a href="./src/resources/v1/markets/borrow/borrow.ts">BorrowGetBorrowRateHistoryResponse</a></code>
- <code><a href="./src/resources/v1/markets/borrow/borrow.ts">BorrowOverviewResponse</a></code>

Methods:

- <code title="get /api/v1/markets/borrow/rate-history">client.v1.markets.borrow.<a href="./src/resources/v1/markets/borrow/borrow.ts">getBorrowRateHistory</a>({ ...params }) -> BorrowGetBorrowRateHistoryResponse</code>
- <code title="get /api/v1/markets/borrow">client.v1.markets.borrow.<a href="./src/resources/v1/markets/borrow/borrow.ts">overview</a>({ ...params }) -> BorrowOverviewResponse</code>

#### Collaterals

Types:

- <code><a href="./src/resources/v1/markets/borrow/collaterals.ts">BorrowCollateralConfig</a></code>
- <code><a href="./src/resources/v1/markets/borrow/collaterals.ts">BorrowCollateralMarket</a></code>
- <code><a href="./src/resources/v1/markets/borrow/collaterals.ts">BorrowCollateralState</a></code>
- <code><a href="./src/resources/v1/markets/borrow/collaterals.ts">CollateralListResponse</a></code>
- <code><a href="./src/resources/v1/markets/borrow/collaterals.ts">CollateralLookupByAssetResponse</a></code>

Methods:

- <code title="get /api/v1/markets/borrow/collaterals">client.v1.markets.borrow.collaterals.<a href="./src/resources/v1/markets/borrow/collaterals.ts">list</a>({ ...params }) -> CollateralListResponse</code>
- <code title="get /api/v1/markets/borrow/collaterals/lookup">client.v1.markets.borrow.collaterals.<a href="./src/resources/v1/markets/borrow/collaterals.ts">lookupByAsset</a>({ ...params }) -> CollateralLookupByAssetResponse</code>

#### Debts

Types:

- <code><a href="./src/resources/v1/markets/borrow/debts.ts">BorrowDebtConfig</a></code>
- <code><a href="./src/resources/v1/markets/borrow/debts.ts">BorrowDebtMarket</a></code>
- <code><a href="./src/resources/v1/markets/borrow/debts.ts">BorrowDebtState</a></code>
- <code><a href="./src/resources/v1/markets/borrow/debts.ts">DebtListResponse</a></code>
- <code><a href="./src/resources/v1/markets/borrow/debts.ts">DebtLookupByAssetResponse</a></code>

Methods:

- <code title="get /api/v1/markets/borrow/debts">client.v1.markets.borrow.debts.<a href="./src/resources/v1/markets/borrow/debts.ts">list</a>({ ...params }) -> DebtListResponse</code>
- <code title="get /api/v1/markets/borrow/debts/lookup">client.v1.markets.borrow.debts.<a href="./src/resources/v1/markets/borrow/debts.ts">lookupByAsset</a>({ ...params }) -> DebtLookupByAssetResponse</code>

## Nept

Types:

- <code><a href="./src/resources/v1/nept.ts">Duration</a></code>
- <code><a href="./src/resources/v1/nept.ts">StakingPoolFull</a></code>
- <code><a href="./src/resources/v1/nept.ts">StakingPoolParams</a></code>
- <code><a href="./src/resources/v1/nept.ts">StakingPoolState</a></code>
- <code><a href="./src/resources/v1/nept.ts">NeptGetStakingOverviewResponse</a></code>
- <code><a href="./src/resources/v1/nept.ts">NeptGetTokenParamsResponse</a></code>
- <code><a href="./src/resources/v1/nept.ts">NeptGetTokenStateResponse</a></code>

Methods:

- <code title="get /api/v1/nept/staking">client.v1.nept.<a href="./src/resources/v1/nept.ts">getStakingOverview</a>({ ...params }) -> NeptGetStakingOverviewResponse</code>
- <code title="get /api/v1/nept/params">client.v1.nept.<a href="./src/resources/v1/nept.ts">getTokenParams</a>({ ...params }) -> NeptGetTokenParamsResponse</code>
- <code title="get /api/v1/nept/state">client.v1.nept.<a href="./src/resources/v1/nept.ts">getTokenState</a>({ ...params }) -> NeptGetTokenStateResponse</code>

## Users

Types:

- <code><a href="./src/resources/v1/users/users.ts">EventAction</a></code>
- <code><a href="./src/resources/v1/users/users.ts">UserRetrieveTxHistoryResponse</a></code>
- <code><a href="./src/resources/v1/users/users.ts">UserRetrieveUserResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/tx-history">client.v1.users.<a href="./src/resources/v1/users/users.ts">retrieveTxHistory</a>(address, { ...params }) -> UserRetrieveTxHistoryResponse</code>
- <code title="get /api/v1/users/{address}/user">client.v1.users.<a href="./src/resources/v1/users/users.ts">retrieveUser</a>(address, { ...params }) -> UserRetrieveUserResponse</code>

### Markets

Types:

- <code><a href="./src/resources/v1/users/markets/markets.ts">UserMarket</a></code>
- <code><a href="./src/resources/v1/users/markets/markets.ts">MarketListResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets">client.v1.users.markets.<a href="./src/resources/v1/users/markets/markets.ts">list</a>(address, { ...params }) -> MarketListResponse</code>

#### Lend

Types:

- <code><a href="./src/resources/v1/users/markets/lend.ts">UserDebtAssetPool</a></code>
- <code><a href="./src/resources/v1/users/markets/lend.ts">LendListResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/lend.ts">LendRetrieveLookupResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/lend">client.v1.users.markets.lend.<a href="./src/resources/v1/users/markets/lend.ts">list</a>(address, { ...params }) -> LendListResponse</code>
- <code title="get /api/v1/users/{address}/markets/lend/lookup">client.v1.users.markets.lend.<a href="./src/resources/v1/users/markets/lend.ts">retrieveLookup</a>(address, { ...params }) -> LendRetrieveLookupResponse</code>

#### Borrow

Types:

- <code><a href="./src/resources/v1/users/markets/borrow/borrow.ts">BorrowListResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/borrow">client.v1.users.markets.borrow.<a href="./src/resources/v1/users/markets/borrow/borrow.ts">list</a>(address, { ...params }) -> BorrowListResponse</code>

##### Accounts

Types:

- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">UserAccountHealth</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">UserBorrowMarketAccount</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">UserCollateralAssetPool</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">AccountRetrieveCollateralsResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">AccountRetrieveDebtsResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">AccountRetrieveHealthResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}">client.v1.users.markets.borrow.accounts.<a href="./src/resources/v1/users/markets/borrow/accounts.ts">retrieve</a>(index, { ...params }) -> AccountRetrieveResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}/collaterals">client.v1.users.markets.borrow.accounts.<a href="./src/resources/v1/users/markets/borrow/accounts.ts">retrieveCollaterals</a>(index, { ...params }) -> AccountRetrieveCollateralsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}/debts">client.v1.users.markets.borrow.accounts.<a href="./src/resources/v1/users/markets/borrow/accounts.ts">retrieveDebts</a>(index, { ...params }) -> AccountRetrieveDebtsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}/health">client.v1.users.markets.borrow.accounts.<a href="./src/resources/v1/users/markets/borrow/accounts.ts">retrieveHealth</a>(index, { ...params }) -> AccountRetrieveHealthResponse</code>

##### Sum

Types:

- <code><a href="./src/resources/v1/users/markets/borrow/sum.ts">SumRetrieveCollateralsResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/sum.ts">SumRetrieveDebtsResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/borrow/sum/collaterals">client.v1.users.markets.borrow.sum.<a href="./src/resources/v1/users/markets/borrow/sum.ts">retrieveCollaterals</a>(address, { ...params }) -> SumRetrieveCollateralsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/sum/debts">client.v1.users.markets.borrow.sum.<a href="./src/resources/v1/users/markets/borrow/sum.ts">retrieveDebts</a>(address, { ...params }) -> SumRetrieveDebtsResponse</code>

##### Lookup

Types:

- <code><a href="./src/resources/v1/users/markets/borrow/lookup.ts">LookupRetrieveCollateralResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/lookup.ts">LookupRetrieveDebtResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/borrow/lookup/collateral">client.v1.users.markets.borrow.lookup.<a href="./src/resources/v1/users/markets/borrow/lookup.ts">retrieveCollateral</a>(address, { ...params }) -> LookupRetrieveCollateralResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/lookup/debt">client.v1.users.markets.borrow.lookup.<a href="./src/resources/v1/users/markets/borrow/lookup.ts">retrieveDebt</a>(address, { ...params }) -> LookupRetrieveDebtResponse</code>

#### Merged

Types:

- <code><a href="./src/resources/v1/users/markets/merged.ts">UserMergedMarket</a></code>
- <code><a href="./src/resources/v1/users/markets/merged.ts">MergedListResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/merged.ts">MergedRetrieveLookupResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/merged">client.v1.users.markets.merged.<a href="./src/resources/v1/users/markets/merged.ts">list</a>(address, { ...params }) -> MergedListResponse</code>
- <code title="get /api/v1/users/{address}/markets/merged/lookup">client.v1.users.markets.merged.<a href="./src/resources/v1/users/markets/merged.ts">retrieveLookup</a>(address, { ...params }) -> MergedRetrieveLookupResponse</code>

### Nept

Types:

- <code><a href="./src/resources/v1/users/nept/nept.ts">UserNeptUnlockAmounts</a></code>
- <code><a href="./src/resources/v1/users/nept/nept.ts">UserNeptUnlockOverview</a></code>
- <code><a href="./src/resources/v1/users/nept/nept.ts">NeptRetrieveUnlocksResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/nept/unlocks">client.v1.users.nept.<a href="./src/resources/v1/users/nept/nept.ts">retrieveUnlocks</a>(address, { ...params }) -> NeptRetrieveUnlocksResponse</code>

#### Staking

Types:

- <code><a href="./src/resources/v1/users/nept/staking/staking.ts">UserStake</a></code>
- <code><a href="./src/resources/v1/users/nept/staking/staking.ts">UserStakeUnbondingEntry</a></code>
- <code><a href="./src/resources/v1/users/nept/staking/staking.ts">StakingListResponse</a></code>
- <code><a href="./src/resources/v1/users/nept/staking/staking.ts">StakingRetrieveUnstakingResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/nept/staking">client.v1.users.nept.staking.<a href="./src/resources/v1/users/nept/staking/staking.ts">list</a>(address, { ...params }) -> StakingListResponse</code>
- <code title="get /api/v1/users/{address}/nept/staking/unstaking">client.v1.users.nept.staking.<a href="./src/resources/v1/users/nept/staking/staking.ts">retrieveUnstaking</a>(address, { ...params }) -> StakingRetrieveUnstakingResponse</code>

##### Pools

Types:

- <code><a href="./src/resources/v1/users/nept/staking/pools.ts">UserStakePool</a></code>
- <code><a href="./src/resources/v1/users/nept/staking/pools.ts">PoolListResponse</a></code>
- <code><a href="./src/resources/v1/users/nept/staking/pools.ts">PoolRetrieveLookupResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/nept/staking/pools">client.v1.users.nept.staking.pools.<a href="./src/resources/v1/users/nept/staking/pools.ts">list</a>(address, { ...params }) -> PoolListResponse</code>
- <code title="get /api/v1/users/{address}/nept/staking/pools/lookup">client.v1.users.nept.staking.pools.<a href="./src/resources/v1/users/nept/staking/pools.ts">retrieveLookup</a>(address, { ...params }) -> PoolRetrieveLookupResponse</code>

### Wallet

Types:

- <code><a href="./src/resources/v1/users/wallet.ts">UserWalletPortfolio</a></code>
- <code><a href="./src/resources/v1/users/wallet.ts">WalletRetrieveBalancesResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/wallet/balances">client.v1.users.wallet.<a href="./src/resources/v1/users/wallet.ts">retrieveBalances</a>(address, { ...params }) -> WalletRetrieveBalancesResponse</code>

## Analytics

### Market

Types:

- <code><a href="./src/resources/v1/analytics/market/market.ts">MarketRetrieveStateResponse</a></code>

Methods:

- <code title="get /api/v1/analytics/market/state">client.v1.analytics.market.<a href="./src/resources/v1/analytics/market/market.ts">retrieveState</a>() -> MarketRetrieveStateResponse</code>

#### History

##### LoansOriginated

Types:

- <code><a href="./src/resources/v1/analytics/market/history/loans-originated.ts">LoansOriginatedRetrieveByAssetResponse</a></code>
- <code><a href="./src/resources/v1/analytics/market/history/loans-originated.ts">LoansOriginatedRetrieveLoansOriginatedResponse</a></code>

Methods:

- <code title="get /api/v1/analytics/market/history/loans-originated/by-asset">client.v1.analytics.market.history.loansOriginated.<a href="./src/resources/v1/analytics/market/history/loans-originated.ts">retrieveByAsset</a>({ ...params }) -> LoansOriginatedRetrieveByAssetResponse</code>
- <code title="get /api/v1/analytics/market/history/loans-originated">client.v1.analytics.market.history.loansOriginated.<a href="./src/resources/v1/analytics/market/history/loans-originated.ts">retrieveLoansOriginated</a>({ ...params }) -> LoansOriginatedRetrieveLoansOriginatedResponse</code>

## Integrations

### Bantr

Types:

- <code><a href="./src/resources/v1/integrations/bantr.ts">BantrRetrieveTransactionsResponse</a></code>

Methods:

- <code title="get /api/v1/integrations/bantr/transactions">client.v1.integrations.bantr.<a href="./src/resources/v1/integrations/bantr.ts">retrieveTransactions</a>({ ...params }) -> BantrRetrieveTransactionsResponse</code>
