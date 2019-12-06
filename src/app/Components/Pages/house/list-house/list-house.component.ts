import {Component, OnInit} from '@angular/core';
import {House} from '../../../../model/House';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.scss']
})
export class ListHouseComponent implements OnInit {
  listHouse: House[];

  constructor() {
  }

  ngOnInit() {
  }

}
