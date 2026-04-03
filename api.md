# Core

Types:

- <code><a href="./src/resources/core.ts">ErrorData</a></code>
- <code><a href="./src/resources/core.ts">ErrorDataVariants</a></code>
- <code><a href="./src/resources/core.ts">ErrorKind</a></code>
- <code><a href="./src/resources/core.ts">ErrorResponse</a></code>
- <code><a href="./src/resources/core.ts">ErrorScope</a></code>
- <code><a href="./src/resources/core.ts">FieldValidationError</a></code>
- <code><a href="./src/resources/core.ts">Interval</a></code>
- <code><a href="./src/resources/core.ts">IntervalUnit</a></code>
- <code><a href="./src/resources/core.ts">ValidationErrorData</a></code>
- <code><a href="./src/resources/core.ts">ValidationFieldSource</a></code>

# Status

Types:

- <code><a href="./src/resources/status.ts">StatusCheckHealthResponse</a></code>

Methods:

- <code title="get /api/v1/status/health">client.status.<a href="./src/resources/status.ts">checkHealth</a>() -> StatusCheckHealthResponse</code>

# Assets

Types:

- <code><a href="./src/resources/assets.ts">AssetClassification</a></code>
- <code><a href="./src/resources/assets.ts">AssetInfo</a></code>
- <code><a href="./src/resources/assets.ts">AssetMetadata</a></code>
- <code><a href="./src/resources/assets.ts">AssetPrice</a></code>
- <code><a href="./src/resources/assets.ts">AssetPriceHistory</a></code>
- <code><a href="./src/resources/assets.ts">AssetRateHistory</a></code>
- <code><a href="./src/resources/assets.ts">AssetSpec</a></code>
- <code><a href="./src/resources/assets.ts">AssetListResponse</a></code>
- <code><a href="./src/resources/assets.ts">AssetGetPriceHistoryResponse</a></code>
- <code><a href="./src/resources/assets.ts">AssetListPricesResponse</a></code>

Methods:

- <code title="get /api/v1/assets">client.assets.<a href="./src/resources/assets.ts">list</a>() -> AssetListResponse</code>
- <code title="get /api/v1/assets/price-history">client.assets.<a href="./src/resources/assets.ts">getPriceHistory</a>({ ...params }) -> AssetGetPriceHistoryResponse</code>
- <code title="get /api/v1/assets/prices">client.assets.<a href="./src/resources/assets.ts">listPrices</a>({ ...params }) -> AssetListPricesResponse</code>

# Markets

Types:

- <code><a href="./src/resources/markets/markets.ts">GlobalMarketConfig</a></code>
- <code><a href="./src/resources/markets/markets.ts">MarketRate</a></code>
- <code><a href="./src/resources/markets/markets.ts">MergedMarket</a></code>
- <code><a href="./src/resources/markets/markets.ts">MarketGetMergedResponse</a></code>
- <code><a href="./src/resources/markets/markets.ts">MarketGetMergedByAssetResponse</a></code>
- <code><a href="./src/resources/markets/markets.ts">MarketGetOverviewResponse</a></code>
- <code><a href="./src/resources/markets/markets.ts">MarketGetParamsResponse</a></code>

Methods:

- <code title="get /api/v1/markets/merged">client.markets.<a href="./src/resources/markets/markets.ts">getMerged</a>({ ...params }) -> MarketGetMergedResponse</code>
- <code title="get /api/v1/markets/merged/lookup">client.markets.<a href="./src/resources/markets/markets.ts">getMergedByAsset</a>({ ...params }) -> MarketGetMergedByAssetResponse</code>
- <code title="get /api/v1/markets">client.markets.<a href="./src/resources/markets/markets.ts">getOverview</a>({ ...params }) -> MarketGetOverviewResponse</code>
- <code title="get /api/v1/markets/config">client.markets.<a href="./src/resources/markets/markets.ts">getParams</a>({ ...params }) -> MarketGetParamsResponse</code>

## Lend

Types:

- <code><a href="./src/resources/markets/lend.ts">LendMarket</a></code>
- <code><a href="./src/resources/markets/lend.ts">LendMarketData</a></code>
- <code><a href="./src/resources/markets/lend.ts">LendMarketState</a></code>
- <code><a href="./src/resources/markets/lend.ts">LendListResponse</a></code>
- <code><a href="./src/resources/markets/lend.ts">LendGetByAssetResponse</a></code>
- <code><a href="./src/resources/markets/lend.ts">LendGetRateHistoryResponse</a></code>

Methods:

- <code title="get /api/v1/markets/lend">client.markets.lend.<a href="./src/resources/markets/lend.ts">list</a>({ ...params }) -> LendListResponse</code>
- <code title="get /api/v1/markets/lend/lookup">client.markets.lend.<a href="./src/resources/markets/lend.ts">getByAsset</a>({ ...params }) -> LendGetByAssetResponse</code>
- <code title="get /api/v1/markets/lend/rate-history">client.markets.lend.<a href="./src/resources/markets/lend.ts">getRateHistory</a>({ ...params }) -> LendGetRateHistoryResponse</code>

## Borrow

Types:

- <code><a href="./src/resources/markets/borrow/borrow.ts">BorrowMarketOverview</a></code>
- <code><a href="./src/resources/markets/borrow/borrow.ts">BorrowGetOverviewResponse</a></code>
- <code><a href="./src/resources/markets/borrow/borrow.ts">BorrowGetRateHistoryResponse</a></code>

Methods:

- <code title="get /api/v1/markets/borrow">client.markets.borrow.<a href="./src/resources/markets/borrow/borrow.ts">getOverview</a>({ ...params }) -> BorrowGetOverviewResponse</code>
- <code title="get /api/v1/markets/borrow/rate-history">client.markets.borrow.<a href="./src/resources/markets/borrow/borrow.ts">getRateHistory</a>({ ...params }) -> BorrowGetRateHistoryResponse</code>

### Collaterals

Types:

- <code><a href="./src/resources/markets/borrow/collaterals.ts">BorrowCollateralConfig</a></code>
- <code><a href="./src/resources/markets/borrow/collaterals.ts">BorrowCollateralMarket</a></code>
- <code><a href="./src/resources/markets/borrow/collaterals.ts">BorrowCollateralMarketData</a></code>
- <code><a href="./src/resources/markets/borrow/collaterals.ts">BorrowCollateralState</a></code>
- <code><a href="./src/resources/markets/borrow/collaterals.ts">CollateralListResponse</a></code>
- <code><a href="./src/resources/markets/borrow/collaterals.ts">CollateralGetByAssetResponse</a></code>

Methods:

- <code title="get /api/v1/markets/borrow/collaterals">client.markets.borrow.collaterals.<a href="./src/resources/markets/borrow/collaterals.ts">list</a>({ ...params }) -> CollateralListResponse</code>
- <code title="get /api/v1/markets/borrow/collaterals/lookup">client.markets.borrow.collaterals.<a href="./src/resources/markets/borrow/collaterals.ts">getByAsset</a>({ ...params }) -> CollateralGetByAssetResponse</code>

### Debts

Types:

- <code><a href="./src/resources/markets/borrow/debts.ts">BorrowDebtConfig</a></code>
- <code><a href="./src/resources/markets/borrow/debts.ts">BorrowDebtMarket</a></code>
- <code><a href="./src/resources/markets/borrow/debts.ts">BorrowDebtMarketData</a></code>
- <code><a href="./src/resources/markets/borrow/debts.ts">BorrowDebtState</a></code>
- <code><a href="./src/resources/markets/borrow/debts.ts">DebtListResponse</a></code>
- <code><a href="./src/resources/markets/borrow/debts.ts">DebtGetByAssetResponse</a></code>

Methods:

- <code title="get /api/v1/markets/borrow/debts">client.markets.borrow.debts.<a href="./src/resources/markets/borrow/debts.ts">list</a>({ ...params }) -> DebtListResponse</code>
- <code title="get /api/v1/markets/borrow/debts/lookup">client.markets.borrow.debts.<a href="./src/resources/markets/borrow/debts.ts">getByAsset</a>({ ...params }) -> DebtGetByAssetResponse</code>

# Nept

Types:

- <code><a href="./src/resources/nept.ts">NeptParams</a></code>
- <code><a href="./src/resources/nept.ts">NeptState</a></code>
- <code><a href="./src/resources/nept.ts">NeptUnlockDistributionGroup</a></code>
- <code><a href="./src/resources/nept.ts">StakingPoolFull</a></code>
- <code><a href="./src/resources/nept.ts">StakingPoolParams</a></code>
- <code><a href="./src/resources/nept.ts">StakingPoolState</a></code>
- <code><a href="./src/resources/nept.ts">NeptGetParamsResponse</a></code>
- <code><a href="./src/resources/nept.ts">NeptGetStakingOverviewResponse</a></code>
- <code><a href="./src/resources/nept.ts">NeptGetStateResponse</a></code>

Methods:

- <code title="get /api/v1/nept/params">client.nept.<a href="./src/resources/nept.ts">getParams</a>({ ...params }) -> NeptGetParamsResponse</code>
- <code title="get /api/v1/nept/staking">client.nept.<a href="./src/resources/nept.ts">getStakingOverview</a>({ ...params }) -> NeptGetStakingOverviewResponse</code>
- <code title="get /api/v1/nept/state">client.nept.<a href="./src/resources/nept.ts">getState</a>({ ...params }) -> NeptGetStateResponse</code>

# User

Types:

- <code><a href="./src/resources/user/user.ts">EventAction</a></code>
- <code><a href="./src/resources/user/user.ts">User</a></code>
- <code><a href="./src/resources/user/user.ts">UserTx</a></code>
- <code><a href="./src/resources/user/user.ts">UserGetUserResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/tx-history">client.user.<a href="./src/resources/user/user.ts">getTxHistory</a>(address, { ...params }) -> UserTxesTxHistoryPage</code>
- <code title="get /api/v1/users/{address}/user">client.user.<a href="./src/resources/user/user.ts">getUser</a>(address, { ...params }) -> UserGetUserResponse</code>

## Market

Types:

- <code><a href="./src/resources/user/market/market.ts">UserMarket</a></code>
- <code><a href="./src/resources/user/market/market.ts">UserMergedMarket</a></code>
- <code><a href="./src/resources/user/market/market.ts">MarketGetMergedResponse</a></code>
- <code><a href="./src/resources/user/market/market.ts">MarketGetMergedByAssetResponse</a></code>
- <code><a href="./src/resources/user/market/market.ts">MarketGetPortfolioResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/merged">client.user.market.<a href="./src/resources/user/market/market.ts">getMerged</a>(address, { ...params }) -> MarketGetMergedResponse</code>
- <code title="get /api/v1/users/{address}/markets/merged/lookup">client.user.market.<a href="./src/resources/user/market/market.ts">getMergedByAsset</a>(address, { ...params }) -> MarketGetMergedByAssetResponse</code>
- <code title="get /api/v1/users/{address}/markets">client.user.market.<a href="./src/resources/user/market/market.ts">getPortfolio</a>(address, { ...params }) -> MarketGetPortfolioResponse</code>

### Lend

Types:

- <code><a href="./src/resources/user/market/lend.ts">UserLendAssetPool</a></code>
- <code><a href="./src/resources/user/market/lend.ts">UserLendMarket</a></code>
- <code><a href="./src/resources/user/market/lend.ts">UserLendOriginAmounts</a></code>
- <code><a href="./src/resources/user/market/lend.ts">UserLendReceiptAmounts</a></code>
- <code><a href="./src/resources/user/market/lend.ts">LendListResponse</a></code>
- <code><a href="./src/resources/user/market/lend.ts">LendGetByAssetResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/lend">client.user.market.lend.<a href="./src/resources/user/market/lend.ts">list</a>(address, { ...params }) -> LendListResponse</code>
- <code title="get /api/v1/users/{address}/markets/lend/lookup">client.user.market.lend.<a href="./src/resources/user/market/lend.ts">getByAsset</a>(address, { ...params }) -> LendGetByAssetResponse</code>

### Borrow

Types:

- <code><a href="./src/resources/user/market/borrow/borrow.ts">UserBorrowMarket</a></code>
- <code><a href="./src/resources/user/market/borrow/borrow.ts">UserBorrowMarketPools</a></code>
- <code><a href="./src/resources/user/market/borrow/borrow.ts">BorrowGetCollateralAccountsByAssetResponse</a></code>
- <code><a href="./src/resources/user/market/borrow/borrow.ts">BorrowGetCollateralTotalsResponse</a></code>
- <code><a href="./src/resources/user/market/borrow/borrow.ts">BorrowGetDebtAccountsByAssetResponse</a></code>
- <code><a href="./src/resources/user/market/borrow/borrow.ts">BorrowGetDebtsTotalsResponse</a></code>
- <code><a href="./src/resources/user/market/borrow/borrow.ts">BorrowGetPortfolioResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/borrow/lookup/collateral">client.user.market.borrow.<a href="./src/resources/user/market/borrow/borrow.ts">getCollateralAccountsByAsset</a>(address, { ...params }) -> BorrowGetCollateralAccountsByAssetResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/sum/collaterals">client.user.market.borrow.<a href="./src/resources/user/market/borrow/borrow.ts">getCollateralTotals</a>(address, { ...params }) -> BorrowGetCollateralTotalsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/lookup/debt">client.user.market.borrow.<a href="./src/resources/user/market/borrow/borrow.ts">getDebtAccountsByAsset</a>(address, { ...params }) -> BorrowGetDebtAccountsByAssetResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/sum/debts">client.user.market.borrow.<a href="./src/resources/user/market/borrow/borrow.ts">getDebtsTotals</a>(address, { ...params }) -> BorrowGetDebtsTotalsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow">client.user.market.borrow.<a href="./src/resources/user/market/borrow/borrow.ts">getPortfolio</a>(address, { ...params }) -> BorrowGetPortfolioResponse</code>

#### Subaccount

Types:

- <code><a href="./src/resources/user/market/borrow/subaccount.ts">UserAccountHealth</a></code>
- <code><a href="./src/resources/user/market/borrow/subaccount.ts">UserBorrowMarketAccount</a></code>
- <code><a href="./src/resources/user/market/borrow/subaccount.ts">UserCollateralAccountPool</a></code>
- <code><a href="./src/resources/user/market/borrow/subaccount.ts">UserCollateralAssetPool</a></code>
- <code><a href="./src/resources/user/market/borrow/subaccount.ts">UserDebtAccountPool</a></code>
- <code><a href="./src/resources/user/market/borrow/subaccount.ts">UserDebtAssetPool</a></code>
- <code><a href="./src/resources/user/market/borrow/subaccount.ts">SubaccountGetSubaccountResponse</a></code>
- <code><a href="./src/resources/user/market/borrow/subaccount.ts">SubaccountGetSubaccountCollateralsResponse</a></code>
- <code><a href="./src/resources/user/market/borrow/subaccount.ts">SubaccountGetSubaccountDebtsResponse</a></code>
- <code><a href="./src/resources/user/market/borrow/subaccount.ts">SubaccountGetSubaccountHealthResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}">client.user.market.borrow.subaccount.<a href="./src/resources/user/market/borrow/subaccount.ts">getSubaccount</a>(index, { ...params }) -> SubaccountGetSubaccountResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}/collaterals">client.user.market.borrow.subaccount.<a href="./src/resources/user/market/borrow/subaccount.ts">getSubaccountCollaterals</a>(index, { ...params }) -> SubaccountGetSubaccountCollateralsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}/debts">client.user.market.borrow.subaccount.<a href="./src/resources/user/market/borrow/subaccount.ts">getSubaccountDebts</a>(index, { ...params }) -> SubaccountGetSubaccountDebtsResponse</code>
- <code title="get /api/v1/users/{address}/markets/borrow/accounts/{index}/health">client.user.market.borrow.subaccount.<a href="./src/resources/user/market/borrow/subaccount.ts">getSubaccountHealth</a>(index, { ...params }) -> SubaccountGetSubaccountHealthResponse</code>

## Nept

Types:

- <code><a href="./src/resources/user/nept/nept.ts">UserUnlockAmounts</a></code>
- <code><a href="./src/resources/user/nept/nept.ts">UserUnlockOverview</a></code>
- <code><a href="./src/resources/user/nept/nept.ts">UserUnlockSchedule</a></code>
- <code><a href="./src/resources/user/nept/nept.ts">UserUnlockScheduleLinear</a></code>
- <code><a href="./src/resources/user/nept/nept.ts">UserUnlockScheduleLumpSum</a></code>
- <code><a href="./src/resources/user/nept/nept.ts">NeptGetUnlocksResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/nept/unlocks">client.user.nept.<a href="./src/resources/user/nept/nept.ts">getUnlocks</a>(address, { ...params }) -> NeptGetUnlocksResponse</code>

### Staking

Types:

- <code><a href="./src/resources/user/nept/staking.ts">UserStake</a></code>
- <code><a href="./src/resources/user/nept/staking.ts">UserStakeBondingEntry</a></code>
- <code><a href="./src/resources/user/nept/staking.ts">UserStakePool</a></code>
- <code><a href="./src/resources/user/nept/staking.ts">UserStakeUnbonding</a></code>
- <code><a href="./src/resources/user/nept/staking.ts">UserStakeUnbondingEntry</a></code>
- <code><a href="./src/resources/user/nept/staking.ts">StakingGetOverviewResponse</a></code>
- <code><a href="./src/resources/user/nept/staking.ts">StakingGetStakingPoolResponse</a></code>
- <code><a href="./src/resources/user/nept/staking.ts">StakingGetStakingPoolsResponse</a></code>
- <code><a href="./src/resources/user/nept/staking.ts">StakingGetUnstakingResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/nept/staking">client.user.nept.staking.<a href="./src/resources/user/nept/staking.ts">getOverview</a>(address, { ...params }) -> StakingGetOverviewResponse</code>
- <code title="get /api/v1/users/{address}/nept/staking/pools/lookup">client.user.nept.staking.<a href="./src/resources/user/nept/staking.ts">getStakingPool</a>(address, { ...params }) -> StakingGetStakingPoolResponse</code>
- <code title="get /api/v1/users/{address}/nept/staking/pools">client.user.nept.staking.<a href="./src/resources/user/nept/staking.ts">getStakingPools</a>(address, { ...params }) -> StakingGetStakingPoolsResponse</code>
- <code title="get /api/v1/users/{address}/nept/staking/unstaking">client.user.nept.staking.<a href="./src/resources/user/nept/staking.ts">getUnstaking</a>(address, { ...params }) -> StakingGetUnstakingResponse</code>

## Wallet

Types:

- <code><a href="./src/resources/user/wallet.ts">UserWalletPortfolio</a></code>
- <code><a href="./src/resources/user/wallet.ts">WalletAsset</a></code>
- <code><a href="./src/resources/user/wallet.ts">WalletAssetKnown</a></code>
- <code><a href="./src/resources/user/wallet.ts">WalletAssetUnknown</a></code>
- <code><a href="./src/resources/user/wallet.ts">WalletBalance</a></code>
- <code><a href="./src/resources/user/wallet.ts">WalletGetBalanceByAssetResponse</a></code>
- <code><a href="./src/resources/user/wallet.ts">WalletGetBalancesResponse</a></code>

Methods:

- <code title="get /api/v1/users/{address}/wallet/balance">client.user.wallet.<a href="./src/resources/user/wallet.ts">getBalanceByAsset</a>(address, { ...params }) -> WalletGetBalanceByAssetResponse</code>
- <code title="get /api/v1/users/{address}/wallet/balances">client.user.wallet.<a href="./src/resources/user/wallet.ts">getBalances</a>(address, { ...params }) -> WalletGetBalancesResponse</code>

# Analytics

## Market

Types:

- <code><a href="./src/resources/analytics/market/market.ts">MarketGetCurrentStateResponse</a></code>

Methods:

- <code title="get /api/v1/analytics/market/state">client.analytics.market.<a href="./src/resources/analytics/market/market.ts">getCurrentState</a>() -> MarketGetCurrentStateResponse</code>

### History

Types:

- <code><a href="./src/resources/analytics/market/history.ts">HistoryGetLoansOriginatedResponse</a></code>
- <code><a href="./src/resources/analytics/market/history.ts">HistoryGetLoansOriginatedByAssetResponse</a></code>

Methods:

- <code title="get /api/v1/analytics/market/history/loans-originated">client.analytics.market.history.<a href="./src/resources/analytics/market/history.ts">getLoansOriginated</a>({ ...params }) -> HistoryGetLoansOriginatedResponsesIntervalSinglePage</code>
- <code title="get /api/v1/analytics/market/history/loans-originated/by-asset">client.analytics.market.history.<a href="./src/resources/analytics/market/history.ts">getLoansOriginatedByAsset</a>({ ...params }) -> HistoryGetLoansOriginatedByAssetResponse</code>

## Nept

Types:

- <code><a href="./src/resources/analytics/nept.ts">NeptUnlocksDistributionResponse</a></code>

Methods:

- <code title="get /api/v1/analytics/nept/unlocks-distribution">client.analytics.nept.<a href="./src/resources/analytics/nept.ts">unlocksDistribution</a>({ ...params }) -> NeptUnlocksDistributionResponse</code>

# Integrations

## Bantr

# Swap

## Routes

Types:

- <code><a href="./src/resources/swap/routes.ts">SwapRouteTargetSet</a></code>
- <code><a href="./src/resources/swap/routes.ts">RouteListAllResponse</a></code>
- <code><a href="./src/resources/swap/routes.ts">RouteListByDenomResponse</a></code>

Methods:

- <code title="get /api/v1/swap/routes/all">client.swap.routes.<a href="./src/resources/swap/routes.ts">listAll</a>({ ...params }) -> RouteListAllResponse</code>
- <code title="get /api/v1/swap/routes">client.swap.routes.<a href="./src/resources/swap/routes.ts">listByDenom</a>({ ...params }) -> RouteListByDenomResponse</code>
