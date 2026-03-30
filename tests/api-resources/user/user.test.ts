// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from '@neptunefinance/api-v2';

const client = new NeptuneAPIV2({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource user', () => {
  // Mock server tests are disabled
  test.skip('getTxHistory', async () => {
    const responsePromise = client.user.getTxHistory('injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTxHistory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.getTxHistory(
        'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
        {
          action: 'borrow_flash_loan',
          limit: 1,
          prev_event_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          sort_order: 'asc',
          with_text: true,
          with_value: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getUser', async () => {
    const responsePromise = client.user.getUser('injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getUser: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.getUser(
        'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
        {
          with_percent: true,
          with_text: true,
          with_value: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NeptuneAPIV2.NotFoundError);
  });
});
