import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ckssiteApiService } from '../services/ckssite.service';

@Component({
  selector: 'app-jobdetailsadd',
  templateUrl: './jobdetailsadd.component.html',
  styleUrls: ['./jobdetailsadd.component.css'],
  providers: [DatePipe]
})
export class JobdetailsaddComponent implements OnInit {
  jobstartdate?: any;
  jobenddate?:any;
  jobdata?:any;
  id: any;
  result:any;
  patchstart:any;
  patchend:any;
  constructor(private _ApiService: ckssiteApiService,private router: Router, private formBuilder: FormBuilder,public datepipe:DatePipe) { }
  jobpostForm: FormGroup = this.formBuilder.group({
    Job_Title:[Validators.required],
    Job_Priority:[Validators.required],
    Job_StartDate:['',Validators.required],
    Job_Location:['',Validators.required],
    Job_Experience:['',Validators.required],
    Job_EndDate:['',Validators.required],
    Job_Type:['',Validators.required],
    Job_Salary:['',Validators.required]
  })
  ngOnInit(): void {
    this.loadjobname();
    this._ApiService.jobpost.subscribe(response=>{
      this.result=response;     
      if(response){        
        this.jobpostForm.patchValue(response);
        let part=response.Job_StartDate.split('T00:00:00.000Z');
        let parts=part[0].split('-');
        this.patchstart={year:+parts[0],month:+parts[1],day:+parts[2]};
        let part1=response.Job_EndDate.split('T00:00:00.000Z');
        let parts1=part1[0].split('-');
        this.patchend={year:+parts1[0],month:+parts1[1],day:+parts1[2]};
        this.id=response.Id;
        this.jobpostForm.patchValue({
          Job_StartDate:this.patchstart,
          Job_EndDate:this.patchend,
          Job_Priority: this.result.Job_Priority
        })
      }
    })
  }
  loadjobname():void{
    this._ApiService.getjobname().subscribe(data=>{
      console.log(data['data']);
      this.jobdata=data['data'];
    })
  }
  changeValue():void{

  }
  submit(){
    //alert(this.jobpostForm.value);
    //console.log(this.jobpostForm.value['Job_StartDate']);
   
    if(this.id)
    {
      this.jobstartdate=this.jobpostForm.value['Job_StartDate'];
      this.jobpostForm.value['Job_StartDate']= this.jobstartdate?this.jobstartdate.year+"-"+('0'+this.jobstartdate.month).slice(-2)
      +"-"+('0'+this.jobstartdate.day).slice(-2):null;
      this.jobenddate=this.jobpostForm.value['Job_EndDate'];
      this.jobpostForm.value['Job_EndDate']=this.jobenddate?this.jobenddate.year+"-"+('0'+this.jobenddate.month).slice(-2)
      +"-"+('0'+this.jobenddate.day).slice(-2):null;
      this._ApiService.updatejobpost(this.id,this.jobpostForm?.value).subscribe(data=>{
        console.log(data);
        alert('Data updated successfully');
        this.router.navigateByUrl('/admin/joblist');
      })
    }
    else{
      this.jobstartdate=this.jobpostForm.value['Job_StartDate'];
      this.jobpostForm.value['Job_StartDate']= this.jobstartdate?this.jobstartdate.year+"-"+('0'+this.jobstartdate.month).slice(-2)
      +"-"+('0'+this.jobstartdate.day).slice(-2):null;
      this.jobenddate=this.jobpostForm.value['Job_EndDate'];
      this.jobpostForm.value['Job_EndDate']=this.jobenddate?this.jobenddate.year+"-"+('0'+this.jobenddate.month).slice(-2)
      +"-"+('0'+this.jobenddate.day).slice(-2):null;
    this._ApiService.savejobpost(this.jobpostForm?.value)
    .subscribe(data => {
      if(data){
       alert('Data saved successfully');
       this.jobpostForm.reset();
      }
    })
  }
  }


}
