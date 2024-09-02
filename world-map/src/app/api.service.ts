import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {}
//takes country code and returns information from worldbank api
  getData(countryCode: string): Observable<any> {
    const apiUrl = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;
    return this.http.get(apiUrl);



  }
  // behaviorSubject to monitor country clicked variable
  private variableSubject = new BehaviorSubject<string | null>(null);
  variable$ = this.variableSubject.asObservable();

  // Method to set the variable value
  setVariable(value: any): void {
    this.variableSubject.next(value);
  }
}

