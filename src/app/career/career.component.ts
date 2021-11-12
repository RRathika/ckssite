import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ckssiteApiService } from '../services/ckssite.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  jobdata: any;
  href: any;
  jobpostdata: any;
  titleurl: any;
  finalurl: any;
  jobnameselect: any;
  jobtypeselect:any;
  joblocationselect:any;
  constructor(private _ApiService: ckssiteApiService, private router: Router) { }
  ngOnInit(): void {
    this.loadjobname();
    this.loadjobpost();
  }

  loadjobname() {
    this._ApiService.getjobname().subscribe(data => {
      this.jobdata = data;
    })
  }
  loadjobpost() {
    this._ApiService.getjobpost().subscribe(data => {
      this.jobpostdata = data;
    })
  }
  apply(title: any) {   
    this.titleurl = title;
    this.finalurl = this.titleurl.replace(' ', '_');    
    this.router.navigate(['/jobapply/' + this.finalurl])
  }
  onOptionsSelected(e: any) {
    this.jobnameselect = e.target.value;      
    if (this.jobnameselect == "Select All Job Name") {
      this._ApiService.getjobpost().subscribe(data => {
        this.jobpostdata = data;
      })
    }
    else {
      this._ApiService.getbynamejobdetail(this.jobnameselect).subscribe(data => {
        this.jobpostdata = data;
      })
    }
  }
  onOptionsjoblocation(e: any) {
    this.jobtypeselect = e.target.value;    
    if (this.jobtypeselect == "Select All Job Type") {
      this._ApiService.getjobpost().subscribe(data => {
        this.jobpostdata = data;
      })
    }
    else {
      this._ApiService.getbylocation(this.jobtypeselect).subscribe(data => {
        this.jobpostdata = data;
      })
    }
  }
  onjobtypeSelected(e: any) {
    this.joblocationselect = e.target.value;
    if (this.joblocationselect == "Select All Job Location") {
      this._ApiService.getjobpost().subscribe(data => {
        this.jobpostdata = data;
      })
    }
    else {
      this._ApiService.getbytype(this.joblocationselect).subscribe(data => {
        this.jobpostdata = data;
      })
    }
  }
}
