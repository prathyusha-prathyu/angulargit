import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
  // today = new Date(Date.now());
  // futureDate = new Date(Date.now() + 86400000 * 7);

  constructor(private ds:DataService,private rou:Router,private http:HttpClient) {
    // this.today.setDate(this.today.getDate());
    // this.futureDate.setDate(this.futureDate.getDate());
   }

  login(v)
  {
    console.log(v);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',


      })
    };
    this.http.post<any>('http://192.168.1.158:4000/api/admin/login', v, httpOptions).subscribe(a => {
      if(a.msg === "No admin found."){
        document.getElementById('err').innerHTML = a.msg;
        console.log(v);
      }else{
        localStorage.setItem("token",a.token);
        alert("login successfully");
        this.rou.navigate(['/getdetails'])
      }
      // console.log(a.token)


    });
  }


}
