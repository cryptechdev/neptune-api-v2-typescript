// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Core extends APIResource {}

/**
 * Interval period & size
 */
export interface Interval {
  unit: IntervalUnit;

  value: number;
}

export type IntervalUnit = 'h' | 'd' | 'w' | 'm' | 'y';

export declare namespace Core {
  export { type Interval as Interval, type IntervalUnit as IntervalUnit };
}
