import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Country } from './country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries: Country[]=[];
  constructor(
    private http: HttpClient,
    
  ) { }
  private countriesUrl = "https://restcountries.eu/rest/v2/all"
  

  getCountries():Observable<Country[]> {

    return this.http.get<Country[]>(this.countriesUrl)
    // .subscribe(data => {
    //     this.countries = data;
    //      console.log("data:", data)
    //      console.log("countries: ", this.countries)
    // })
    //console.log("countries: ", this.countries)
    //return of(this.countries)

  }
    

  // getCountry(name: string | null): Observable<Country> {
  //   const url = `${this.countriesUrl}/${name}`;
  //   const country = this.http.get<Country>(url)
  //   console.log("country: ", country)
  //   return country 
  //}

  getCountry(name: string | null): Observable<Country> {
    const country = this.countries.find(c => c.name === name)!;
    console.log("country: ", country)
    return of(country);
  }
  
}
