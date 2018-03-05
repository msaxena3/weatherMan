import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current/weather.component';
import { ForecastWeatherComponent } from './forecast/weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/current', pathMatch: 'full' },
  { path: 'current',     component: CurrentWeatherComponent },
  { path: 'forecast',     component: ForecastWeatherComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
