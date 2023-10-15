import { Component } from '@angular/core';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
infos:any[]=[
  {title:'Menu Links',link:['Home','About','Behind','Ranking','Contact']},
  {title:'Our Service',link:['Web Design','Web Development','Marketing','Product Management',
  'Graphic Design']},
  {title:'Information',link:['About Us','Delivery Information',
  'Privacy Policy','Terms ','Conditions']},
]
}
