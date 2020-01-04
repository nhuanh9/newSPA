import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../model/House';
import {UserHouse} from '../model/userHouse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserHouse[];

  getList() {
    return this.users;
  }

  createUser(user: UserHouse) {
    this.users.push(user);
  }

  detailUser(id: string): UserHouse {
    return this.users[id];
  }

  // API_URL = 'https://spa-homestay.herokuapp.com/host';
  //
  // constructor(private http: HttpClient) {
  // }
  //
  // getList(): Observable<UserHouse[]> {
  //   return this.http.get<UserHouse[]>(this.API_URL);
  // }
  //
  // create(user): Observable<UserHouse> {
  //   return this.http.post<UserHouse>(this.API_URL, user);
  // }
  //
  // detail(id: string): Observable<UserHouse> {
  //   return this.http.get<UserHouse>(this.API_URL + `/${id}`);
  // }
  //
  // edit(user: UserHouse, id: string): Observable<UserHouse> {
  //   return this.http.put<UserHouse>(this.API_URL + `/${id}`, user);
  // }
  //
  // delete(id: string): Observable<UserHouse> {
  //   return this.http.delete<UserHouse>(this.API_URL + `/${id}`);
  // }

}
