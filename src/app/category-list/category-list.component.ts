import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Category } from '../api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Array<Category>;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.apiService.getCategories().subscribe(
      (data) => {
        console.log(data);
        this.categories = data.categories;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
