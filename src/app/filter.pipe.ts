import { Pipe, PipeTransform } from '@angular/core';

import { Country } from './country';

@Pipe({ name: 'countryFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {Country[]} countries
   * @param {string} searchText
   * @returns {Country[]}
   */
  transform(countries: Country[], searchText: string): any[] {
    if (!countries) {
      return [];
    }
    if (!searchText) {
      return countries;
    }
    searchText = searchText.toLocaleLowerCase();

    return countries.filter(country => {
      return country.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
