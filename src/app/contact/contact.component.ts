import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactForm } from '../Interfacelist/contactform';
import { ckssiteApiService } from '../services/ckssite.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  locationChosen = false;
  applyform?: ContactForm[];
  loading = false;
  submitted = false;
  id=0;
  message: any;
  contactForm: FormGroup = this.formBuilder.group({
    Id:[0],
    Name: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Subject: ['', Validators.required],
    YourMessage: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private _ApiService: ckssiteApiService) { }

  ngOnInit(): void {
  }  
  onSubmit() {
    if (this.contactForm.valid) {
    this.submitted = true;
    this.loading = true;
   this._ApiService.savecontactdetails(this.contactForm?.value)
      .subscribe(data => {
        this.contactForm.reset();
        if(data.status)
        {
          this.message='your message submitted successfully';
        }
      });
    }
    else {
      console.log("Enter correct Data");
    }
  }

}
