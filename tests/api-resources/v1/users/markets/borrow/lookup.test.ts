// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from 'neptune-api-v2';

const client = new NeptuneAPIV2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lookup', () => {
  // Mock server tests are disabled
  test.skip('retrieveCollateral: only required params', async () => {
    const responsePromise = client.v1.users.markets.borrow.lookup.retrieveCollateral('address', {
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
  test.skip('retrieveCollateral: required and optional params', async () => {
    const response = await client.v1.users.markets.borrow.lookup.retrieveCollateral('address', {
      asset_id: 'token;-K-//-//3-',
      with_text: true,
      with_value: true,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveDebt: only required params', async () => {
    const responsePromise = client.v1.users.markets.borrow.lookup.retrieveDebt('address', {
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
  test.skip('retrieveDebt: required and optional params', async () => {
    const response = await client.v1.users.markets.borrow.lookup.retrieveDebt('address', {
      asset_id: 'token;-K-//-//3-',
      with_text: true,
      with_value: true,
    });
  });
});
