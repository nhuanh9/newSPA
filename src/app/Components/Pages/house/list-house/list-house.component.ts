import {Component, OnInit} from '@angular/core';
import {House} from '../../../../model/House';
import {HouseService} from '../../../../Services/house/house.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.scss']
})
export class ListHouseComponent implements OnInit {
  listHouse: House[];

  constructor(private houseService: HouseService) {
  }

  ngOnInit() {
    this.houseService.getList().subscribe(result => {
      this.listHouse = result;
    });
  }

}
