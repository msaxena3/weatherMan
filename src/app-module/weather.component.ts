import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  title = 'Weather Man';
  location : String;
  weatherData : any;
  hasWeatherData : boolean = false;
  isCityNameSelected = false;
  isCityIDSelected = false;
  isZipCodeSelected = false;
  isShowSearchButton = false;
  cities: any;
  selectedCity : string;

  searchTypes = ['CityName','ZIPCode'];
  selectedType: string;
  locationFormControl : any;
  isForecastRequired: boolean = false;
  weatherForecastData : any = [];

  //chart
  id = 'weatherchart';
  width = 600;
  height = 400;
  type = 'line'; //column2d/bar2d/line
  dataFormat = 'json';
  dataSource : any = {};

  constructor(private weatherService: WeatherService) {
    this.weatherService.getCityList()
                        .then(data => this.loadCityList(data));
  }    
  ngOnInit(): void {
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
      this.isCityIDSelected = false;
      this.isZipCodeSelected = false;
    }
    else if(type == 'CityID')
    {
      this.isCityNameSelected = false;
      this.isCityIDSelected = true;
      this.isZipCodeSelected = false;       
    }
    else if(type == 'ZIPCode')
    {
      this.isCityNameSelected = false;
      this.isCityIDSelected = false;
      this.isZipCodeSelected = true;
    }
  }
 
  getCurrentWeather() : any {
    this.hasWeatherData = false;
    this.isForecastRequired = false;
    this.weatherService.getCurrentWeather(this.location, this.selectedType)
                        .then(data => this.getCurrentWeatherData(data)); 
    
  }
  getWeatherForecast() : any {
    this.hasWeatherData = false;
    this.isForecastRequired = false;
    this.weatherService.getWeatherForecast(this.location, this.selectedType)
                        .then(data => this.getWeatherForecastData(data)); 
    
  }

  getCurrentWeatherData(data: any) :any{         
    if(this.selectedType == 'CityName' || this.selectedType == 'CityID')
    {
      this.weatherData = data.list[0];      
    }        
    else if(this.selectedType == 'ZIPCode')
    {
      this.weatherData = data;
    }   
    this.hasWeatherData = true;
    this.isForecastRequired = false;
  }

  getWeatherForecastData(data: any) :any{         
    this.weatherForecastData = data; 
    this.hasWeatherData = true;
    this.isForecastRequired = true;

    let chartInfo : any = {};
    chartInfo["caption"] = "Weather Forecast";
    chartInfo["subCaption"] = "For location: " + this.location;
    chartInfo["numberprefix"] = "$";
    chartInfo["xAxisName"] = "Date";
    chartInfo["yAxisName"] = "Temp (in °F)";
    chartInfo["yAxisMinValue"] = "270";
    chartInfo["yAxisMaxValue"] = "290";
    chartInfo["theme"] = "fint"; // ocean
        
    let chartData : any = [];
    this.weatherForecastData.list.forEach((item, index) => {
        if(index % 8 == 0)
        {
          let dataItem : any = {};
          dataItem["label"] = item.dt_txt.toString();
          dataItem["value"] = item.main.temp;        
          chartData.push(dataItem);
        }
    });

    this.dataSource["chart"] = chartInfo;
    this.dataSource["data"] = chartData;

  }

  loadCityList(data: any) :any{
      this.cities = data;          
  } 
  
}


