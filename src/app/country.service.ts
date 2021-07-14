import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Country } from './country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient,
    
  ) { }
  private countriesUrl = "https://restcountries.eu/rest/v2/all"
  

  getCountries(): Observable<Country[]> {
    const countries = this.http.get<Country[]>(this.countriesUrl)
      .pipe(
        //tap(_=> this.log('fetched countries')),
        //catchError(this.handleError<Country[]>('getCountries', []))
      )
    return countries
  }

  getCountry(name: string | null): Observable<Country> {
    const url = `${this.countriesUrl}/${name}`;
    const country = this.http.get<Country>(url)
    return country 
  }

  // getCountry(name: string | null): Observable<Country> {
    
  //   const country = this.countries.find(c => c.name === name)!;
  //   return of(country);
  // }
  
}
