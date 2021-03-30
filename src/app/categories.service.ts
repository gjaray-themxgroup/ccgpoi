import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  getCategories(state){
    return this.http.get<{ID: number}[]>("https://cors-anywhere-mxplayground.herokuapp.com/https://www.ngccoin.com/registry/competitive/data/" + state+ "/categories/");
  }
  getCountries(){
    return this.http.get<Country[]>('/assets/countries.json');
  }
  constructor(
    private http: HttpClient
  ) { }
}
