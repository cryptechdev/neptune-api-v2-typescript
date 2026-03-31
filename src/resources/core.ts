// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Core extends APIResource {}

export interface ErrorData {
  /**
   * General error category
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

export type ErrorDataVariants = ValidationErrorData | ErrorData;

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
  | 'internal';

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

export interface ValidationErrorData {
  /**
   * Field names/paths that failed validation and their associated error messages
   */
  fields: Array<FieldValidationError>;

  /**
   * General error category
   *
   * Useful to match against for clients that require custom logic depending on the
   * type of error encountered
   */
  kind: 'validation';

  /**
   * Error description
   */
  message: string;

  /**
   * The region of the request where the validation failure(s) occurred
   */
  origin: ValidationFieldSource;

  /**
   * The scope/region of the error.
   *
   * Clients may use this to determine how to handle an error message (e.g. log it to
   * console or display it to the user).
   */
  scope: ErrorScope;
}

/**
 * The region of the request where the validation failure(s) occurred
 */
export type ValidationFieldSource = 'header' | 'query' | 'path' | 'body';

export declare namespace Core {
  export {
    type ErrorData as ErrorData,
    type ErrorDataVariants as ErrorDataVariants,
    type ErrorKind as ErrorKind,
    type ErrorScope as ErrorScope,
    type FieldValidationError as FieldValidationError,
    type Interval as Interval,
    type IntervalUnit as IntervalUnit,
    type ValidationErrorData as ValidationErrorData,
    type ValidationFieldSource as ValidationFieldSource,
  };
}
