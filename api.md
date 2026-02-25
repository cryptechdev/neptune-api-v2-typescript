# V1

## Status

Types:

- <code><a href="./src/resources/v1/status.ts">StatusCheckHealthResponse</a></code>

Methods:

- <code title="get /api/v1/status/health">client.v1.status.<a href="./src/resources/v1/status.ts">checkHealth</a>() -> StatusCheckHealthResponse</code>

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
- <code><a href="./src/resources/v1/markets/markets.ts">MarketGetParamsResponse</a></code>
- <code><a href="./src/resources/v1/markets/markets.ts">MarketOverviewResponse</a></code>

Methods:

- <code title="get /api/v1/markets/config">client.v1.markets.<a href="./src/resources/v1/markets/markets.ts">getParams</a>({ ...params }) -> MarketGetParamsResponse</code>
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
- <code><a href="./src/resources/v1/markets/borrow/borrow.ts">BorrowGetRateHistoryResponse</a></code>
- <code><a href="./src/resources/v1/markets/borrow/borrow.ts">BorrowOverviewResponse</a></code>

Methods:

- <code title="get /api/v1/markets/borrow/rate-history">client.v1.markets.borrow.<a href="./src/resources/v1/markets/borrow/borrow.ts">getRateHistory</a>({ ...params }) -> BorrowGetRateHistoryResponse</code>
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
- <code><a href="./src/resources/v1/nept.ts">NeptGetParamsResponse</a></code>
- <code><a href="./src/resources/v1/nept.ts">NeptGetStakingOverviewResponse</a></code>
- <code><a href="./src/resources/v1/nept.ts">NeptGetStateResponse</a></code>

Methods:

- <code title="get /api/v1/nept/params">client.v1.nept.<a href="./src/resources/v1/nept.ts">getParams</a>({ ...params }) -> NeptGetParamsResponse</code>
- <code title="get /api/v1/nept/staking">client.v1.nept.<a href="./src/resources/v1/nept.ts">getStakingOverview</a>({ ...params }) -> NeptGetStakingOverviewResponse</code>
- <code title="get /api/v1/nept/state">client.v1.nept.<a href="./src/resources/v1/nept.ts">getState</a>({ ...params }) -> NeptGetStateResponse</code>

## Users

Types:

- <code><a href="./src/resources/v1/users/users.ts">EventAction</a></code>
- <code><a href="./src/resources/v1/users/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/users/users.ts">UserGetTxHistoryResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/user">client.v1.users.<a href="./src/resources/v1/users/users.ts">retrieve</a>(address, { ...params }) -> UserRetrieveResponse</code>
- <code title="get /api/v1/users/{address}/tx-history">client.v1.users.<a href="./src/resources/v1/users/users.ts">getTxHistory</a>(address, { ...params }) -> UserGetTxHistoryResponse</code>

### Markets

Types:

- <code><a href="./src/resources/v1/users/markets/markets.ts">UserMarket</a></code>
- <code><a href="./src/resources/v1/users/markets/markets.ts">MarketGetPortfolioResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets">client.v1.users.markets.<a href="./src/resources/v1/users/markets/markets.ts">getPortfolio</a>(address, { ...params }) -> MarketGetPortfolioResponse</code>

#### Lend

Types:

- <code><a href="./src/resources/v1/users/markets/lend.ts">UserDebtAssetPool</a></code>
- <code><a href="./src/resources/v1/users/markets/lend.ts">LendGetPortfolioResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/lend.ts">LendLookupDistributionResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/lend">client.v1.users.markets.lend.<a href="./src/resources/v1/users/markets/lend.ts">getPortfolio</a>(address, { ...params }) -> LendGetPortfolioResponse</code>
- <code title="get /api/v1/users/{address}/markets/lend/lookup">client.v1.users.markets.lend.<a href="./src/resources/v1/users/markets/lend.ts">lookupDistribution</a>(address, { ...params }) -> LendLookupDistributionResponse</code>

#### Borrow

Types:

- <code><a href="./src/resources/v1/users/markets/borrow/borrow.ts">BorrowGetPortfolioResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/borrow">client.v1.users.markets.borrow.<a href="./src/resources/v1/users/markets/borrow/borrow.ts">getPortfolio</a>(address, { ...params }) -> BorrowGetPortfolioResponse</code>

##### Accounts

Types:

- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">UserAccountHealth</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">UserBorrowMarketAccount</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">UserCollateralAssetPool</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">AccountGetCollateralsResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">AccountGetDebtsResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/accounts.ts">AccountGetHealthResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}">client.v1.users.markets.borrow.accounts.<a href="./src/resources/v1/users/markets/borrow/accounts.ts">retrieve</a>(index, { ...params }) -> AccountRetrieveResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}/collaterals">client.v1.users.markets.borrow.accounts.<a href="./src/resources/v1/users/markets/borrow/accounts.ts">getCollaterals</a>(index, { ...params }) -> AccountGetCollateralsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}/debts">client.v1.users.markets.borrow.accounts.<a href="./src/resources/v1/users/markets/borrow/accounts.ts">getDebts</a>(index, { ...params }) -> AccountGetDebtsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}/health">client.v1.users.markets.borrow.accounts.<a href="./src/resources/v1/users/markets/borrow/accounts.ts">getHealth</a>(index, { ...params }) -> AccountGetHealthResponse</code>

##### Sum

Types:

- <code><a href="./src/resources/v1/users/markets/borrow/sum.ts">SumGetCollateralsResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/sum.ts">SumGetDebtsResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/borrow/sum/collaterals">client.v1.users.markets.borrow.sum.<a href="./src/resources/v1/users/markets/borrow/sum.ts">getCollaterals</a>(address, { ...params }) -> SumGetCollateralsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/sum/debts">client.v1.users.markets.borrow.sum.<a href="./src/resources/v1/users/markets/borrow/sum.ts">getDebts</a>(address, { ...params }) -> SumGetDebtsResponse</code>

##### Lookup

Types:

- <code><a href="./src/resources/v1/users/markets/borrow/lookup.ts">LookupGetCollateralAccountsResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/borrow/lookup.ts">LookupGetDebtAccountsResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/borrow/lookup/collateral">client.v1.users.markets.borrow.lookup.<a href="./src/resources/v1/users/markets/borrow/lookup.ts">getCollateralAccounts</a>(address, { ...params }) -> LookupGetCollateralAccountsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/lookup/debt">client.v1.users.markets.borrow.lookup.<a href="./src/resources/v1/users/markets/borrow/lookup.ts">getDebtAccounts</a>(address, { ...params }) -> LookupGetDebtAccountsResponse</code>

#### Merged

Types:

- <code><a href="./src/resources/v1/users/markets/merged.ts">UserMergedMarket</a></code>
- <code><a href="./src/resources/v1/users/markets/merged.ts">MergedGetAllMarketsResponse</a></code>
- <code><a href="./src/resources/v1/users/markets/merged.ts">MergedLookupByAssetResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/merged">client.v1.users.markets.merged.<a href="./src/resources/v1/users/markets/merged.ts">getAllMarkets</a>(address, { ...params }) -> MergedGetAllMarketsResponse</code>
- <code title="get /api/v1/users/{address}/markets/merged/lookup">client.v1.users.markets.merged.<a href="./src/resources/v1/users/markets/merged.ts">lookupByAsset</a>(address, { ...params }) -> MergedLookupByAssetResponse</code>

### Nept

Types:

- <code><a href="./src/resources/v1/users/nept/nept.ts">UserNeptUnlockAmounts</a></code>
- <code><a href="./src/resources/v1/users/nept/nept.ts">UserNeptUnlockOverview</a></code>
- <code><a href="./src/resources/v1/users/nept/nept.ts">NeptGetUnlocksResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/nept/unlocks">client.v1.users.nept.<a href="./src/resources/v1/users/nept/nept.ts">getUnlocks</a>(address, { ...params }) -> NeptGetUnlocksResponse</code>

#### Staking

Types:

- <code><a href="./src/resources/v1/users/nept/staking/staking.ts">UserStake</a></code>
- <code><a href="./src/resources/v1/users/nept/staking/staking.ts">UserStakeUnbondingEntry</a></code>
- <code><a href="./src/resources/v1/users/nept/staking/staking.ts">StakingGetOverviewResponse</a></code>
- <code><a href="./src/resources/v1/users/nept/staking/staking.ts">StakingGetUnstakingPoolResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/nept/staking">client.v1.users.nept.staking.<a href="./src/resources/v1/users/nept/staking/staking.ts">getOverview</a>(address, { ...params }) -> StakingGetOverviewResponse</code>
- <code title="get /api/v1/users/{address}/nept/staking/unstaking">client.v1.users.nept.staking.<a href="./src/resources/v1/users/nept/staking/staking.ts">getUnstakingPool</a>(address, { ...params }) -> StakingGetUnstakingPoolResponse</code>

##### Pools

Types:

- <code><a href="./src/resources/v1/users/nept/staking/pools.ts">UserStakePool</a></code>
- <code><a href="./src/resources/v1/users/nept/staking/pools.ts">PoolGetAllResponse</a></code>
- <code><a href="./src/resources/v1/users/nept/staking/pools.ts">PoolLookupResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/nept/staking/pools">client.v1.users.nept.staking.pools.<a href="./src/resources/v1/users/nept/staking/pools.ts">getAll</a>(address, { ...params }) -> PoolGetAllResponse</code>
- <code title="get /api/v1/users/{address}/nept/staking/pools/lookup">client.v1.users.nept.staking.pools.<a href="./src/resources/v1/users/nept/staking/pools.ts">lookup</a>(address, { ...params }) -> PoolLookupResponse</code>

### Wallet

Types:

- <code><a href="./src/resources/v1/users/wallet.ts">UserWalletPortfolio</a></code>
- <code><a href="./src/resources/v1/users/wallet.ts">WalletGetBalancesResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/wallet/balances">client.v1.users.wallet.<a href="./src/resources/v1/users/wallet.ts">getBalances</a>(address, { ...params }) -> WalletGetBalancesResponse</code>

## Analytics

### Market

Types:

- <code><a href="./src/resources/v1/analytics/market/market.ts">MarketGetCurrentStateResponse</a></code>

Methods:

- <code title="get /api/v1/analytics/market/state">client.v1.analytics.market.<a href="./src/resources/v1/analytics/market/market.ts">getCurrentState</a>() -> MarketGetCurrentStateResponse</code>

#### History

##### LoansOriginated

Types:

- <code><a href="./src/resources/v1/analytics/market/history/loans-originated.ts">LoansOriginatedGetAllResponse</a></code>
- <code><a href="./src/resources/v1/analytics/market/history/loans-originated.ts">LoansOriginatedGetByAssetResponse</a></code>

Methods:

- <code title="get /api/v1/analytics/market/history/loans-originated">client.v1.analytics.market.history.loansOriginated.<a href="./src/resources/v1/analytics/market/history/loans-originated.ts">getAll</a>({ ...params }) -> LoansOriginatedGetAllResponse</code>
- <code title="get /api/v1/analytics/market/history/loans-originated/by-asset">client.v1.analytics.market.history.loansOriginated.<a href="./src/resources/v1/analytics/market/history/loans-originated.ts">getByAsset</a>({ ...params }) -> LoansOriginatedGetByAssetResponse</code>

## Integrations

### Bantr

Types:

- <code><a href="./src/resources/v1/integrations/bantr.ts">BantrGetTransactionsResponse</a></code>

Methods:

- <code title="get /api/v1/integrations/bantr/transactions">client.v1.integrations.bantr.<a href="./src/resources/v1/integrations/bantr.ts">getTransactions</a>({ ...params }) -> BantrGetTransactionsResponse</code>
