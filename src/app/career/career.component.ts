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

  constructor(private _ApiService: ckssiteApiService,private router: Router) { }
  ngOnInit(): void {
    this.loadjobname();
    this.loadjobpost();
  }
    
  loadjobname(){
    this._ApiService.getjobname().subscribe(data=>{
      console.log(data);
      this.jobdata=data;
    })
  }
  loadjobpost(){
    this._ApiService.getjobpost().subscribe(data=>{
      console.log(data);
      this.jobpostdata=data;
    })
  }
  apply(title:any){
    console.log(title);
    
    this.titleurl=title;
    this.finalurl=this.titleurl.replace(' ','_');
    console.log(this.finalurl);    
    this.router.navigate(['/jobapply/'+this.finalurl])
  }
//   jobs =[
//     {
//       jobname:'Java Developers',
//       commonname:'Java Developer',
//       place:'Trivandrum',
//       priority:'High',
//       url:'java_developer'
//     },
//     {
//       jobname:'Mobile automation QA',
//       commonname:'Mobile automation',
//       place:'Trivandrum',
//       priority:'Medium',
//       url:'Mobile_automation_QA'
//     },
//     {
//       jobname:'Angular Developers',
//       commonname:'Front End Developer',
//       place:'Trivandrum',
//       priority:'Low',
//       url:'Angular_Developers'
//     },
//     {
//       jobname:'Java fullstack Developer',
//       commonname:'Java Developer',
//       place:'Trivandrum',
//       priority:'High',
//       url:'Java_full_stack_Developers'
//     },
//     {
//       jobname:'Automation Engineer',
//       commonname:'Automation Engineer',
//       place:'Trivandrum',
//       priority:'Low',
//       url:'Automation_Engineer'
//     },
//     {
//       jobname:'C# Developers',
//       commonname:'C# Developer',
//       place:'Trivandrum',
//       priority:'Medium',
//       url:'C#_Developers'
//     },
//     {
//       jobname:'SharePoint Developers',
//       commonname:'Front End Developer',
//       place:'Trivandrum',
//       priority:'Medium',
//       url:'SharePoint_Developers'
//     },
//     {
//       jobname:'UI Developers',
//       commonname:'Front End Developer',
//       place:'Trivandrum',
//       priority:'Low',
//       url:'UI_Developers'
//     },
//     {
//       jobname:'Angular Developer Ionic',
//       commonname:'Front End Developer',
//       place:'Trivandrum',
//       priority:'High',
//       url:'Angular_Developer_Ionic'
//     },
//     {
//       jobname:'BMC Helix Developers',
//       commonname:'Software Developer',
//       place:'Trivandrum',
//       priority:'Low',
//       url:'BMC_Helix_Developers'
//     },
//     {
//       jobname:'ADF Developers',
//       commonname:'Front End Developer',
//       place:'Trivandrum',
//       priority:'Medium',
//       url:'ADF_Developers'
//     }
// ];
}
