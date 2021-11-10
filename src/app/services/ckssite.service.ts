import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' // just before your class
})
export class ckssiteApiService {
  deleteid: any;
  deletejobnameid:any;
  postbyname: any;
  postbylocation:any;
  postbytype:any;
  constructor(private httpclient: HttpClient) { }
  public jobEdit = new BehaviorSubject<any>('');
  public jobpost = new BehaviorSubject<any>('');
  savejobapplyperson(data: any): Observable<any> {
    return this.httpclient.post('https://localhost:44348/api/JobDetail/saveUpdateJobDetails', data)
  }
  savecontactdetails(data: any): Observable<any> {
    return this.httpclient.post('https://ckssolutions.co.in/Api/contact/create.php', data)
  }
  getjobname(): Observable<any> {
    return this.httpclient.get('https://ckssolutions.co.in/Api/jobdetails/view.php');
  }
  savejobname(data: any): Observable<any> {
    return this.httpclient.post('https://ckssolutions.co.in/Api/jobdetails/create.php', data);
  }
  updatejobname(id:any,data:any):Observable<any>{
    return this.httpclient.put(`https://ckssolutions.co.in/Api/jobdetails/update.php`,data);
  }
  deletejobname(Job_Id:any,data:any):Observable<any>{
    this.deletejobnameid=JSON.stringify({Job_Id})
    return this.httpclient.put(`https://ckssolutions.co.in/Api/jobdetails/delete.php`,this.deletejobnameid);
  }
  savejobpost(data:any):Observable<any>{
    return this.httpclient.post('https://ckssolutions.co.in/Api/jobpost/create.php',data);
  }
  getjobpost():Observable<any>{
    return this.httpclient.get('https://ckssolutions.co.in/Api/jobpost/view.php');
  }
  updatejobpost(data:any):Observable<any>{
    return this.httpclient.put(`https://ckssolutions.co.in/Api/jobpost/update.php`,data);
  }
  deletejobpost(Id:any):Observable<any>{
    this.deleteid=JSON.stringify({Id})
    return this.httpclient.put(`https://ckssolutions.co.in/Api/jobpost/delete.php`,this.deleteid);
  }
  getbynamepost(Job_Title:any):Observable<any>{
    this.postbyname=JSON.stringify({Job_Title})
    return this.httpclient.post('https://ckssolutions.co.in/Api/jobdetails/viewbyname.php',this.postbyname);
  }
  getbynamejobdetail(Job_Title:any):Observable<any>{    
    this.postbyname=JSON.stringify({Job_Title})
    return this.httpclient.post('https://ckssolutions.co.in/Api/jobpost/viewbyname.php',this.postbyname);
  }
  getbylocation(Job_Location:any):Observable<any>{
    this.postbylocation=JSON.stringify({Job_Location})
    return this.httpclient.post('https://ckssolutions.co.in/Api/jobpost/viewbyloc.php',this.postbylocation);
  }
  getbytype(Job_Type:any):Observable<any>{
    this.postbytype=JSON.stringify({Job_Type})
    return this.httpclient.post('https://ckssolutions.co.in/Api/jobpost/viewbytype.php',this.postbytype);
  }
}