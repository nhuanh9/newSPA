import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './Components/Pages/users/register/register.component';
import {ListHouseComponent} from './Components/Pages/house/list-house/list-house.component';
import {DetailHouseComponent} from './Components/Pages/house/detail-house/detail-house.component';
import {CreateHouseComponent} from './Components/Pages/house/create-house/create-house.component';
import {CarouselComponent} from './Components/Blocks/carousel/carousel.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: ListHouseComponent
  },
  {
    path: 'detail-house/:id',
    component: DetailHouseComponent
  },
  {
    path: 'create-house',
    component: CreateHouseComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent,
    outlet: 'carousel'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
