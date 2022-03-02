import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* forms Reactive */

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'


/* Components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
    DashboardComponent,
    MedicineComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
