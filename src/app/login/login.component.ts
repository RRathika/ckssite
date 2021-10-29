import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username?:any;
password?:any;
response?:any;
successalert?:boolean=false;
warnalert?:boolean=false;
dangeralert?:boolean=false;
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }
  loginForm = this.formBuilder.group({
    name: ['',Validators.required],
    password: ['', Validators.required]
  });
  onSubmit(): void {
   
   if( this.loginForm.valid){
     this.username=this.loginForm.value['name'];
     this.password=this.loginForm.value['password'];
     if((this.username=='admin')&&(this.password=="Pass@123")){
       localStorage.setItem('name',this.username);
       this.successalert=true;
      this.response='success';
    this.router.navigateByUrl('/admin/dashboard')
     }
     else{
       this.warnalert=true;
      this.response='warning'; 
     }    
   }
   else{
     this.dangeralert=true;
    this.response='danger'; 
   }
  }
}
