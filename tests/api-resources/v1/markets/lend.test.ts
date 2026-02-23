// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from 'neptune-api-v2';

const client = new NeptuneAPIV2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lend', () => {
  // Mock server tests are disabled
  test.skip('getLendingMarkets', async () => {
    const responsePromise = client.v1.markets.lend.getLendingMarkets();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getLendingMarkets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.markets.lend.getLendingMarkets(
        { with_text: true, with_value: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getRateHistory: only required params', async () => {
    const responsePromise = client.v1.markets.lend.getRateHistory({
      end: 0,
      period: 'h',
      start: 0,
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
  test.skip('getRateHistory: required and optional params', async () => {
    const response = await client.v1.markets.lend.getRateHistory({
      end: 0,
      period: 'h',
      start: 0,
      asset_ids: 'token;-K-//-//3-,token;v/-/g-/P',
      interval: 1,
      limit: 1,
      offset: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('lookupByAsset: only required params', async () => {
    const responsePromise = client.v1.markets.lend.lookupByAsset({ asset_id: 'token;-K-//-//3-' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('lookupByAsset: required and optional params', async () => {
    const response = await client.v1.markets.lend.lookupByAsset({
      asset_id: 'token;-K-//-//3-',
      with_text: true,
      with_value: true,
    });
  });
});
