import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ItemserviceService} from './itemservice.service';
import {AppService} from './app.service';
import {AuthenticationService} from './authentication.service';
import {BasicHttpInterceptService} from './basic-http-intercept.service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AddProductComponent } from './add-product/add-product.component';
import {ParticlesModule} from 'angular-particle';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UserCartComponent,
    LoginComponent,
    SignupComponent,
    MyprofileComponent,
    OrderHistoryComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ParticlesModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [ItemserviceService, AppService, AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicHttpInterceptService, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
