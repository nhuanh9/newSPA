import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../../Services/house.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {AngularFireDatabase} from '@angular/fire/database';
import {House} from '../../../../model/House';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryHouse} from '../../../../model/categoryHouse';
import {CategoryRoom} from '../../../../model/categoryRoom';
import {CategoryHouseService} from '../../../../Services/category-house.service';
import {CategoryRoomService} from '../../../../Services/category-room.service';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.scss']
})
export class CreateHouseComponent implements OnInit {

  house: House;
  arrayPicture = '';
  createForm: FormGroup;
  listCategoryRoom: CategoryRoom[];
  listCategoryHouse: CategoryHouse[];

  constructor(private houseService: HouseService,
              private  router: Router,
              private db: AngularFireDatabase,
              private fb: FormBuilder,
              private categoryHouse: CategoryHouseService,
              private categoryRoom: CategoryRoomService,
  ) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      nameHouse: ['', [Validators.required]],
      categoryHouse: ['', [Validators.required]],
      categoryRoom: ['', [Validators.required]],
      address: ['', [Validators.required]],
      amountBathRoom: ['', [Validators.required]],
      amountBedRoom: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.categoryHouse.getList().subscribe(next => {
      this.listCategoryHouse = next;
    });
    this.categoryRoom.getList().subscribe(next => {
      this.listCategoryRoom = next;
    });
  }

  transferFormData() {
    this.house = {
      nameHouse: this.createForm.get('nameHouse').value,
      categoryHouse: this.createForm.get('categoryHouse').value,
      categoryRoom: this.createForm.get('categoryRoom').value,
      address: this.createForm.get('address').value,
      amountBathRoom: this.createForm.get('amountBathRoom').value,
      amountBedRoom: this.createForm.get('amountBedRoom').value,
      price: null,
      description: this.createForm.get('description').value,
      statusHouse: true,
      imageUrls: this.arrayPicture
    };
  }

  createHouse() {
    this.transferFormData();
    console.log(this.house);
    this.houseService.create(this.house).subscribe(() => {
      console.log('Thêm thành công!');
      this.router.navigate(['/']);
    }, error1 => {
      console.log('Lỗi ' + error1);
    });
  }

  saveImg(value) {
    const file = value.target.files;
    const metadata = {
      contentType: 'image/jpeg',
    };
    const uploadTask = firebase.storage().ref('img/' + Date.now()).put(file[0], metadata);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.arrayPicture += downloadURL + ' ';
          console.log(this.arrayPicture);
        });
      }
    );
  }
}
