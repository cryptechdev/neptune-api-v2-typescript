// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from 'neptune-api-v2';

const client = new NeptuneAPIV2({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource lookup', () => {
  // Mock server tests are disabled
  test.skip('getCollateralAccounts: only required params', async () => {
    const responsePromise = client.v1.users.markets.borrow.lookup.getCollateralAccounts('address', {
      asset_id: 'token;-K-//-//3-',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCollateralAccounts: required and optional params', async () => {
    const response = await client.v1.users.markets.borrow.lookup.getCollateralAccounts('address', {
      asset_id: 'token;-K-//-//3-',
      with_text: true,
      with_value: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getDebtAccounts: only required params', async () => {
    const responsePromise = client.v1.users.markets.borrow.lookup.getDebtAccounts('address', {
      asset_id: 'token;-K-//-//3-',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getDebtAccounts: required and optional params', async () => {
    const response = await client.v1.users.markets.borrow.lookup.getDebtAccounts('address', {
      asset_id: 'token;-K-//-//3-',
      with_text: true,
      with_value: true,
    });
  });
});
