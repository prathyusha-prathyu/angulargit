import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { tokenName } from '@angular/compiler';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userdata:object[]=[];

  
  constructor(private ds:DataService,private rou:Router,private http:HttpClient) {
    console.log(localStorage.getItem('token'));
    if(localStorage.getItem('token') === null){
      alert("Login first");
      rou.navigate(['/login']);
    }
   }

  ngOnInit() {
    // this.ds.userData().subscribe(a=>this.user=a)
    // console.log(this.user);
}
logout()
  {
    localStorage.removeItem("token");
    this.rou.navigate(['/login'])
  }

}