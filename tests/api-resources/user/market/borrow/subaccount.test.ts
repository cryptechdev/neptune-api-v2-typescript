// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from 'neptune-api-v2';

const client = new NeptuneAPIV2({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource subaccount', () => {
  // Mock server tests are disabled
  test.skip('getSubaccount: only required params', async () => {
    const responsePromise = client.user.market.borrow.subaccount.getSubaccount(0, { address: 'address' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSubaccount: required and optional params', async () => {
    const response = await client.user.market.borrow.subaccount.getSubaccount(0, {
      address: 'address',
      with_text: true,
      with_value: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getSubaccountCollaterals: only required params', async () => {
    const responsePromise = client.user.market.borrow.subaccount.getSubaccountCollaterals(0, {
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
  test.skip('getSubaccountCollaterals: required and optional params', async () => {
    const response = await client.user.market.borrow.subaccount.getSubaccountCollaterals(0, {
      address: 'address',
      with_text: true,
      with_value: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getSubaccountDebts: only required params', async () => {
    const responsePromise = client.user.market.borrow.subaccount.getSubaccountDebts(0, {
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
  test.skip('getSubaccountDebts: required and optional params', async () => {
    const response = await client.user.market.borrow.subaccount.getSubaccountDebts(0, {
      address: 'address',
      with_text: true,
      with_value: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getSubaccountHealth: only required params', async () => {
    const responsePromise = client.user.market.borrow.subaccount.getSubaccountHealth(0, {
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
  test.skip('getSubaccountHealth: required and optional params', async () => {
    const response = await client.user.market.borrow.subaccount.getSubaccountHealth(0, {
      address: 'address',
      with_text: true,
      with_value: true,
    });
  });
});
