import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' // just before your class
})
export class ckssiteApiService {
  constructor(private httpclient: HttpClient) { }
  public jobEdit = new BehaviorSubject<any>('');
  public jobpost = new BehaviorSubject<any>('');
  savejobapplyperson(data: any): Observable<any> {
    return this.httpclient.post('https://localhost:44348/api/JobDetail/saveUpdateJobDetails', data)
  }
  savecontactdetails(data: any): Observable<any> {
    return this.httpclient.post('http://localhost:3000/api/createcontact', data)
  }
  getjobname(): Observable<any> {
    return this.httpclient.get('http://localhost:3000/api/getjob');
  }
  savejobname(data: any): Observable<any> {
    return this.httpclient.post('http://localhost:3000/api/createjob', data);
  }
  updatejobname(id:any,data:any):Observable<any>{
    return this.httpclient.put(`http://localhost:3000/api/updatejob/${id}`,data);
  }
  deletejobname(id:any,data:any):Observable<any>{
    return this.httpclient.put(`http://localhost:3000/api/deletejob/${id}`,data);
  }
  savejobpost(data:any):Observable<any>{
    return this.httpclient.post('http://localhost:3000/api/jobpost',data);
  }
  getjobpost():Observable<any>{
    return this.httpclient.get('http://localhost:3000/api/getjobspost');
  }
  updatejobpost(id:any,data:any):Observable<any>{
    return this.httpclient.put(`http://localhost:3000/api/getjobspost/${id}`,data);
  }
  deletejobpost(id:any,data:any):Observable<any>{
    debugger
    return this.httpclient.put(`http://localhost:3000/api/deletepost/${id}`,data);
  }
}