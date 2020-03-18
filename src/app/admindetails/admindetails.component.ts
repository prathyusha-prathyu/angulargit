import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
declare var jQuery:any;


@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {
  
  userdata:any[];
  id:any;
  confirmDelete = {};
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAlldata();
  }
getAlldata(){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": localStorage.getItem("token")
      }
    };
      this.http.get('http://192.168.1.158:4000/api/admin/getDetails',httpOptions).subscribe(a=>{
      this.userdata = a['data'];
      console.log(a);
    });
  }
  delete(v)
  {
    console.log(v);
    this.id = v._id;
    console.log(this.id);
    this.http.delete(`http://192.168.1.158:4000/api/admin/delete1/${this.id}`,v).subscribe(d=>{
      this.userdata = d['data'];
      this.getAlldata();
      jQuery('#exampleModal').modal("hide");
    })
  }


}
