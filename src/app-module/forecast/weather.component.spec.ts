import { TestBed, async, inject } from '@angular/core/testing';
import {
  MatToolbarModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDividerModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { ForecastWeatherComponent } from '../forecast/weather.component';
import { ForecastWeatherService } from '../forecast/weather.service';
import { HttpModule } from '@angular/http';

describe('ForecastWeatherComponent', () => {
  const weatherForecastDataMock = require('../../assets/mock/mock-weather-forecast-data.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastWeatherComponent],
      providers: [ForecastWeatherService],
      imports: [
        MatToolbarModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDividerModule,
        MatGridListModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatRadioModule,
        MatSelectModule,
        FormsModule,
        HttpModule,
        FusionChartsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ForecastWeatherComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ForecastWeatherComponent);
    const type = 'CityName';
    fixture.debugElement.componentInstance.onChangeType(type);
    expect(fixture.debugElement.componentInstance.isCityNameSelected).toEqual(true);
    expect(fixture.debugElement.componentInstance.isZipCodeSelected).toEqual(false);
  }));

  it('should call onChangeType method', async(() => {
    const fixture = TestBed.createComponent(ForecastWeatherComponent);
    const type = 'ZIPCode';
    fixture.debugElement.componentInstance.onChangeType(type);
    expect(fixture.debugElement.componentInstance.isCityNameSelected).toEqual(false);
    expect(fixture.debugElement.componentInstance.isZipCodeSelected).toEqual(true);
  }));

  it('should invoke getWeatherForecast',
    async(inject([ForecastWeatherService], (forecastWeatherService) => {
      const fixture = TestBed.createComponent(ForecastWeatherComponent);

      spyOn(forecastWeatherService, 'getWeatherForecast').and.callFake(function () {
        return {
          then: function (callback) { return callback(weatherForecastDataMock); }
        };
      });

      fixture.componentInstance.getWeatherForecast();
      expect(forecastWeatherService.getWeatherForecast).toHaveBeenCalled();
    }))
  );
});
