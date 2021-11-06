import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobnameForm } from '../Interfacelist/applyform';
import { ckssiteApiService } from '../services/ckssite.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-jobnameadd',
  templateUrl: './jobnameadd.component.html',
  styleUrls: ['./jobnameadd.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class JobnameaddComponent implements OnInit {
  formData: any = new FormData();
  // jobnameForm?: JobnameForm[];
  loading = false;
  submitted = false;
  id?:number;
  trimdata?: any;
  final: any;
  result: any;
  constructor( private formBuilder: FormBuilder, private router: Router,private _ApiService: ckssiteApiService) { }

  ngOnInit(): void {
    this._ApiService.jobEdit.subscribe(response=>{
      this.result=response;
      console.log(this.result)
      if(response){        
        //this.jobnameForm.patchValue(response);
        this.id=response.JOB_ID;
        console.log(this.id);
        this.jobnameForm.patchValue({
          Job_Description:this.result.Job_Description,
          Job_Prefered_Skill:this.result.Job_Prefered_Skill
        })
      }
    })
  }

  // config = {
  //   placeholder: '',
  //   tabsize: 2,
  //   height: '200px',
  //   uploadImagePath: '/api/upload',
  //   toolbar: [
  //       ['misc', ['codeview', 'undo', 'redo']],
  //       ['style', ['bold', 'italic', 'underline', 'clear']],
  //       ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
  //       ['fontsize', ['fontname', 'fontsize', 'color']],
  //       ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
  //       ['insert', ['table', 'picture', 'link', 'video', 'hr']]
  //   ],
  //   fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  // }
  jobnameForm: FormGroup = this.formBuilder.group({
    Job_Title:['',Validators.required],
    Job_Description:['',Validators.required],
    Job_Prefered_Skill:['',Validators.required]
  })
submit(){
  if(this.jobnameForm.valid)
  {
    this.trimdata=this.jobnameForm.value['Job_Prefered_Skill'];
    this.final=this.trimdata.replace(/\s/g, "");;
    // console.log(this.final);
    this.jobnameForm.value['Job_Prefered_Skill']=this.final;
    if(this.id)
    {
      this._ApiService.updatejobname(this.id,this.jobnameForm?.value).subscribe(data=>{
        console.log(data);
        alert('Data updated successfully');
        this.router.navigateByUrl('/admin/jobnamelist');
      })
    }
    else{
    this._ApiService.savejobname(this.jobnameForm?.value).subscribe(data=>{
      console.log(data);
      alert('Data saved successfully');
      this.jobnameForm.reset(); 
    })
  }
  }
}
}
