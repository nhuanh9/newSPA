import {Component, Input, OnChanges, ChangeDetectorRef} from '@angular/core';
import {HouseService} from '../../services/house.service';
import {SearchServiceService} from '../../services/search-service.service';

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html'
})
export class HouseTableComponent implements OnChanges {
  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
  houses: any[] = [];
  filteredHouses: any[] = [];

  constructor(private houseService: HouseService,
              private ref: ChangeDetectorRef,
              private searchService: SearchServiceService) {
  }

  ngOnInit(): void {
    this.loadHouses();
  }

  ngOnChanges(): void {
    if (this.groupFilters) {
      this.filterHouseList(this.groupFilters, this.houses);
    }
  }

  filterHouseList(filters: any, houses: any): void {
    this.filteredHouses = this.houses;
    const keys = Object.keys(filters);
    const filterHouse = house => {
      let result = keys.map(key => {
        if (!~key.indexOf('age')) {
          if (house[key]) {
            return String(house[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase());
          } else {
            return false;
          }
        }
      });
// To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
      result = result.filter(it => it !== undefined);
// Filter the Age out from the other filters
      if (filters['ageto'] && filters['agefrom']) {
        if (house['age']) {
          if (+house['age'] >= +filters['agefrom'] && +house['age'] <= +filters['ageto']) {
            result.push(true);
          } else {
            result.push(false);
          }
        } else {
          result.push(false);
        }
      }
      return result.reduce((acc, cur: any) => {
        return acc & cur;
      }, 1);
    };
    this.filteredHouses = this.houses.filter(filterHouse);
  }

  loadHouses(): void {
    // this.houseService.fetchHouses()
    //   .subscribe(houses => this.houses = houses);
    this.searchService.getList().subscribe(result => {
      this.houses = result;
      console.log(result);
    }, error => {
      console.log('Loi!');
    });
    this.filteredHouses = this.filteredHouses.length > 0 ? this.filteredHouses : this.houses;
  }
}
