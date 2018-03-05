import { TestBed, async } from '@angular/core/testing';
import { MatToolbarModule,
  MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { CurrentWeatherComponent } from './weather.component';
import { CurrentWeatherService } from './weather.service';
import { HttpModule }    from '@angular/http';

describe('WeatherComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [CurrentWeatherService],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatRadioModule,
        MatSelectModule,
        MatToolbarModule,
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
  it(`should have as title 'Weather Man'`, async(() => {
    const fixture = TestBed.createComponent(CurrentWeatherComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Weather Man');
  }));
  
});
