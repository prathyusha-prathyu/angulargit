import { Component, OnInit } from '@angular/core';
import { msdetails } from './model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
declare var jQuery:any;
@Component({
  selector: 'app-msoffice',
  templateUrl: './msoffice.component.html',
  styleUrls: ['./msoffice.component.css']
})
export class MsofficeComponent implements OnInit {

data = {};
obj = {};
id:any;
IsmodelShow:any;
userdata:msdetails[];

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

    this.http.post<any>('http://192.168.1.158:4000/api/ms/addMs', this.data, httpOptions).subscribe(a =>{
      if(a.msg === "ms already exist"){
        document.getElementById('err').innerHTML = a.msg;
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


  this.http.get('http://192.168.1.158:4000/api/ms/getMs',httpOptions).subscribe(b=>{

    this.userdata = b['data'];

  });
}
edit(v)
{
  this.obj = Object.assign({},v);
  this.id = v._id;
}
updatedata()
{
  console.log(this.id);
  this.http.put(`http://192.168.1.158:4000/api/ms/editMs/${this.id}`,this.obj).subscribe(()=>{
    jQuery('#exampleModal').modal("hide");
    this.getAlldata();
  })
}

delete(v)
{
  this.id = v._id;
  console.log(this.id);
  this.http.delete(`http://192.168.1.158:4000/api/ms/delMs/${this.id}`,v).subscribe(d=>{
    this.userdata = d['data'];
    this.getAlldata();
    jQuery('#example').modal("hide");
  })
}

}
