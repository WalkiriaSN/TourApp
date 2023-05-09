import { Injectable } from '@angular/core';
import { Iweather } from '../interfaces/iweather';
import { cityWeather } from 'cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  weather:Iweather[]= cityWeather;

  constructor() { }
}


