import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
import { CategoriesService } from '../../categories.service';

@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.css']
})
export class CountryComponentComponent implements OnInit {
  @Input() rendering: ComponentRendering;
  countries;
  constructor(
    private catService: CategoriesService
  ) { }

  ngOnInit() {
    this.countries = this.catService.getCountries();
  }
}
