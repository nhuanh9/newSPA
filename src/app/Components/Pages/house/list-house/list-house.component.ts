import {Component, OnInit} from '@angular/core';
import {House} from '../../../../model/House';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.scss']
})
export class ListHouseComponent implements OnInit {
  listHouse: number[];

  constructor() {
    this.listHouse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  ngOnInit() {
  }

}
