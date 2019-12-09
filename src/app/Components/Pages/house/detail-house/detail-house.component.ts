import {Component, OnInit} from '@angular/core';
import {House} from '../../../../model/House';
import {Subscription} from 'rxjs';
import {HouseService} from '../../../../Services/house/house.service';
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

}
