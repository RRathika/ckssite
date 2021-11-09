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
  data=[
    
    {
      "image": "../../assets/images/consulting/adecco-india.png",
      "thumbImage": "../../assets/images/consulting/adecco-india.png"
    },
    {
      "image": "../../assets/images/consulting/HR.jpg",
      "thumbImage": "../../assets/images/consulting/HR.jpg"
    },
    {
      "image": "../../assets/images/consulting/nirasystem.jfif",
      "thumbImage": "../../assets/images/consulting/nirasystem.jfif"
    },
    {
      "image": "../../assets/images/consulting/niyama.jpg",
      "thumbImage": "../../assets/images/consulting/niyama.jpg"
    },
    {
      "image": "../../assets/images/consulting/test-leaf.png",
      "thumbImage": "../../assets/images/consulting/test-leaf.png"
    }
  ]
  
}
