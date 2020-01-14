import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryHouse} from '../model/categoryHouse';
import {CategoryRoom} from '../model/categoryRoom';

@Injectable({
  providedIn: 'root'
})
export class CategoryRoomService {
  API_URL = 'http://localhost:8000/categoryRoom';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<CategoryRoom[]> {
    return this.http.get<CategoryRoom[]>(this.API_URL);
  }
}
