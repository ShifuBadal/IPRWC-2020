import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ProductService } from './products/product.service';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { GenericRequests } from './services/generic-requests.service';
import { DataStorageService } from './services/date-storage.service';
import { WebcartComponent } from './webcart/webcart.component';
import { WebcartItemComponent } from './webcart/webcart-item/webcart-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UserComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    WebcartComponent,
    WebcartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ProductService, GenericRequests, DataStorageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
