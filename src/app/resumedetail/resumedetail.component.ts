import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ckssiteApiService } from '../services/ckssite.service';

@Component({
  selector: 'app-resumedetail',
  templateUrl: './resumedetail.component.html',
  styleUrls: ['./resumedetail.component.css']
})
export class ResumedetailComponent implements OnInit {
  jobdata: any;

  constructor(private _ApiService: ckssiteApiService,private router: Router) { }

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this._ApiService.getjobapply().subscribe(data=>{
      console.log(data);
      this.jobdata=data;
    })
  }

}
