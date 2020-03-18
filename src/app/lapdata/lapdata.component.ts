import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { laptopdetails } from './model';
declare var jQuery:any;
@Component({
  selector: 'app-lapdata',
  templateUrl: './lapdata.component.html',
  styleUrls: ['./lapdata.component.css']
})
export class LapdataComponent implements OnInit {
  data = {};
  today = new Date();
  futureDate = new Date(Date.now() + 86400000 * 7);
  minDate = `${this.today.getFullYear()}-${("0" + (this.today.getMonth() + 1)).slice(-2)}-${("0"+(this.today.getDate())).slice(-2)}`
  maxDate = `${this.futureDate.getFullYear()}-${("0" + (this.futureDate.getMonth() + 1)).slice(-2)}-${("0" + (this.futureDate.getDate()-1)).slice(-2)}`;
  obj={};

  id:any;
  userdata:{};
  constructor(private http:HttpClient) { }

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

    this.http.post<any>('http://192.168.1.158:4000/api/system/add1', this.data,httpOptions).subscribe(a =>{
      console.log(a)
     if(a.msg === "system id already exists"){
      document.getElementById('err').innerHTML = a.msg;
      this.data = a;
     }else{
      this.data = a;
      this.getAlldata();
      jQuery('#l').modal("hide");
     }
 })

  }

  getAlldata(){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": localStorage.getItem("token")
      }
    };


    this.http.get('http://192.168.1.158:4000/api/system/showDetails1',httpOptions).subscribe(b=>{
      console.log(b);
      this.userdata = b;
      // this.userdata = b['data'];
      // console.log(this.userdata);

    });
  }

  edit(v)
  {
    console.log(v);
    this.obj=Object.assign({},v);
    console.log(this.obj);
    this.id = v._id;
    // console.log(this.id);

  }
  updatedata()
  {

   console.log(this.id);
    this.http.put(`http://192.168.1.158:4000/api/system/edit1/${this.id}`,this.obj).subscribe(()=>{
      jQuery('#exampleModal').modal("hide");
      this.getAlldata();
      // this.formdata = false;
      // this.tabledata = true;

})
}
  delete(v)
  {
    console.log(v);
    this.id = v._id;
    console.log(this.id);
    this.http.delete(`http://192.168.1.158:4000/api/system/sysdel/${this.id}`,v).subscribe(d=>{
      this.userdata = d['data'];
      this.getAlldata();
      jQuery('#example').modal("hide");
    })
  }
}

// import { Component, OnInit } from '@angular/core';
// import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { laptopdetails } from './model';
// declare var jQuery:any;
// declare var $: any;
// @Component({
//   selector: 'app-lapdata',
//   templateUrl: './lapdata.component.html',
//   styleUrls: ['./lapdata.component.css']
// })
// export class LapdataComponent implements OnInit {
//   data = {};
//   obj={};
//   id:any;
//   userdata: laptopdetails[];
//   constructor(private http:HttpClient) { }

//   ngOnInit() {
//     this.getAlldata();

//   }
//   adddata()
//   {
//     const httpOptions = {
//       headers: new HttpHeaders({

//         'Content-Type': 'application/json'
//       })
//     };
//     console.log(this.data);
//     this.http.post<any>('http://192.168.1.158:4000/api/system/add1', this.data,httpOptions).subscribe(a =>{
//       console.log(a);

//       this.data = a;
//       this.getAlldata();
//       jQuery('#l').modal("hide");
//       })

//   }


//   getAlldata(){
//     const httpOptions = {
//       headers: {
//         'Content-Type': 'application/json',
//         "x-access-token": localStorage.getItem("token")
//       }
//     };


//     this.http.get('http://192.168.1.158:4000/api/system/showDetails1',httpOptions).subscribe(b=>{

//       this.userdata = b['data'];

//     });
//   }

//   edit(v)
//   {
//     console.log(v);
//     this.obj=Object.assign({},v);
//     this.id = v._id;
//     // console.log(this.id);

//   }
//   updatedata()
//   {
//     console.log(this.id)
//     this.http.put(`http://192.168.1.158:4000/api/system/edit1/${this.id}`,this.obj).subscribe(()=>{
//       jQuery('#exampleModal').modal("hide");

//     })
//   }
//   delete(v)
//   {
//     console.log(v);
//     this.id = v._id;
//     console.log(this.id);
//     this.http.delete(`http://192.168.1.158:4000/api/system/sysdel/${this.id}`,v).subscribe(d=>{
//       this.userdata = d['data'];
//       this.getAlldata();
//       jQuery('#example').modal("hide");
//     })
//   }

// }


// $(document).ready(function(){
//   var minDate = new Date();
//   $('#rd').datepicker({
//     showAnim: 'drop',
//     numberOfMonth:1,
//     minDate: minDate,
//     dateFormat: 'dd/mm/yy',
//     onClose : function(selectedDate){
//       $('#rtd').datepicker('option','minDate',selectedDate);
//     }
//   });
// });
