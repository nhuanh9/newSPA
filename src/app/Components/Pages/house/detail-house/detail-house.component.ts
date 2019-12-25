import {Component, OnInit} from '@angular/core';
import {House} from '../../../../model/House';
import {Subscription} from 'rxjs';
import {HouseService} from '../../../../Services/house.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.scss']
})
export class DetailHouseComponent implements OnInit {

  house: House;
  sub: Subscription;

  constructor(private houseService: HouseService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.houseService.detail(id).subscribe(next => {
        this.house = next;
      }, error1 => {
        console.log(error1);
      });
    });
  }

  bookHouse() {
    this.house.statusHouse = !this.house.statusHouse;
    this.houseService.edit(this.house, this.house.id).subscribe(() => {
      console.log('Edit Thành công!');
    }, error1 => {
      console.log('Lỗi ' + error1);
    });
  }
}
