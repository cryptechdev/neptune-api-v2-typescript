// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from 'neptune-api-v2';

const client = new NeptuneAPIV2({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource borrow', () => {
  // Mock server tests are disabled
  test.skip('getOverview', async () => {
    const responsePromise = client.markets.borrow.getOverview();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getOverview: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.markets.borrow.getOverview(
        { with_text: true, with_value: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getRateHistory: only required params', async () => {
    const responsePromise = client.markets.borrow.getRateHistory({
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
    const response = await client.markets.borrow.getRateHistory({
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
