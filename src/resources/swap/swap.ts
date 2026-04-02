// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RoutesAPI from './routes';
import {
  RouteListAllParams,
  RouteListAllResponse,
  RouteListByDenomParams,
  RouteListByDenomResponse,
  Routes,
  SwapRouteTargetSet,
} from './routes';

export class Swap extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
}

Swap.Routes = Routes;

export declare namespace Swap {
  export {
    Routes as Routes,
    type SwapRouteTargetSet as SwapRouteTargetSet,
    type RouteListAllResponse as RouteListAllResponse,
    type RouteListByDenomResponse as RouteListByDenomResponse,
    type RouteListAllParams as RouteListAllParams,
    type RouteListByDenomParams as RouteListByDenomParams,
  };
}
