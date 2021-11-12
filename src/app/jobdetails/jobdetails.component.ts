import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ckssiteApiService } from '../services/ckssite.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {
  jobdata: any;

  constructor(private _ApiService: ckssiteApiService,private router: Router ) { }

  ngOnInit(): void {
    this.dataload();
  }
  oneditjobpost(item:any){
    this._ApiService.jobpost.next(item);
    this.router.navigateByUrl('/admin/joblistadd');
  }
  ondeletejobpost(id:any,item:any){
   
    this._ApiService.deletejobpost(id).subscribe(data=>{
      alert('Deleted Successfully');
      this.dataload();
    })
  }
  dataload(){
    this._ApiService.getjobpost().subscribe(data=>{
      this.jobdata=data;  
    })
  }

}
