import { Component, OnInit } from '@angular/core';
import { ckssiteApiService } from '../services/ckssite.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
post:any;
name:any;
apply:any;
  constructor(private _ApiService: ckssiteApiService) { }

  ngOnInit(): void {
     this.loadjobpost();
     this.loadjobname();
     this.loadapply();
  }
  loadjobpost(){
    this._ApiService.getjobpost().subscribe(data=>{
      this.post=Object.keys(data).length;
      
    })
  }
  loadjobname(){
    this._ApiService.getjobname().subscribe(data=>{
      this.name=Object.keys(data).length;
    })
  }
  loadapply(){
    this._ApiService.getjobapply().subscribe(data=>{
      this.apply=Object.keys(data).length;
    })
  }
}
