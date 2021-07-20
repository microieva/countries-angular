import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {

  constructor( private countryService: CountryService ) { }
  @Input() countries: Country[] = []
  
  

  ngOnInit() {
    this.getCountries()
  }

  getCountries () : void {
    this.countryService.getCountries()
     .subscribe(countries => {
        this.countries = countries; 
        console.log("COUNTRIES: ", this.countries)
      });
  }
}
