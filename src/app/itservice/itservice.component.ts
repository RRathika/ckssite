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
    image: '../../assets/images/itservice/goldncart.jpg',
    thumbImage: '../../assets/images/itservice/goldncart.jpg',
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
},{
  Image:'../../assets/images/itservice/career.png',
  thumbImage: '../../assets/images/itservice/career.png',
  title:'Career In'
},
{
  Image:'../../assets/images/itservice/dotnet.jpg',
  thumbImage: '../../assets/images/itservice/dotnet.jpg',
  title:'Billing Management System'
},{
  Image:'../../assets/images/itservice/hms.jpg',
  thumbImage: '../../assets/images/itservice/hms.jpg',
  title:'Hospital Management System'
},
{
  Image:'../../assets/images/itservice/petrol.jpg',
  thumbImage: '../../assets/images/itservice/petrol.jpg',
  title:'Petrol Bulk Management System'
},
{
  Image:'../../assets/images/itservice/timber.jpg',
  thumbImage: '../../assets/images/itservice/timber.jpg',
  title:'Timber Management System'
},
{
  Image:'../../assets/images/itservice/indiancoin.jpg',
  thumbImage: '../../assets/images/itservice/indiancoin.jpg',
  title:'Indian Coin'
},
{
  Image:'../../assets/images/itservice/fcfleet.jpg',
  thumbImage: '../../assets/images/itservice/fcfleet.jpg',
  title:'FC fleet'
},
{
  Image:'../../assets/images/itservice/ayyablog.jpg',
  thumbImage: '../../assets/images/itservice/ayyablog.jpg',
  title:'Ayya blog'
},
{
  Image:'../../assets/images/itservice/hindusamayam.jpg',
  thumbImage: '../../assets/images/itservice/hindusamayam.jpg',
  title:'Hindu Samayam'
}];

}
