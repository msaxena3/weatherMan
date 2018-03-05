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
import { CurrentWeatherComponent } from '../current/weather.component';
import { CurrentWeatherService } from '../current/weather.service';
import { HttpModule } from '@angular/http';

describe('ForecastWeatherComponent', () => {
  const weatherCurrentDataMock = require('../../assets/mock/mock-weather-current-data.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [CurrentWeatherService],
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
    const fixture = TestBed.createComponent(CurrentWeatherComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CurrentWeatherComponent);
    const type = 'CityName';
    fixture.debugElement.componentInstance.onChangeType(type);
    expect(fixture.debugElement.componentInstance.isCityNameSelected).toEqual(true);
    expect(fixture.debugElement.componentInstance.isZipCodeSelected).toEqual(false);
  }));

  it('should call onChangeType method', async(() => {
    const fixture = TestBed.createComponent(CurrentWeatherComponent);
    const type = 'ZIPCode';
    fixture.debugElement.componentInstance.onChangeType(type);
    expect(fixture.debugElement.componentInstance.isCityNameSelected).toEqual(false);
    expect(fixture.debugElement.componentInstance.isZipCodeSelected).toEqual(true);
  }));

  it('should invoke getCurrentWeather when selectedType is CityName',
    async(inject([CurrentWeatherService], (currentWeatherService) => {
      const fixture = TestBed.createComponent(CurrentWeatherComponent);
      fixture.debugElement.componentInstance.selectedType = 'CityName';
      spyOn(currentWeatherService, 'getCurrentWeather').and.callFake(function () {
        return {
          then: function (callback) { return callback(weatherCurrentDataMock); }
        };
      });

      fixture.componentInstance.getCurrentWeather();
      expect(currentWeatherService.getCurrentWeather).toHaveBeenCalled();
    }))
  );

  it('should invoke getCurrentWeather when selectedType is CityID',
  async(inject([CurrentWeatherService], (currentWeatherService) => {
    const fixture = TestBed.createComponent(CurrentWeatherComponent);
    fixture.debugElement.componentInstance.selectedType = 'CityID';
    spyOn(currentWeatherService, 'getCurrentWeather').and.callFake(function () {
      return {
        then: function (callback) { return callback(weatherCurrentDataMock); }
      };
    });

    fixture.componentInstance.getCurrentWeather();
    expect(currentWeatherService.getCurrentWeather).toHaveBeenCalled();
  }))
);

it('should invoke getCurrentWeather when selectedType is ZIPCode',
async(inject([CurrentWeatherService], (currentWeatherService) => {
  const fixture = TestBed.createComponent(CurrentWeatherComponent);
  fixture.debugElement.componentInstance.selectedType = 'ZIPCode';
  spyOn(currentWeatherService, 'getCurrentWeather').and.callFake(function () {
    return {
      then: function (callback) { return callback(weatherCurrentDataMock); }
    };
  });

  fixture.componentInstance.getCurrentWeather();
  expect(currentWeatherService.getCurrentWeather).toHaveBeenCalled();
}))
);
});
