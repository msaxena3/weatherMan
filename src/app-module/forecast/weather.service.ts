import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ForecastWeatherService {

  private appID = "b6907d289e10d714a6e88b30761fae22";
  private baseURLForCity = "http://samples.openweathermap.org/data/2.5/forecast";
  private baseURLForZIPCode = "http://samples.openweathermap.org/data/2.5/forecast";

  constructor(private http: Http) { 

  }
  
  getWeatherForecast(location: String, type: String): Promise<any> {
      let apiURL = "";
      if(type == 'CityName')
        apiURL = this.baseURLForCity + '?appid='+ this.appID +'&q=' + location;
      else if(type == 'ZIPCode')
        apiURL = this. baseURLForZIPCode + '?appid='+ this.appID +'&zip=' + location+",us";
            
      return this.http.get(apiURL)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}