import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  getUSCategories(state){
    return this.http.get<{ID: number}[]>("https://cors-anywhere-mxplayground.herokuapp.com/https://www.ngccoin.com/registry/competitive/data/" + state+ "/categories/");
  }
  constructor(
    private http: HttpClient
  ) { }
}
