// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NeptuneAPIV2 from '@neptunefinance/api-v2';

const client = new NeptuneAPIV2({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource routes', () => {
  // Mock server tests are disabled
  test.skip('listAll: only required params', async () => {
    const responsePromise = client.swap.routes.listAll({
      contract_address: 'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
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
  test.skip('listAll: required and optional params', async () => {
    const response = await client.swap.routes.listAll({
      contract_address: 'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
    });
  });

  // Mock server tests are disabled
  test.skip('listByDenom: only required params', async () => {
    const responsePromise = client.swap.routes.listByDenom({
      contract_address: 'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
      source_denom: 'source_denom',
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
  test.skip('listByDenom: required and optional params', async () => {
    const response = await client.swap.routes.listByDenom({
      contract_address: 'injvalcons1a03k0ztfyjnd70apawva003pkh0adqmau0a9q0',
      source_denom: 'source_denom',
    });
  });
});
