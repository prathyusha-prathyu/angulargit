import { Component, OnInit } from '@angular/core';
import {Userdetails} from './model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { error, log } from 'util';
import { ControlContainer } from '@angular/forms';
import { doesSourceNeedRange } from '@fullcalendar/core/structs/event-source';
import { durationsEqual } from '@fullcalendar/core/datelib/duration';
import * as $ from 'jquery';
import { addDays } from '@fullcalendar/core';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import {FormControl, FormGroup} from '@angular/forms';
declare var jQuery:any;
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  userdata: Userdetails[];
  obj={};
  id:any;
  data = {};

  constructor(private http:HttpClient,private rou:Router) { }

  ngOnInit() {
    this.getAlldata();
  }



  adddata()
  {

    const httpOptions = {
      headers: new HttpHeaders({

        'Content-Type': 'application/json'
      })
    };

    this.http.post<any>('http://192.168.1.158:4000/api/employees/add', this.data, httpOptions).subscribe(a =>{
      console.log(a);
      if(a.msg === "employeeId already exist"){
        document.getElementById('err').innerHTML = a.msg;
        this.data = a;
      }else{
        if(a.msg === "email already exist"){
          document.getElementById('err1').innerHTML = a.msg;
          this.data = a;
        }
        else{
          if(a.msg === "phone already exist"){
            document.getElementById('err2').innerHTML = a.msg;
            this.data = a;
          }
          else{
            this.data = a;
            this.getAlldata();
            jQuery('#l').modal("hide");
          }

        }
      }


    })

  }


  // adddata()
  // {
  //   this.getAlldata();
  // }

  getAlldata(){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": localStorage.getItem("token")


      }
    };


    this.http.get('http://192.168.1.158:4000/api/employees/showDetails',httpOptions).subscribe(b=>{
      console.log(b);
      this.userdata = b['data'];

    });
  }

  delete(v)
  {
    this.id = v._id;
    // console.log(this.id);
    this.http.delete(`http://192.168.1.158:4000/api/employees/empdel/${this.id}`,v).subscribe(d=>{
      this.userdata = d['data'];
      this.getAlldata();
      jQuery('#example').modal("hide");
    })
  }

  edit(v)
  {
    // console.log(v);
    // console.log(v._id);
    // this.tabledata=false;
    // this.formdata=true;
    this.id = v._id;
    // console.log(this.id);
    this.obj=Object.assign({},v);
    console.log(this.obj)
    // this.id = v._id;
    // console.log(this.id);
    // const httpOptions = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     "x-access-token": localStorage.getItem("token")
    //   }
    // };
    //   this.http.get(`http://192.168.1.158:4000/api/employees/showDetails/${this.id}`,httpOptions).subscribe(b=>{
          //  this.on = b['data'];
    //     console.log(b);
    // });
  }



  updatedata()
  {

   console.log(this.id);
    this.http.put(`http://192.168.1.158:4000/api/employees/edit/${this.id}`,this.obj).subscribe(()=>{
      jQuery('#exampleModal').modal("hide");
      this.getAlldata();
      // this.formdata = false;
      // this.tabledata = true;

})
}

// closeform()
// {
//   this.formdata = false;
//   this.tabledata =true;

// }
// closeAdd()
// {
//   this.tabledata = true;
//   this.formdata = false;
// }




  // getAlldata(){
  //   const httpOptions = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "x-access-token": localStorage.getItem("token")
  //     }
  //   };


  //   this.http.get('http://192.168.1.158:4000/api/user/getDetails',httpOptions).subscribe(a=>{
  //     this.userdata = a['data'];
  //   });
  // }



  // edit(v)
  // {
  //   this.obj=v;
  //   this.id = v._id;
  //   this.getOnedata();
  // }
  // getOnedata(){
  //   const httpOptions = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "x-access-token": localStorage.getItem("token")
  //     }
  //   };


  //   this.http.get(`http://192.168.1.158:4000/api/user/getDetails/${this.id}`,httpOptions).subscribe(a=>{
  //     // this.obj = a[0];
  //     console.log(a)
  //   });
  // }


  // updatedata()
  // {
  //   // console.log(this.id);
  //   this.http.put(`http://192.168.1.158:4000/api/user/update/${this.id}`,this.obj).subscribe(()=>{



  //   })
  // }

  // delete(v)
  // {
  //   this.id = v._id;
  //   console.log(this.id)

  //   this.http.delete(`http://192.168.1.158:4000/api/user/delete1/${this.id}`,v).subscribe(d=>{
  //     this.userdata = d['data'];
  //     this.getAlldata();
  //   })


  //  }




}

