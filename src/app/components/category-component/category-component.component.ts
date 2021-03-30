import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
import { CategoriesService } from '../../categories.service';
@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent implements OnInit {
  @Input() rendering: ComponentRendering;
  categories;
  constructor(
    private catService: CategoriesService
  ) { 
  }

  ngOnInit() {
    this.categories = this.catService.getUSCategories(this.rendering.fields.state.value)
  }
}
