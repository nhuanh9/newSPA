import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../../Services/house/house.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.scss']
})
export class CreateHouseComponent implements OnInit {

  constructor(private houseService: HouseService,
              private  router: Router) {
  }

  ngOnInit() {
  }

  createHouse(houseForm) {
    this.houseService.create(houseForm.value).subscribe(() => {
      console.log('Thêm thành công!');
      houseForm.resetForm();
      this.router.navigate(['/']);
    }, error1 => {
      console.log('Lỗi ' + error1);
    });
  }
}
