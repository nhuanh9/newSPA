import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../helper/auth-guard';
import {ListHouseComponent} from '../Components/Pages/house/list-house/list-house.component';
import {DetailHouseComponent} from '../Components/Pages/house/detail-house/detail-house.component';
import {CreateHouseComponent} from '../Components/Pages/house/create-house/create-house.component';

const routing: Routes = [
  {
    path: 'detail-house/:id',
    component: DetailHouseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-house',
    component: CreateHouseComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    DetailHouseComponent,
    CreateHouseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ]
})
export class ExamModule {
}
