import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
declare var $: any;
declare var require: any;
@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent implements OnInit {
  images: Array<any> = []
  constructor() { 
    
  }
  
  dummyComponent = FooterComponent;
  ngOnInit(): void {
  }
  dynamiccolor='#79a85a';
  
}
