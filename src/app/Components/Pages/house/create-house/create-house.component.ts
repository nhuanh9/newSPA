import { Component, OnInit } from '@angular/core';
import {HouseService} from '../../../../Services/house/house.service';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.scss']
})
export class CreateHouseComponent implements OnInit {

  constructor(private houseService: HouseService) { }

  ngOnInit() {
  }

  createHouse(houseForm) {
    this.houseService.create(houseForm.value).subscribe(() => {
      console.log('Thêm thành công!');
      houseForm.resetForm();
    }, error1 => {
      console.log('Lỗi ' + error1);
    });
  }
}
