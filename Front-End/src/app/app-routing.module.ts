import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import { WebcartComponent } from './webcart/webcart.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/guards/auth-guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'collection', component: ProductsComponent },
  { path: 'collection/product/:id', component: ProductDetailComponent },
  { path: 'webcart', component: WebcartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminportal', component: AdminportalComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent },
];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
