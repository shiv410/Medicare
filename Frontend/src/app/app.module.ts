import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { ViewmedicineComponent } from './viewmedicine/viewmedicine.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component'

import { NgxPaginationModule } from 'ngx-pagination';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ViewallusersComponent,
    UpdateuserComponent,
    ViewuserComponent,
    AdminhomeComponent,
    CategorylistComponent,
    AddcategoryComponent,
    UpdatecategoryComponent,
    AddmedicineComponent,
    UpdatemedicineComponent,
    MedicinelistComponent,
    ViewmedicineComponent,
    CustomerComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
