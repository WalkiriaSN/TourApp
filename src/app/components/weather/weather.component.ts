import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iweather } from 'src/app/interfaces/iweather';
import { GetWeatherService } from 'src/app/services/getweather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  weather: Iweather[];

  constructor(private weatherService: GetWeatherService, private activatedRoute:ActivatedRoute) {
    this.weather = this.weatherService.weather;
  }

}


