import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyForm } from '../Interfacelist/applyform';
import { ckssiteApiService } from '../services/ckssite.service';

@Component({
  selector: 'app-applyposition',
  templateUrl: './applyposition.component.html',
  styleUrls: ['./applyposition.component.css']
})
export class ApplypositionComponent implements OnInit {
  applyform?: ApplyForm[];
  loading = false;
  submitted = false;
  id=0;
  name : any;
  jobForm: FormGroup = this.formBuilder.group({
    Name: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    MobileNo: ['', [Validators.required, Validators.minLength(10)]],
    JobName: ['', Validators.required],
    Message: ['', [Validators.required]],
    ResumeFile: ['', [Validators.required]]
  });
  file: any;
  filterData: any[] = [];
  jobname: any;
  url:any;
  constructor(private formBuilder: FormBuilder, private router: Router,private route:ActivatedRoute, private _ApiService: ckssiteApiService) { }


  ngOnInit(): void {
    console.log(this.formBuilder);
    this.route.paramMap.subscribe(data=>{     
      this.name = data.get('name');
      this.jobname=this.name.replace("_"," "); 
    });
    this.url=window.location.href;
    console.log(this.url)
  }
  onSelectFile(event: any) {
    this.file = event;
    const reader = new FileReader();
    reader.onload = () => {
      // For Image Resolution
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () =>{
        const height = img.naturalHeight;
        const width = img.naturalWidth;
        
      }
      // this.sliderList[index].sliderImageUrl = reader.result as string;
    }
   
    reader.readAsDataURL(event.target.files[0]);
    this.jobForm.value['ResumeFile']=event.target.files[0];
  }
  assignFormData() {
    var formData: any = new FormData();
    formData.append('Id', this.id);
    formData.append('Name', this.jobForm.value['Name']);
    formData.append('Email', this.jobForm.value['Email']);
    formData.append('MobileNo', this.jobForm.value['MobileNo']);
    formData.append('JobName', this.jobForm.value['JobName']);
    formData.append('Message', this.jobForm.value['Message']);    
    formData.append('ResumeFile',this.jobForm.value['ResumeFile']);
    
    return formData;
  }
  onSubmit() {
    console.log(this.assignFormData());
    
    if (this.assignFormData()) {
    
        this.submitted = true;
        this.loading = true;
       this._ApiService.savejobapplyperson(this.assignFormData())
          .subscribe(data => {
            if(data)
            {
            console.log(data);
              this.router.navigate(['/landing']);
            }            
          });
      
    }
    else {
      console.log("Enter correct Data");

    }
  }

}
