import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-itservice',
  templateUrl: './itservice.component.html',
  styleUrls: ['./itservice.component.css'],
  providers: [NgbCarouselConfig]
})
export class ItserviceComponent implements OnInit {
  
  constructor(config: NgbCarouselConfig) { 
    config.interval = 500;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
  }
  

  ngOnInit(): void {
  }
  imageObject = [{
    image: '../../assets/images/itservice/allied.png',
    thumbImage: '../../assets/images/itservice/allied.png',
    title: 'Allied Enterprises'
}, {
    image: '../../assets/images/itservice/goldncart.png',
    thumbImage: '../../assets/images/itservice/goldncart.png',
    title: 'Gold n cart handcrafted Jewels'
}, {
    image: '../../assets/images/itservice/platez.png',
    thumbImage: '../../assets/images/itservice/platez.png',
    title: 'Platez'
},{
    image: '../../assets/images/itservice/rafale.png',
    thumbImage: '../../assets/images/itservice/rafale.png',
    title: 'Rafale Steel'
}, {
    image: '../../assets/images/itservice/vpr.png',
    thumbImage: '../../assets/images/itservice/vpr.png',
    title:'VPR Construction'
}];

}
