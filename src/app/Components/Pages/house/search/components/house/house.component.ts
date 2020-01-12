import { Component} from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './house.component.html',
})
export class HouseComponent  {

  searchText: string;
  filters: Object;

  constructor() {}

}
