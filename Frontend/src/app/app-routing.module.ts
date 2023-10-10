import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';
import { ViewmedicineComponent } from './viewmedicine/viewmedicine.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminhomeComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'viewallusers', component: ViewallusersComponent },
  { path: 'updateuser/:id', component: UpdateuserComponent },
  { path: 'viewuser/:id', component: ViewuserComponent },
  { path: 'categories', component: CategorylistComponent },
  { path: 'addcategory', component: AddcategoryComponent },
  { path: 'updatecategory/:id', component: UpdatecategoryComponent },
  { path: 'medicinelist', component: MedicinelistComponent },
  { path: 'addmedicine', component: AddmedicineComponent },
  { path: 'updatemedicine/:id', component: UpdatemedicineComponent },
  { path: 'viewmedicine', component: ViewmedicineComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
