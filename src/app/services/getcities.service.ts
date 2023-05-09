import { Injectable } from '@angular/core';
import { Icities } from '../interfaces/icities';
import { cityInfo } from 'cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {

cities:Icities[]= cityInfo;

  constructor() { }
}
