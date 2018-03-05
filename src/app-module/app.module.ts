import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';

import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current/weather.component';
import { CurrentWeatherService }  from './current/weather.service';
import { ForecastWeatherComponent } from './forecast/weather.component';
import { ForecastWeatherService }  from './forecast/weather.service';

import { AppRoutingModule } from './app-routing.module';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class CustomMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastWeatherComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FusionChartsModule
  ],
  providers: [CurrentWeatherService,ForecastWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
