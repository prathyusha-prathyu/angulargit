import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteModule } from './route.module';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdataComponent } from './userdata/userdata.component';
import { LapdataComponent } from './lapdata/lapdata.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OsComponent } from './os/os.component';
import { MsofficeComponent } from './msoffice/msoffice.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    UserdetailsComponent,

    UserdataComponent,

    LapdataComponent,

    HomeComponent,

    DashboardComponent,

    OsComponent,

    MsofficeComponent,

    AdmindetailsComponent,

    PagenotfoundComponent,

    // ReactiveFormsModule
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
