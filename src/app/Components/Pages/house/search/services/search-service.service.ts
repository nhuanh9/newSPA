import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../../../../../model/House';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  API_URL = 'https://spa-hometay.herokuapp.com/host';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<House[]> {
    return this.http.get<House[]>(this.API_URL);
  }

  create(house): Observable<House> {
    return this.http.post<House>(this.API_URL, house);
  }

  detail(id: string): Observable<House> {
    return this.http.get<House>(this.API_URL + `/${id}`);
  }

  edit(house: House, id: string): Observable<House> {
    return this.http.put<House>(this.API_URL + `/${id}`, house);
  }

  delete(id: string): Observable<House> {
    return this.http.delete<House>(this.API_URL + `/${id}`);
  }
}
