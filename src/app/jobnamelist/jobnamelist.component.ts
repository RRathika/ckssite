import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ckssiteApiService } from '../services/ckssite.service';

@Component({
  selector: 'app-jobnamelist',
  templateUrl: './jobnamelist.component.html',
  styleUrls: ['./jobnamelist.component.css']
})
export class JobnamelistComponent implements OnInit {
jobdata?:any;
  constructor(private _ApiService: ckssiteApiService,private router: Router) { }

  ngOnInit(): void {
    this.loadjobname();
  }
  oneditjobname(item:any)
  {
    this._ApiService.jobEdit.next(item);
    this.router.navigateByUrl('/admin/jobname');
  }
  loadjobname(){
    this._ApiService.getjobname().subscribe(data=>{
      this.jobdata=data;
    })
  }
  ondeletejobname(id:any,item:any){    
    this._ApiService.deletejobname(id,item).subscribe(data=>{
      if(data){
      alert('Deleted Successfully');
      this.loadjobname();
      }
    })
  }
}
