import { Component } from '@angular/core';
import { CurrentWeatherService } from '../current/weather.service';
import {FormControl, Validators} from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'weather.component.html',
  styleUrls: ['../current/weather.component.css']
})

export class CurrentWeatherComponent {
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

  constructor(private weatherService: CurrentWeatherService) {
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
 
  getCurrentWeather() : any {
    if(this.location != ""){
        this.hasWeatherData = false;
        this.weatherService.getCurrentWeather(this.location, this.selectedType)
                            .then(data => this.getCurrentWeatherData(data));
    }
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
  }
  
}


