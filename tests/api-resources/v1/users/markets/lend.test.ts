// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from 'neptune-api-v2';

const client = new NeptuneAPIV2({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource lend', () => {
  // Mock server tests are disabled
  test.skip('getPortfolio', async () => {
    const responsePromise = client.v1.users.markets.lend.getPortfolio('address');
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
      client.v1.users.markets.lend.getPortfolio(
        'address',
        { with_text: true, with_value: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('lookupDistribution: only required params', async () => {
    const responsePromise = client.v1.users.markets.lend.lookupDistribution('address', {
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
  test.skip('lookupDistribution: required and optional params', async () => {
    const response = await client.v1.users.markets.lend.lookupDistribution('address', {
      asset_id: 'token;-K-//-//3-',
      with_text: true,
      with_value: true,
    });
  });
});
