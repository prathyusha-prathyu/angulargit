import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { laptopdetails } from '../lapdata/model';

import * as $ from 'jquery';
declare var jQuery:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data = {};
  today = new Date();
  futureDate = new Date(Date.now() + 86400000 * 7);
  minDate = `${this.today.getFullYear()}-${("0" + (this.today.getMonth() + 1)).slice(-2)}-${("0"+(this.today.getDate())).slice(-2)}`
  maxDate = `${this.futureDate.getFullYear()}-${("0" + (this.futureDate.getMonth() + 1)).slice(-2)}-${("0" + (this.futureDate.getDate()-1)).slice(-2)}`;
  constructor(private http:HttpClient) {}

  edata:any = [];
  ename:any = [];
  systemid:any = [];
  sos:any = [];
  mso:any = [];
  dashdata:any = [];
  dashdatadel:any = [];
  id:any;
  empId:any;
  obj = {};
  getData = {};
  onePerson = {};

  ngOnInit() {
    console.log(this.getData);
    this.getAlldata();
    // this.getEmployee();
    this.dataempid();
    // this.dataempname()
    this.datasysid();
    this.dataos();
    this.datams();

  }



  dataempid()
  {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": localStorage.getItem("token")
      }
    };
    this.http.get('http://192.168.1.158:4000/api/employees/showDetails',httpOptions).subscribe(b=>{
      // console.log(b['data']);
    this.edata = b['data']
  //     // this.userdata = b['data'];

    });
  }

  // dataempname()
  // {
  //   const httpOptions = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "x-access-token": localStorage.getItem("token")
  //     }
  //   };
  //   this.http.get('http://192.168.1.158:4000/api/employees/showDetails',httpOptions).subscribe(b=>{
  //     // console.log(b['data']);
  //   this.ename = b['data']
  // //     // this.userdata = b['data'];

  //   });
  // }

  datasysid()
  {
    console.log("dataa");
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": localStorage.getItem("token")
      }
    };
    this.http.get('http://192.168.1.158:4000/api/system/showDetails1',httpOptions).subscribe(b=>{
      console.log(b);

      this.systemid = b;

    });
  }


  dataos()
  {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": localStorage.getItem("token")
      }
    };
    this.http.get('http://192.168.1.158:4000/api/os/getOs',httpOptions).subscribe(b=>{

      this.sos = b['data'];

    });
  }


  datams()
  {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": localStorage.getItem("token")
      }
    };
    this.http.get('http://192.168.1.158:4000/api/ms/getMs',httpOptions).subscribe(b=>{

      this.mso = b['data'];

    });
  }

  adddata()
  {

    console.log(this.getData['emp']);
    this.http.post('http://192.168.1.158:4000/api/dash/assign',this.getData).subscribe(b=>{
    console.log(b['msg']);
    console.log(b);
    if(b['msg'] === " employeeId already exists"){
      document.getElementById('err').innerHTML = b['msg'];
      this.getData = b;
    }else{
      if(b['msg'] === "systemId already exists"){
        document.getElementById('err1').innerHTML = b['msg'];
        this.getData = b;
      }else{
        this.getData = b;
        this.getAlldata();
        this.onePerson['empname'] = '';
        jQuery('#l').modal("hide");
      }
    }



    });

  }


  getAlldata(){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": localStorage.getItem("token")
      }
    };


    this.http.get('http://192.168.1.158:4000/api/dash/showall',httpOptions).subscribe(b=>{
      console.log(b);
      this.dashdata = b;
      // console.log(this.dashdata);


    });
  }



  edit(v)
  {
    console.log(v);
    this.obj=v;
    this.id = v._id;
    this.empId = v.emp;
  }

  updatedata()
  {
    console.log(this.obj['empid']);
    this.http.put(`http://192.168.1.158:4000/api/dash/editall/${this.id}`,this.obj).subscribe((a)=>{
      console.log(a);
      console.log(this.obj);
      this.obj = a;
      this.getAlldata();
      jQuery('#exampleModal').modal("hide");
    })
  }

  delete(v)
  {
    console.log(v);
    this.id = v._id;
    this.http.delete(`http://192.168.1.158:4000/api/dash/delall/${this.id}`,v).subscribe(d=>{
      console.log(d);
      this.dashdatadel = d;
      this.getAlldata();
      jQuery('#example').modal("hide");

      // if(confirm("Are you sure to delete"+v)){

      // }
    })
  }

myData()
{
  const httpOptions = {
    headers: {
      'Content-Type': 'application/json',
      "x-access-token": localStorage.getItem("token")
    }
  };
  this.http.get(`http://192.168.1.158:4000/api/employees/showDetails/${this.getData['emp']}`,httpOptions).subscribe(b=>{
      this.onePerson=b['data'];

      // this.onePerson['empname'] = '';
    });
}


}
