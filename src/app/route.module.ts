import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdataComponent } from './userdata/userdata.component';
import { LapdataComponent } from './lapdata/lapdata.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OsComponent } from './os/os.component';
import { MsofficeComponent } from './msoffice/msoffice.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Component } from '@fullcalendar/core';



@NgModule({

  imports: [
   RouterModule.forRoot([
        {path:'',component:HomeComponent,children:[
          {path:'',component:LoginComponent},
          {path:'login',redirectTo:'/',pathMatch:'full'},
          {path:'login',component:LoginComponent},
          {path:'register',component:RegisterComponent}
        ]},

        {path:'getdetails',component:UserdetailsComponent,children:[

          {path:'',component:DashboardComponent},

        // {path:'dashboard',redirectTo:'/',pathMatch:'full'},
        {path:'dashboard',component:DashboardComponent},
        {path:'userdata',component:UserdataComponent},
        {path:'lapdata',component:LapdataComponent},

        {path:'os',component:OsComponent},
        {path:'msoffice',component:MsofficeComponent},
        {path:'admin',component:AdmindetailsComponent},

        ]},
        {path:'**',component:PagenotfoundComponent}


    //  {path:'',component:HomeComponent,children:[
    //    {path:'login',redirectTo:'/',pathMatch:'full'},
    //   //  {path:'login',component:LoginComponent},
    //    {path:'register',component:RegisterComponent},
    //    {path:'getdetails',component:UserdetailsComponent,children:[
    //     {path:'userdata',component:UserdataComponent},
    //     {path:'lapdata',component:LapdataComponent}
    //   ]},

    //  ]},
    //  {path:'',redirectTo:'login',pathMatch:'full'},
    //  {path:'login',component:LoginComponent},


  ])
  ],
  exports:[RouterModule]
})
export class RouteModule { }
