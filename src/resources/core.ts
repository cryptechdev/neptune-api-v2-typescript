// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Core extends APIResource {}

export interface ErrorData {
  /**
   * List of names and error messages for invalid fields.
   *
   * Never NULL when `error.kind == 'validation'`. Always NULL for all other cases.
   */
  fields: Array<ErrorData.Field> | null;

  /**
   * Error kind/category
   *
   * Useful to match against for clients that require custom logic depending on the
   * type of error encountered
   */
  kind: 'invalid_request' | 'validation' | 'entity_not_found' | 'contract' | 'internal';

  /**
   * Error message
   */
  message: string;

  /**
   * The scope/region of the error.
   *
   * Clients may use this to determine how to handle an error message (e.g. log it to
   * console or display it to the user).
   */
  scope: 'user' | 'client' | 'server';
}

export namespace ErrorData {
  export interface Field {
    field: string;

    message: string;
  }
}

/**
 * Interval period & size
 */
export interface Interval {
  unit: IntervalUnit;

  value: number;
}

export type IntervalUnit = 'h' | 'd' | 'w' | 'm' | 'y';

export declare namespace Core {
  export { type ErrorData as ErrorData, type Interval as Interval, type IntervalUnit as IntervalUnit };
}
