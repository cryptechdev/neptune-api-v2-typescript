// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from '@neptunefinance/api-v2';

const client = new NeptuneAPIV2({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource lend', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.user.market.lend.list('injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.market.lend.list(
        'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
        { with_text: true, with_value: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getByAsset: only required params', async () => {
    const responsePromise = client.user.market.lend.getByAsset(
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
  test.skip('getByAsset: required and optional params', async () => {
    const response = await client.user.market.lend.getByAsset(
      'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
      {
        asset_id: 'token;-K-//-//3-',
        with_text: true,
        with_value: true,
      },
    );
  });
});
