import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../../model/House';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  API_URL = 'https://c0619g1-airbnb.herokuapp.com/house';
  constructor(private http: HttpClient) {
  }

  getList(): Observable<House[]> {
    return this.http.get<House[]>(this.API_URL);
  }
}
