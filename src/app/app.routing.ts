import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  { path: '1', component: MovieListComponent },
  { path: '1/:id', component: MovieDetailComponent },
  { path: '', component: CategoryListComponent}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
