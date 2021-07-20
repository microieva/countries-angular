import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Country } from './country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  //countries: Country[]=[];
  //country: Country;

  constructor(
    private http: HttpClient,
    
  ) { }

  private countriesUrl = "https://restcountries.eu/rest/v2"

  getCountries():Observable<Country[]> {
    const url = `${this.countriesUrl}/all`
    return this.http.get<Country[]>(url)
   
  }

  getCountry(name: string | null): Observable<Country> {
    const url = `${this.countriesUrl}/name/${name}`;
    return this.http.get<Country>(url)

  }
  
}
