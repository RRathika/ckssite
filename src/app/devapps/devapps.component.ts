import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, animate, style } from '@angular/animations'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ckssiteApiService } from '../services/ckssite.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-devapps',
  templateUrl: './devapps.component.html',
  styleUrls: ['./devapps.component.css'],
  //providers: [NgbCarouselConfig]
  animations: [
    trigger('scale', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class DevappsComponent implements OnInit {
  current = 0;
  message: any;
  ideashareForm:FormGroup=this.formBuilder.group({
    Name: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Subject:'Share Data',
    YourMessage: ['', [Validators.required]]
  })
  constructor(private formBuilder: FormBuilder, private router: Router, private _ApiService: ckssiteApiService) { }
  img_list = [
    { 'image': 'https://picsum.photos/600/400/?image=0','title':'Find My Way','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}, 
    { 'image':'https://picsum.photos/600/400/?image=1','title':'My Career','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}, 
    { 'image':'https://picsum.photos/600/400/?image=2','title':'File my Vat','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
  ];
  ngOnInit(): void {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 6000);
  }
  onSubmit() {
    
    if(this.ideashareForm.valid){
      this._ApiService.savecontactdetails(this.ideashareForm?.value)
      .subscribe(data => {
        this.ideashareForm.reset();
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
