// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Core extends APIResource {}

export interface ErrorData {
  /**
   * Error category
   *
   * Useful to match against for clients that require custom logic depending on the
   * type of error encountered
   */
  kind: ErrorKind;

  /**
   * Error description
   */
  message: string;

  /**
   * The scope/region of the error.
   *
   * Clients may use this to determine how to handle an error message (e.g. log it to
   * console or display it to the user).
   */
  scope: ErrorScope;
}

export type ErrorDataVariants = ErrorData | ValidationErrorData;

/**
 * - `entity_not_found` - Route matched, but the requested entity does not exist or
 *   could not be found
 * - `path_invalid` - Invalid path parameter
 * - `path_unknown` - Path 404s for accept json responses
 * - `path_parameter_invalid` - Invalid path parameter
 * - `query_invalid` - Invalid query parameter
 * - `query_parameter_invalid` - Query parameter was invalid (incorrect type,
 *   unknown enum value, etc)
 * - `query_parameter_unknown` - Unrecognized query parameter
 * - `query_parameter_missing` - A required query Parameter was not included or was
 *   empty
 * - `json_invalid` - Invalid json body
 * - `json_decode` - JSON body decode
 * - `json_body_deserialize_failure` - JSON body deserialization
 * - `content_type_unsupported` - Invalid Accept header in request
 * - `validation` - Validation error
 * - `internal` - Internal API server errors (5xx)
 */
export type ErrorKind =
  | 'entity_not_found'
  | 'path_invalid'
  | 'path_unknown'
  | 'path_parameter_invalid'
  | 'query_invalid'
  | 'query_parameter_invalid'
  | 'query_parameter_unknown'
  | 'query_parameter_missing'
  | 'json_invalid'
  | 'json_decode'
  | 'json_body_deserialize_failure'
  | 'content_type_unsupported'
  | 'validation'
  | 'internal';

/**
 * Error response for object data types
 */
export type ErrorResponseVariants = ObjErrorResponse | ListErrorResponse;

export type ErrorScope = 'user' | 'client' | 'server';

export interface FieldValidationError {
  /**
   * The name of the field which caused the error(s).
   */
  field: string;

  /**
   * One or more error messages
   */
  messages: Array<string>;
}

/**
 * Interval period & size
 */
export interface Interval {
  unit: IntervalUnit;

  value: number;
}

export type IntervalUnit = 'h' | 'd' | 'w' | 'm' | 'y';

/**
 * Error response for list data types
 */
export interface ListErrorResponse {
  /**
   * The `count` key is still present when encountering an error from a list
   * endpoint.
   *
   * It is guarnateed to be `null` for errors.
   */
  count: null;

  /**
   * While the `data` key does still exist in error responses, it is guaranteed to be
   * `null`.
   */
  data: null;

  /**
   * Error information. Always set for unsuccessful responses
   */
  error: ErrorDataVariants;

  /**
   * HTTP status. Successful responses are guaranteed to be < `400`. Conversely,
   * error responses are guaranteed to be >= `400`.
   */
  status: number;

  /**
   * HTTP status text
   */
  status_text: string;
}

/**
 * Error response for object data types
 */
export interface ObjErrorResponse {
  /**
   * While the `data` key does still exist in error responses, it is guaranteed to be
   * `null`.
   */
  data: null;

  /**
   * Error information. Always set for unsuccessful responses
   */
  error: ErrorDataVariants;

  /**
   * HTTP status. Successful responses are guaranteed to be < `400`. Conversely,
   * error responses are guaranteed to be >= `400`.
   */
  status: number;

  /**
   * HTTP status text
   */
  status_text: string;
}

export interface ValidationErrorData {
  fields: Array<FieldValidationError>;

  /**
   * Error category
   *
   * Useful to match against for clients that require custom logic depending on the
   * type of error encountered
   */
  kind: ErrorKind;

  /**
   * Error description
   */
  message: string;

  origin: ValidationFieldSource | null;

  /**
   * The scope/region of the error.
   *
   * Clients may use this to determine how to handle an error message (e.g. log it to
   * console or display it to the user).
   */
  scope: ErrorScope;
}

export type ValidationFieldSource = 'header' | 'query' | 'path' | 'body';

export declare namespace Core {
  export {
    type ErrorData as ErrorData,
    type ErrorDataVariants as ErrorDataVariants,
    type ErrorKind as ErrorKind,
    type ErrorResponseVariants as ErrorResponseVariants,
    type ErrorScope as ErrorScope,
    type FieldValidationError as FieldValidationError,
    type Interval as Interval,
    type IntervalUnit as IntervalUnit,
    type ListErrorResponse as ListErrorResponse,
    type ObjErrorResponse as ObjErrorResponse,
    type ValidationErrorData as ValidationErrorData,
    type ValidationFieldSource as ValidationFieldSource,
  };
}
