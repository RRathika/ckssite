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
  id = 0;
  name: any;
  jobForm: FormGroup = this.formBuilder.group({
    Name: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Mobile: ['', [Validators.required, Validators.minLength(10)]],
    Position: ['', Validators.required],
    Coverletter: ['', [Validators.required]],
    Resume: ['', [Validators.required]]
  });
  file: any;
  filterData: any[] = [];
  jobname: any;
  url: any;
  jobdata: any;
  jobdata1: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private _ApiService: ckssiteApiService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.name = data.get('name');
      this.jobname = this.name.replace("_", " ");
      this.loadjobdetail(this.jobname);
      this.loadjobpost(this.jobname);
    });
    this.url = window.location.href;
  }
  loadjobdetail(name: any) {
    this._ApiService.getbynamepost(name).subscribe(data => {
      this.jobdata = data;
    })
  }
  loadjobpost(name: any) {
    this._ApiService.getbynamejobdetail(name).subscribe(data => {
      this.jobdata1 = data;
    })
  }
  onSelectFile(event: any) {
    this.file = event;
    this.jobForm.value['Resume'] = event.target.files[0];
  }
  assignFormData() {
    var formData: any = new FormData();
    formData.append('Id', this.id);
    formData.append('Name', this.jobForm.value['Name']);
    formData.append('Email', this.jobForm.value['Email']);
    formData.append('Mobile', this.jobForm.value['Mobile']);
    formData.append('Position ', this.jobForm.value['Position']);
    formData.append('Coverletter', this.jobForm.value['Coverletter']);
    formData.append('Resume', this.jobForm.value['Resume']);
    return formData;
  }
  onSubmit() {
    if (this.assignFormData()) {

      this.submitted = true;
      this.loading = true;
      this._ApiService.savejobapplyperson(this.assignFormData())
        .subscribe(data => {
          if (data) {
            this.router.navigate(['/landing']);
          }
        });
    }
    else {
      console.log("Enter correct Data");

    }
  }

}
