import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  _id: string;
  _rev: string;
  categories: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private dataURL = 'https://butler.cloudant.com/pwa/pwa';
  constructor(private httpClient: HttpClient) {}
  fetch(): Observable<Category> {
    return <Observable<Category>>this.httpClient.get(this.dataURL);
  }
}
