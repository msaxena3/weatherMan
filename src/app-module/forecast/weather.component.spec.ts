import { TestBed, async } from '@angular/core/testing';
import { MatToolbarModule,
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
  MatSelectModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { CurrentWeatherComponent } from './current/weather.component';
import { CurrenWeatherService } from './current/weather.service';
import { HttpModule }    from '@angular/http';

describe('WeatherComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrenWeatherComponent],
      providers: [CurrenWeatherService],
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
  // it(`should have as title 'Weather Man'`, async(() => {
  //   const fixture = TestBed.createComponent(WeatherComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Weather Man');
  // }));
  
});
