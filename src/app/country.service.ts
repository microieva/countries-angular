import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Country } from './country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient,
    //private messageService: MessageService
    
  ) { }
  private countriesUrl = "https://restcountries.eu/rest/v2/all"

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
    
  }

  
}
