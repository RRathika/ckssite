import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutusComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {    
  }
  slides = [{'image': '../../assets/images/consulting/adecco-india.png'}, {'image': '../../assets/images/consulting/HR.jpg'},{'image': '../../assets/images/consulting/nirasystem.jfif'}, {'image': '../../assets/images/consulting/test-leaf.png'}];
  //imageObject = [{'image': '../../assets/images/consulting/adecco-india.png'}, {'image': '../../assets/images/consulting/HR.jpg'},{'image': '../../assets/images/consulting/nirasystem.jfif'}, {'image': '../../assets/images/consulting/test-leaf.png'}]
  
  data=[
    {
      "image": "../../assets/images/clients/hrblock.jpg",
      "thumbImage": "../../assets/images/clients/hrblock.jpg"
    },
    {
      "image": "../../assets/images/clients/goldncart.png",
      "thumbImage": "../../assets/images/clients/goldncart.png"
    },
    {
      "image": "../../assets/images/clients/lagoon.png",
      "thumbImage": "../../assets/images/clients/lagoon.png"
    },
    {
      "image": "../../assets/images/clients/fairum.png",
      "thumbImage": "../../assets/images/clients/fairum.png"
    },
    {
      "image": "../../assets/images/clients/lelab.png",
      "thumbImage": "../../assets/images/clients/lelab.png"
    },
    {
      "image": "../../assets/images/clients/magunam.png",
      "thumbImage": "../../assets/images/clients/magunam.png"
    },
    {
      "image": "../../assets/images/clients/rig.png",
      "thumbImage": "../../assets/images/clients/rig.png"
    },
    {
      "image": "../../assets/images/clients/vpr.png",
      "thumbImage": "../../assets/images/clients/vpr.png"
    },
    {
      "image": "../../assets/images/clients/white.png",
      "thumbImage": "../../assets/images/clients/white.png"
    },
    {
      "image": "../../assets/images/clients/gnco.jpg",
      "thumbImage": "../../assets/images/clients/gnco.jpg"
    },
    {
      "image": "../../assets/images/clients/allied.jpg",
      "thumbImage": "../../assets/images/clients/allied.jpg"
    }
  ]
  

}
