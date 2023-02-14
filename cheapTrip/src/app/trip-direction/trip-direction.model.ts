import { SafeHtml } from '@angular/platform-browser';

export interface IPoints {
  startPoint: string;
  endPoint: string;
}

enum PointType {
  START = 'startPoint',
  END = 'endPoint',
}

export enum Modes {
  SEARCH,
  DELIVERY,
}

export  type Server = 'server68'| 'server104';


export interface IPoint {
  name: string;
  type: 'from' | 'to';
}

export interface IRout {
  euro_price: number;
  duration_minutes: string;
  transportation_type: string;
  from: string;
  to: string;
}

export interface IDetails {
  euro_price: number;
  duration_minutes: string;
  direct_paths: IRout[];
  points: Set<string>;
  transport: SafeHtml[];
}

export interface IRecievedRouts{
  routeType: string;
  euro_price: number;
  duration_minutes: number;
  direct_paths: IRout[];

}

export interface IPath {
  pathType: string;
  details: IDetails;
}

export interface IPathPoint {
  id: number;
  name: string;
  country: string;
}
