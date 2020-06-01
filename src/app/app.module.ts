import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import {routing, appRoutingProviders } from './app.routing'


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { EmployeeService } from './service/employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [
    EmployeeService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
