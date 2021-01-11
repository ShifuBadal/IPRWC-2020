import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'collection', component: ProductsComponent },
  { path: 'collection/product/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
