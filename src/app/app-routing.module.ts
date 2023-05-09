import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'tech-ideas', component: TechIdeasComponent},
  {path:"weather/:name/:springM/:springN/:summerM/:summerN/:fallM/:fallN/:winterM/:winterN/:visitFrom/:visitTo", component: WeatherDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
