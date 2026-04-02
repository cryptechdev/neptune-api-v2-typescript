// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { NeptuneAPIV2Error } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type NeptuneAPIV2 } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: NeptuneAPIV2;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: NeptuneAPIV2, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new NeptuneAPIV2Error(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: NeptuneAPIV2,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface TxHistoryPageResponse<Item> {
  data: Array<Item>;
}

export interface TxHistoryPageParams {
  prev_event_uuid?: string;
}

export class TxHistoryPage<Item extends { event_uuid: string }>
  extends AbstractPage<Item>
  implements TxHistoryPageResponse<Item>
{
  data: Array<Item>;

  constructor(
    client: NeptuneAPIV2,
    response: Response,
    body: TxHistoryPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const data = this.getPaginatedItems();
    const eventUuid = data[data.length - 1]?.event_uuid;
    if (!eventUuid) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        prev_event_uuid: eventUuid,
      },
    };
  }
}

export interface IntervalMultiPageResponse<Item> {
  data: IntervalMultiPageResponse.Data<Item>;
}

export namespace IntervalMultiPageResponse {
  export interface Data<Item> {
    pagination?: Data.Pagination;

    series?: Array<Item>;
  }

  export namespace Data {
    export interface Pagination {
      interval_count?: number;

      next_offset?: number;
    }
  }
}

export interface IntervalMultiPageParams {
  /**
   * The number of intervals to skip.
   */
  offset?: number;

  /**
   * The maximum number of intervals to fetch.
   */
  limit?: number;
}

export class IntervalMultiPage<Item> extends AbstractPage<Item> implements IntervalMultiPageResponse<Item> {
  data: IntervalMultiPageResponse.Data<Item>;

  constructor(
    client: NeptuneAPIV2,
    response: Response,
    body: IntervalMultiPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || {};
  }

  getPaginatedItems(): Item[] {
    return this.data?.series ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const offset = this.data?.pagination?.next_offset ?? 0;
    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    const totalCount = this.data?.pagination?.interval_count;
    if (!totalCount) {
      return null;
    }

    if (currentCount < totalCount) {
      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          offset: currentCount,
        },
      };
    }

    return null;
  }
}

export interface IntervalSinglePageResponse<Item> {
  data: IntervalSinglePageResponse.Data<Item>;
}

export namespace IntervalSinglePageResponse {
  export interface Data<Item> {
    pagination?: Data.Pagination;

    points?: Array<Item>;
  }

  export namespace Data {
    export interface Pagination {
      interval_count?: number;

      next_offset?: number;
    }
  }
}

export interface IntervalSinglePageParams {
  /**
   * The number of intervals to skip.
   */
  offset?: number;

  /**
   * The maximum number of intervals to fetch.
   */
  limit?: number;
}

export class IntervalSinglePage<Item> extends AbstractPage<Item> implements IntervalSinglePageResponse<Item> {
  data: IntervalSinglePageResponse.Data<Item>;

  constructor(
    client: NeptuneAPIV2,
    response: Response,
    body: IntervalSinglePageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || {};
  }

  getPaginatedItems(): Item[] {
    return this.data?.points ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const offset = this.data?.pagination?.next_offset ?? 0;
    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    const totalCount = this.data?.pagination?.interval_count;
    if (!totalCount) {
      return null;
    }

    if (currentCount < totalCount) {
      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          offset: currentCount,
        },
      };
    }

    return null;
  }
}
