import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  //@Input() country?: Country;
  country: Country | undefined;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCountry()
    
  // this.route.queryParams.subscribe(params => {
  //   this.name = params['name'];
  // });
}
  

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(name)
      .subscribe(country => this.country = country);  
  }

  goBack(): void {
    this.location.back();
 }

}
