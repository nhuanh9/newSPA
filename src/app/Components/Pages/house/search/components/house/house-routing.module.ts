import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './house.component';

const routes: Routes = [
  { path: '', component: HouseComponent }
];

export const UserRoutes = RouterModule.forChild(routes);

