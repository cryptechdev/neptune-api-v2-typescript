// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from 'neptune-api-v2';

const client = new NeptuneAPIV2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.users.markets.borrow.accounts.retrieve(0, { address: 'address' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v1.users.markets.borrow.accounts.retrieve(0, {
      address: 'address',
      with_text: true,
      with_value: true,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveCollaterals: only required params', async () => {
    const responsePromise = client.v1.users.markets.borrow.accounts.retrieveCollaterals(0, {
      address: 'address',
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
  test.skip('retrieveCollaterals: required and optional params', async () => {
    const response = await client.v1.users.markets.borrow.accounts.retrieveCollaterals(0, {
      address: 'address',
      with_text: true,
      with_value: true,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveDebts: only required params', async () => {
    const responsePromise = client.v1.users.markets.borrow.accounts.retrieveDebts(0, { address: 'address' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveDebts: required and optional params', async () => {
    const response = await client.v1.users.markets.borrow.accounts.retrieveDebts(0, {
      address: 'address',
      with_text: true,
      with_value: true,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveHealth: only required params', async () => {
    const responsePromise = client.v1.users.markets.borrow.accounts.retrieveHealth(0, { address: 'address' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveHealth: required and optional params', async () => {
    const response = await client.v1.users.markets.borrow.accounts.retrieveHealth(0, {
      address: 'address',
      with_text: true,
      with_value: true,
    });
  });
});
