import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {HouseService} from '../../services/house.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
      `
      .form-control {
        margin-bottom: 15px;
      }
    `
  ]
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  searchText: string = '';

  constructor(private fb: FormBuilder,
              private userService: HouseService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      nameHouse: new FormControl(''),
      address: new FormControl(''),
      amountBathRoom: new FormControl(''),
      amountBedRoom: new FormControl(''),
      pricefrom: new FormControl(''),
      priceto: new FormControl('')
    });
  }

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }

}
