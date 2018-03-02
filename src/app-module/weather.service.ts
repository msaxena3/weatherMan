import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';

@Injectable()
export class WeatherService {

  private headers = new Headers({'Content-Encoding': 'gzip'});
  constructor(private http: Http) { 

  }

  getCurrentWeather(location: String, type: String): Promise<any> {
      var apiUrl = 'http://samples.openweathermap.org/data/2.5/weather?appid=5480f17a717424388c3b17948e5180d6&q=' + location;
      
      if(type == 'CityName')
      {
        apiUrl = 'http://samples.openweathermap.org/data/2.5/find?appid=5480f17a717424388c3b17948e5180d6&q=' + location;
      }
      else if(type == 'CityID')
      {
        apiUrl = 'http://samples.openweathermap.org/data/2.5/find?appid=5480f17a717424388c3b17948e5180d6&q=' + location;
      }
      else if(type == 'ZIPCode')
      {
        apiUrl = 'http://samples.openweathermap.org/data/2.5/weather?appid=5480f17a717424388c3b17948e5180d6&zip=' + location+",us";
      }
            
      return this.http.get(apiUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getWeatherForecast(location: String, type: String): Promise<any> {
      var apiUrl = 'http://samples.openweathermap.org/data/2.5/forecast?appid=5480f17a717424388c3b17948e5180d6&q=' + location;
      
      if(type == 'CityName')
      {
        apiUrl = 'http://samples.openweathermap.org/data/2.5/forecast?appid=5480f17a717424388c3b17948e5180d6&q=' + location;
      }
      else if(type == 'CityID')
      {
        apiUrl = 'http://samples.openweathermap.org/data/2.5/forecast?appid=5480f17a717424388c3b17948e5180d6&id=' + location;
      }
      else if(type == 'ZIPCode')
      {
        apiUrl = 'http://samples.openweathermap.org/data/2.5/forecast?appid=5480f17a717424388c3b17948e5180d6&zip=' + location+",us";
      }
            
      return this.http.get(apiUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getCityList(): Promise<any> {
      var apiUrl = '../assets/city.list.json';
      return this.http.get(apiUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}