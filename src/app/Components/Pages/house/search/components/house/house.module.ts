import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HouseComponent } from './house.component';
import { SearchComponent } from '../search/search.component';
import { HouseService } from '../../services/house.service';
import { FilterPipe } from '../../pipe/filter.pipe';
import { UserRoutes } from './house-routing.module';
import {HouseTableComponent} from '../house-table/house-table.component';


@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, UserRoutes ],
  declarations: [HouseComponent, SearchComponent, HouseTableComponent, FilterPipe, HouseTableComponent],
  providers: [ HouseService ]
})
export class HouseModule { }
