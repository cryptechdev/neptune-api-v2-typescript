// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from 'neptune-api-v2';

const client = new NeptuneAPIV2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource loansOriginated', () => {
  // Mock server tests are disabled
  test.skip('getAll: only required params', async () => {
    const responsePromise = client.v1.analytics.market.history.loansOriginated.getAll({
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
  test.skip('getAll: required and optional params', async () => {
    const response = await client.v1.analytics.market.history.loansOriginated.getAll({
      end: 0,
      period: 'h',
      start: 0,
      interval: 1,
      limit: 1,
      offset: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getByAsset: only required params', async () => {
    const responsePromise = client.v1.analytics.market.history.loansOriginated.getByAsset({
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
  test.skip('getByAsset: required and optional params', async () => {
    const response = await client.v1.analytics.market.history.loansOriginated.getByAsset({
      end: 0,
      period: 'h',
      start: 0,
      asset_ids: 'token;-K-//-//3-,token;v/-/g-/P',
      interval: 1,
      limit: 1,
      offset: 0,
    });
  });
});
