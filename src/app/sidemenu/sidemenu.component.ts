import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  backgroundtop: string | undefined;
  backgroundbottom: string | undefined;
  currentRoute!: string;

  constructor(private router: Router) {
    this.currentRoute = router.url;
    if (this.currentRoute == '/consulting') {
      this.backgroundtop = "#79a85a";
    }
    else if(this.currentRoute == '/itservice'){
      this.backgroundtop = "#25536a";
    }
    else if(this.currentRoute == '/devapps'){
      this.backgroundtop = "#a85a96";
    }
    else {
      this.backgroundtop = "#000";
    }
  }
  consult(){
    this.router.navigate(['/consulting'])
  .then(() => {
    window.location.reload();
  });
  }
  itservice(){
    this.router.navigate(['/itservice'])
  .then(() => {
    window.location.reload();
  });
  }

}
