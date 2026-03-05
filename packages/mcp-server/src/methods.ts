// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.status.checkHealth',
    fullyQualifiedName: 'status.checkHealth',
    httpMethod: 'get',
    httpPath: '/api/v1/status/health',
  },
  {
    clientCallName: 'client.assets.list',
    fullyQualifiedName: 'assets.list',
    httpMethod: 'get',
    httpPath: '/api/v1/assets',
  },
  {
    clientCallName: 'client.assets.getPriceHistory',
    fullyQualifiedName: 'assets.getPriceHistory',
    httpMethod: 'get',
    httpPath: '/api/v1/assets/price-history',
  },
  {
    clientCallName: 'client.assets.listPrices',
    fullyQualifiedName: 'assets.listPrices',
    httpMethod: 'get',
    httpPath: '/api/v1/assets/prices',
  },
  {
    clientCallName: 'client.markets.getMerged',
    fullyQualifiedName: 'markets.getMerged',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/merged',
  },
  {
    clientCallName: 'client.markets.getMergedByAsset',
    fullyQualifiedName: 'markets.getMergedByAsset',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/merged/lookup',
  },
  {
    clientCallName: 'client.markets.getOverview',
    fullyQualifiedName: 'markets.getOverview',
    httpMethod: 'get',
    httpPath: '/api/v1/markets',
  },
  {
    clientCallName: 'client.markets.getParams',
    fullyQualifiedName: 'markets.getParams',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/config',
  },
  {
    clientCallName: 'client.markets.lend.list',
    fullyQualifiedName: 'markets.lend.list',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/lend',
  },
  {
    clientCallName: 'client.markets.lend.getByAsset',
    fullyQualifiedName: 'markets.lend.getByAsset',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/lend/lookup',
  },
  {
    clientCallName: 'client.markets.lend.getRateHistory',
    fullyQualifiedName: 'markets.lend.getRateHistory',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/lend/rate-history',
  },
  {
    clientCallName: 'client.markets.borrow.getOverview',
    fullyQualifiedName: 'markets.borrow.getOverview',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/borrow',
  },
  {
    clientCallName: 'client.markets.borrow.getRateHistory',
    fullyQualifiedName: 'markets.borrow.getRateHistory',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/borrow/rate-history',
  },
  {
    clientCallName: 'client.markets.borrow.collaterals.list',
    fullyQualifiedName: 'markets.borrow.collaterals.list',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/borrow/collaterals',
  },
  {
    clientCallName: 'client.markets.borrow.collaterals.getByAsset',
    fullyQualifiedName: 'markets.borrow.collaterals.getByAsset',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/borrow/collaterals/lookup',
  },
  {
    clientCallName: 'client.markets.borrow.debts.list',
    fullyQualifiedName: 'markets.borrow.debts.list',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/borrow/debts',
  },
  {
    clientCallName: 'client.markets.borrow.debts.getByAsset',
    fullyQualifiedName: 'markets.borrow.debts.getByAsset',
    httpMethod: 'get',
    httpPath: '/api/v1/markets/borrow/debts/lookup',
  },
  {
    clientCallName: 'client.nept.getParams',
    fullyQualifiedName: 'nept.getParams',
    httpMethod: 'get',
    httpPath: '/api/v1/nept/params',
  },
  {
    clientCallName: 'client.nept.getStakingOverview',
    fullyQualifiedName: 'nept.getStakingOverview',
    httpMethod: 'get',
    httpPath: '/api/v1/nept/staking',
  },
  {
    clientCallName: 'client.nept.getState',
    fullyQualifiedName: 'nept.getState',
    httpMethod: 'get',
    httpPath: '/api/v1/nept/state',
  },
  {
    clientCallName: 'client.user.getTxHistory',
    fullyQualifiedName: 'user.getTxHistory',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/tx-history',
  },
  {
    clientCallName: 'client.user.getUser',
    fullyQualifiedName: 'user.getUser',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/user',
  },
  {
    clientCallName: 'client.user.market.getMerged',
    fullyQualifiedName: 'user.market.getMerged',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/merged',
  },
  {
    clientCallName: 'client.user.market.getMergedByAsset',
    fullyQualifiedName: 'user.market.getMergedByAsset',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/merged/lookup',
  },
  {
    clientCallName: 'client.user.market.getPortfolio',
    fullyQualifiedName: 'user.market.getPortfolio',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets',
  },
  {
    clientCallName: 'client.user.market.lend.list',
    fullyQualifiedName: 'user.market.lend.list',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/lend',
  },
  {
    clientCallName: 'client.user.market.lend.getByAsset',
    fullyQualifiedName: 'user.market.lend.getByAsset',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/lend/lookup',
  },
  {
    clientCallName: 'client.user.market.borrow.getCollateralAccountsByAsset',
    fullyQualifiedName: 'user.market.borrow.getCollateralAccountsByAsset',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/borrow/lookup/collateral',
  },
  {
    clientCallName: 'client.user.market.borrow.getCollateralTotals',
    fullyQualifiedName: 'user.market.borrow.getCollateralTotals',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/borrow/sum/collaterals',
  },
  {
    clientCallName: 'client.user.market.borrow.getDebtAccountsByAsset',
    fullyQualifiedName: 'user.market.borrow.getDebtAccountsByAsset',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/borrow/lookup/debt',
  },
  {
    clientCallName: 'client.user.market.borrow.getDebtsTotals',
    fullyQualifiedName: 'user.market.borrow.getDebtsTotals',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/borrow/sum/debts',
  },
  {
    clientCallName: 'client.user.market.borrow.getPortfolio',
    fullyQualifiedName: 'user.market.borrow.getPortfolio',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/borrow',
  },
  {
    clientCallName: 'client.user.market.borrow.subaccount.getSubaccount',
    fullyQualifiedName: 'user.market.borrow.subaccount.getSubaccount',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/borrow/accounts/{index}',
  },
  {
    clientCallName: 'client.user.market.borrow.subaccount.getSubaccountCollaterals',
    fullyQualifiedName: 'user.market.borrow.subaccount.getSubaccountCollaterals',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/borrow/accounts/{index}/collaterals',
  },
  {
    clientCallName: 'client.user.market.borrow.subaccount.getSubaccountDebts',
    fullyQualifiedName: 'user.market.borrow.subaccount.getSubaccountDebts',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/borrow/accounts/{index}/debts',
  },
  {
    clientCallName: 'client.user.market.borrow.subaccount.getSubaccountHealth',
    fullyQualifiedName: 'user.market.borrow.subaccount.getSubaccountHealth',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/markets/borrow/accounts/{index}/health',
  },
  {
    clientCallName: 'client.user.nept.getUnlocks',
    fullyQualifiedName: 'user.nept.getUnlocks',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/nept/unlocks',
  },
  {
    clientCallName: 'client.user.nept.staking.getOverview',
    fullyQualifiedName: 'user.nept.staking.getOverview',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/nept/staking',
  },
  {
    clientCallName: 'client.user.nept.staking.getStakingPool',
    fullyQualifiedName: 'user.nept.staking.getStakingPool',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/nept/staking/pools/lookup',
  },
  {
    clientCallName: 'client.user.nept.staking.getStakingPools',
    fullyQualifiedName: 'user.nept.staking.getStakingPools',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/nept/staking/pools',
  },
  {
    clientCallName: 'client.user.nept.staking.getUnstaking',
    fullyQualifiedName: 'user.nept.staking.getUnstaking',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/nept/staking/unstaking',
  },
  {
    clientCallName: 'client.user.wallet.getBalanceByAsset',
    fullyQualifiedName: 'user.wallet.getBalanceByAsset',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/wallet/balance',
  },
  {
    clientCallName: 'client.user.wallet.getBalances',
    fullyQualifiedName: 'user.wallet.getBalances',
    httpMethod: 'get',
    httpPath: '/api/v1/users/{address}/wallet/balances',
  },
  {
    clientCallName: 'client.analytics.market.getCurrentState',
    fullyQualifiedName: 'analytics.market.getCurrentState',
    httpMethod: 'get',
    httpPath: '/api/v1/analytics/market/state',
  },
  {
    clientCallName: 'client.analytics.market.history.getLoansOriginated',
    fullyQualifiedName: 'analytics.market.history.getLoansOriginated',
    httpMethod: 'get',
    httpPath: '/api/v1/analytics/market/history/loans-originated',
  },
  {
    clientCallName: 'client.analytics.market.history.getLoansOriginatedByAsset',
    fullyQualifiedName: 'analytics.market.history.getLoansOriginatedByAsset',
    httpMethod: 'get',
    httpPath: '/api/v1/analytics/market/history/loans-originated/by-asset',
  },
  {
    clientCallName: 'client.integrations.bantr.getTransactions',
    fullyQualifiedName: 'integrations.bantr.getTransactions',
    httpMethod: 'get',
    httpPath: '/api/v1/integrations/bantr/transactions',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
