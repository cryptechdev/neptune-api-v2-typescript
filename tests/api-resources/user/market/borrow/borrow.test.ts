// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from '@neptunefinance/api-v2';

const client = new NeptuneAPIV2({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource borrow', () => {
  // Mock server tests are disabled
  test.skip('getCollateralAccountsByAsset: only required params', async () => {
    const responsePromise = client.user.market.borrow.getCollateralAccountsByAsset(
      'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
      { asset_id: 'token;-K-//-//3-' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCollateralAccountsByAsset: required and optional params', async () => {
    const response = await client.user.market.borrow.getCollateralAccountsByAsset(
      'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
      {
        asset_id: 'token;-K-//-//3-',
        with_text: true,
        with_value: true,
      },
    );
  });

  // Mock server tests are disabled
  test.skip('getCollateralTotals', async () => {
    const responsePromise = client.user.market.borrow.getCollateralTotals(
      'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCollateralTotals: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.market.borrow.getCollateralTotals(
        'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
        { with_text: true, with_value: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getDebtAccountsByAsset: only required params', async () => {
    const responsePromise = client.user.market.borrow.getDebtAccountsByAsset(
      'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
      { asset_id: 'token;-K-//-//3-' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getDebtAccountsByAsset: required and optional params', async () => {
    const response = await client.user.market.borrow.getDebtAccountsByAsset(
      'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
      {
        asset_id: 'token;-K-//-//3-',
        with_text: true,
        with_value: true,
      },
    );
  });

  // Mock server tests are disabled
  test.skip('getDebtsTotals', async () => {
    const responsePromise = client.user.market.borrow.getDebtsTotals(
      'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getDebtsTotals: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.market.borrow.getDebtsTotals(
        'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
        { with_text: true, with_value: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getPortfolio', async () => {
    const responsePromise = client.user.market.borrow.getPortfolio(
      'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPortfolio: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.market.borrow.getPortfolio(
        'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
        { with_text: true, with_value: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });
});
