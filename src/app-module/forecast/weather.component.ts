import { Component } from '@angular/core';
import { ForecastWeatherService } from '../forecast/weather.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'weather.component.html',
  styleUrls: ['../../styles/weather.component.css']
})

export class ForecastWeatherComponent {
  title = 'Weather Man';
  location : String;
  weatherData : any;
  hasWeatherData : boolean = false;
  isCityNameSelected = false;
  isZipCodeSelected = false;
  isShowSearchButton = false;
  
  searchTypes = ['CityName','ZIPCode'];
  selectedType: string;
  locationFormControl : any;
  weatherForecastData : any = [];

  //chart
  id = 'weatherchart';
  width = 600;
  height = 400;
  type = 'line'; //column2d/bar2d/line
  dataFormat = 'json';
  dataSource : any = {};

  constructor(private weatherService: ForecastWeatherService) {
     this.locationFormControl = new FormControl('', [
        Validators.required
      ]);
  }    
  
  onChangeType(type : any){
    this.selectedType = type;
    this.isShowSearchButton = true;
    this.location = "";
    this.hasWeatherData = false; 

    if(type == 'CityName')
    {
      this.isCityNameSelected = true;
      this.isZipCodeSelected = false;
    }
    else if(type == 'ZIPCode')
    {
      this.isCityNameSelected = false;
      this.isZipCodeSelected = true;
    }
  }
   
  getWeatherForecast() : any {
    if(this.location != ""){
      this.hasWeatherData = false;
      this.weatherService.getWeatherForecast(this.location, this.selectedType)
                        .then(data => this.getWeatherForecastData(data)); 
    }
  }

  getWeatherForecastData(data: any) :any{         
    this.weatherForecastData = data; 
    this.hasWeatherData = true;

    let chartInfo : any = {};
    chartInfo["caption"] = "Weather Forecast";
    chartInfo["subCaption"] = "For location: " + this.location;
    chartInfo["numberprefix"] = "";
    chartInfo["xAxisName"] = "Date";
    chartInfo["yAxisName"] = "Temp (in °C)";
    chartInfo["yAxisMinValue"] = "0";
    chartInfo["yAxisMaxValue"] = "30";
    chartInfo["theme"] = "fint"; // ocean
        
    let chartData : any = [];
    this.weatherForecastData.list.forEach((item, index) => {
        if(index % 8 == 0)
        {
          let dataItem : any = {};
          dataItem["label"] = item.dt_txt.toString();
          dataItem["value"] = (item.main.temp-273).toFixed(2);        
          chartData.push(dataItem);
        }
    });

    this.dataSource["chart"] = chartInfo;
    this.dataSource["data"] = chartData;

  }
  
}


