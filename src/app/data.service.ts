import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }
  register(v): Observable<any> {
    console.log(v);
     return this.http.post('http://192.168.1.158:4000/api/user/register',v)
   
   }
  logindata(v): Observable<any> {
    return this.http.post('http://192.168.1.158:4000/api/user/login', v)
  }
  userData(): Observable<any> {
    return this.http.get<any>('http://192.168.1.158:4000/api/user/getDetails')
  }
}
