// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from '@neptunefinance/api-v2';

const client = new NeptuneAPIV2({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource markets', () => {
  // Mock server tests are disabled
  test.skip('getMerged', async () => {
    const responsePromise = client.markets.getMerged();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getMerged: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.markets.getMerged({ with_text: true, with_value: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getMergedByAsset: only required params', async () => {
    const responsePromise = client.markets.getMergedByAsset({ asset_id: 'token;-K-//-//3-' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getMergedByAsset: required and optional params', async () => {
    const response = await client.markets.getMergedByAsset({
      asset_id: 'token;-K-//-//3-',
      with_text: true,
      with_value: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getOverview', async () => {
    const responsePromise = client.markets.getOverview();
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
      client.markets.getOverview({ with_text: true, with_value: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getParams', async () => {
    const responsePromise = client.markets.getParams();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getParams: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.markets.getParams({ with_text: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getSupply', async () => {
    const responsePromise = client.markets.getSupply();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSupply: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.markets.getSupply({ with_text: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });
});
