import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
const routes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'main', component: MainComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  {path:'register',component:RegisterUserComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}