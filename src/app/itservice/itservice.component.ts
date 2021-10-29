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

}
