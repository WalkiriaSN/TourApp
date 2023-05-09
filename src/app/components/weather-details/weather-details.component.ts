import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})

export class WeatherDetailsComponent {

  name = this.routeService.snapshot.paramMap.get('name');

  springM = this.routeService.snapshot.paramMap.get('springM');
  springN = this.routeService.snapshot.paramMap.get('springN');
  summerM = this.routeService.snapshot.paramMap.get('summerM');
  summerN = this.routeService.snapshot.paramMap.get('summerN');
  fallM = this.routeService.snapshot.paramMap.get('fallM');
  fallN = this.routeService.snapshot.paramMap.get('fallN');
  winterM = this.routeService.snapshot.paramMap.get('winterM');
  winterN = this.routeService.snapshot.paramMap.get('winterN');
  visitFrom = this.routeService.snapshot.paramMap.get('visitFrom');
  visitTo = this.routeService.snapshot.paramMap.get('visitTo');

  constructor(private routeService: ActivatedRoute) { 

  }


}


