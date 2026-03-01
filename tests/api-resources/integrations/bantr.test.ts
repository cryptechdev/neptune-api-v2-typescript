// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from '@neptunefinance/api-v2';

const client = new NeptuneAPIV2({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource bantr', () => {
  // Mock server tests are disabled
  test.skip('getTransactions: only required params', async () => {
    const responsePromise = client.integrations.bantr.getTransactions({ end_block: 0, start_block: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTransactions: required and optional params', async () => {
    const response = await client.integrations.bantr.getTransactions({
      end_block: 0,
      start_block: 0,
      limit: 0,
    });
  });
});
