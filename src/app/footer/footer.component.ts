import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  dynamiccolor: string | undefined;
  currentRoute!: string;

  constructor(private router: Router) {
    //console.log(router.url);
    this.currentRoute = router.url;
    if (this.currentRoute == '/consulting') {
      this.dynamiccolor = "#79a85a";
    }
    else if(this.currentRoute == '/itservice'){
      this.dynamiccolor = "#25536a";
    }
    else if(this.currentRoute == '/devapps'){
      this.dynamiccolor = "#a85a96";
    }
    else {
      this.dynamiccolor = "black";
    }
  }
}
