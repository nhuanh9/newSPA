import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HouseS} from '../data/house.data';

@Injectable()
export class HouseService {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();

  constructor() {
  }

  fetchHouses(): Observable<any> {
    return of(HouseS);
  }
}
