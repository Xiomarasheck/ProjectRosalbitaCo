import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './common/logo/logo.component';
import { LoaderComponent } from './common/loader/loader.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ContainerItemsCardsComponent } from './components/container-items-cards/container-items-cards.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    LogoComponent,
    LoaderComponent,
    ItemCardComponent,
    TopBarComponent,
    ContainerItemsCardsComponent,
    CartComponent,
    ProductsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
