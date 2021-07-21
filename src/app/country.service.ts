import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, first, map, tap, take } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Country } from './country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  country?: Country[]
  constructor(
    private http: HttpClient,
    
  ) { }

  private countriesUrl = "https://restcountries.eu/rest/v2"

  getCountries() : Observable<Country[]> {
    const url = `${this.countriesUrl}/all`
    return this.http.get<Country[]>(url)
   
  }

  getCountry(name: string | null) : Observable<Country[]>{
    // const url = `${this.countriesUrl}/name/${name}?fields=name;population;`;
    const url = `${this.countriesUrl}/name/${name}`;
    return this.http.get<Country[]>(url)
     
  }

  /* GET countries whose name contains search term */
  searchCountries(term: string): Observable<Country[]> {
    if (!term.trim()) {
      // if not search term, return empty countries array.
      return of([]);
    }
    return this.http.get<Country[]>(`${this.countriesUrl}/name/${term}`).pipe(
      // tap(x => x.length ?
      //    this.log(`found countries matching "${term}"`) :
      //    this.log(`no countries matching "${term}"`)),
      catchError(this.handleError<Country[]>('searchCountries', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any) : Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

     
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
function find(arg0: (c: any) => boolean): import("rxjs").OperatorFunction<Country[], unknown> {
  throw new Error('Function not implemented.');
}

