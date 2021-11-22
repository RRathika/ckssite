import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  options() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-warning'
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons.fire(
    {
      showCloseButton: true,
      title: 'Are you sure?',
      text: 'We will move to another website',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      reverseButtons: false
    }
    ).then((result) => {
      if (result.value) {
        window.open("https://careerin.co.in/", "_blank");
      }
      else{
      console.log('cancel');
      }
    });
  }
}
