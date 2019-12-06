import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/Blocks/menu/menu.component';
import { UsersComponent } from './Components/Blocks/users/users.component';
import { HeaderComponent } from './Components/Blocks/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListHouseComponent } from './Components/Pages/house/list-house/list-house.component';
import { RegisterComponent } from './Components/Pages/users/register/register.component';
import { CarouselComponent } from './Components/Blocks/carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    HeaderComponent,
    ListHouseComponent,
    RegisterComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
