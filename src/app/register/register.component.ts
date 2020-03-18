import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private ds: DataService, private rou: Router, private http: HttpClient) { }
  name: string;
  phone: number;
  email: string;
  password: any;
  submitted = false;
  r: any = {};

  test(v) {
    this.r = v;
    this.submitted = true;
    console.log(v)

    const httpOptions = {
      headers: new HttpHeaders({

        'Content-Type': 'application/json'
      })
    };
    this.http.post<any>('http://192.168.1.158:4000/api/admin/register', v, httpOptions).subscribe(a =>{
      console.log(a)
      if(a.msg === "email already exist "){
        document.getElementById('err').innerHTML = a.msg;
      }else{
        if(a.msg === "phone already exist"){
          document.getElementById('err1').innerHTML = a.msg;
        } else{
          alert("successfully registered");
           this.rou.navigate(['/login'])
        }
      }


    })

    //

  }



}
