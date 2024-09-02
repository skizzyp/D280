import { Component, OnInit } from '@angular/core';
import {WorldComponent} from "../world/world.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService} from "./api.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ WorldComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data: any;
  variable: any;
//inject ApiService to feed country information
  constructor(private apiService: ApiService) {
  }
  countryName: string = '';
  capCity: string = '';
  region: string = '';
  longitude: string = '';
  latitude: string = '';
  income: string = '';
  ngOnInit(): void {
    let countryCode = '';
//api service returns variable declared from click in world.component
    this.apiService.variable$.subscribe(value => {
      this.variable = value
      countryCode = this.variable



//api service used to return country specific information based on click country
      this.apiService.getData(countryCode).subscribe(response => {
        let pulledInfo: {adminregion: object, capitalCity: string, id: string, incomeLevel: {id: string, iso2code: string, value: string}, iso2Code: string, latitude: string, lendingType: object, longitude: string, name: string, region: {id: string, iso2code: string, value: string}} = (response[1])[0];
        this.countryName = pulledInfo.name
        this.capCity = pulledInfo.capitalCity
        this.region = pulledInfo.region.value
        this.longitude = pulledInfo.longitude
        this.latitude = pulledInfo.latitude
        this.income = pulledInfo.incomeLevel.value
    })
    });
  }
}
