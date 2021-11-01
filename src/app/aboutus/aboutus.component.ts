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
      "image": "https://i.picsum.photos/id/582/536/354.jpg?hmac=yl_995o4eDi7GMlFYMZcpu_DHFYjuA0g83BuhpHyGiI",
      "thumbImage": "https://i.picsum.photos/id/582/536/354.jpg?hmac=yl_995o4eDi7GMlFYMZcpu_DHFYjuA0g83BuhpHyGiI"
    },
    {
      "image": "https://i.picsum.photos/id/392/536/354.jpg?hmac=pfwZXOXi7mvSPp3AmAeieDhYPDGHv_1e5UCWo-t4McI",
      "thumbImage": "https://i.picsum.photos/id/392/536/354.jpg?hmac=pfwZXOXi7mvSPp3AmAeieDhYPDGHv_1e5UCWo-t4McI"
    },
    {
      "image": "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0",
      "thumbImage": "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
    },
    {
      "image": "https://i.picsum.photos/id/889/536/354.jpg?hmac=Ed5MAlDO9NIMLSNWrV0nvfDqZfUEzSf9cU6Fc9S_qSM",
      "thumbImage": "https://i.picsum.photos/id/889/536/354.jpg?hmac=Ed5MAlDO9NIMLSNWrV0nvfDqZfUEzSf9cU6Fc9S_qSM"
    },
    {
      "image": "https://i.picsum.photos/id/922/536/354.jpg?hmac=i5eN3Vt4D9V_ZLK3Wjc7OFW7J9Gj60gZy6FSNl9ycN8",
      "thumbImage": "https://i.picsum.photos/id/922/536/354.jpg?hmac=i5eN3Vt4D9V_ZLK3Wjc7OFW7J9Gj60gZy6FSNl9ycN8"
    },
    {
      "image": "https://i.picsum.photos/id/168/889/536.jpg?hmac=3oSZ237Va2MomQuC9nnE7Z2drQYJOQiOES2xb3XBZ_Y",
      "thumbImage": "https://i.picsum.photos/id/168/889/536.jpg?hmac=3oSZ237Va2MomQuC9nnE7Z2drQYJOQiOES2xb3XBZ_Y"
    },
    {
      "image": "https://i.picsum.photos/id/110/889/536.jpg?hmac=SW0tF36OSr4Pt8MBxWuTacbCUISxKad_kKNhIcWkEPU",
      "thumbImage": "https://i.picsum.photos/id/110/889/536.jpg?hmac=SW0tF36OSr4Pt8MBxWuTacbCUISxKad_kKNhIcWkEPU"
    },
    {
      "image": "https://i.picsum.photos/id/916/889/536.jpg?hmac=Vpy97Y1IPFVIZxWmh0O3p-hGT6dx1jKwIyY2gkz3kAw",
      "thumbImage": "https://i.picsum.photos/id/916/889/536.jpg?hmac=Vpy97Y1IPFVIZxWmh0O3p-hGT6dx1jKwIyY2gkz3kAw"
    },
    {
      "image": "https://i.picsum.photos/id/851/889/536.jpg?hmac=5iCNj4Z0LAI3nlQilYE8qafE14mkao8X-h59spAF9RU",
      "thumbImage": "https://i.picsum.photos/id/851/889/536.jpg?hmac=5iCNj4Z0LAI3nlQilYE8qafE14mkao8X-h59spAF9RU"
    },
    {
      "image": "https://i.picsum.photos/id/305/889/536.jpg?hmac=y3oUGU8B9yzK4L-LeBafoH8AzZ0O29eDsx7tenR_EyA",
      "thumbImage": "https://i.picsum.photos/id/305/889/536.jpg?hmac=y3oUGU8B9yzK4L-LeBafoH8AzZ0O29eDsx7tenR_EyA"
    },
    {
      "image": "https://i.picsum.photos/id/584/889/536.jpg?hmac=dghSCV_0viTgB_L9T5wVowf6ghuKVENHgP_NrA7NANQ",
      "thumbImage": "https://i.picsum.photos/id/584/889/536.jpg?hmac=dghSCV_0viTgB_L9T5wVowf6ghuKVENHgP_NrA7NANQ"
    },
    {
      "image": "https://i.picsum.photos/id/919/889/536.jpg?hmac=QF3tfAuf7uq_-ER5lEKGmdnbBDEWycZVPbPms8Ap9_M",
      "thumbImage": "https://i.picsum.photos/id/919/889/536.jpg?hmac=QF3tfAuf7uq_-ER5lEKGmdnbBDEWycZVPbPms8Ap9_M"
    },
    {
      "image": "https://i.picsum.photos/id/859/889/536.jpg?hmac=Y916ejeqOlQW7zdKF0y7GBsbGM_Gv2-CdjG5XpqUdrE",
      "thumbImage": "https://i.picsum.photos/id/859/889/536.jpg?hmac=Y916ejeqOlQW7zdKF0y7GBsbGM_Gv2-CdjG5XpqUdrE"
    },
    {
      "image": "https://i.picsum.photos/id/719/889/536.jpg?hmac=kxPet_1Ao9vqO526pnb7VmdshgcR8I3rUbnGAtszznM",
      "thumbImage": "https://i.picsum.photos/id/719/889/536.jpg?hmac=kxPet_1Ao9vqO526pnb7VmdshgcR8I3rUbnGAtszznM"
    },
    {
      "image": "https://i.picsum.photos/id/242/889/536.jpg?hmac=SfZPauEXOhFk2cWueDjqkE2ctU7IUSh0kdJKGELCudA",
      "thumbImage": "https://i.picsum.photos/id/242/889/536.jpg?hmac=SfZPauEXOhFk2cWueDjqkE2ctU7IUSh0kdJKGELCudA"
    }
  ]
  

}
