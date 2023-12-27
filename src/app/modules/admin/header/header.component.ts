import { Component, NgZone, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngZone =inject(NgZone )
  // function helps to run code within Angular's zone and should ensure that the change detection is triggered correctly
isOpen:boolean=false;
dropdown:boolean=false;
mode = new FormControl('over' as MatDrawerMode);

constructor() {
  console.warn('HeaderComponent >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
}
Dropdown=()=>{
this.dropdown?this.dropdown=false:this.dropdown=true
}
Menu=(state:string)=>{


  this.ngZone.run(() => {
    this.isOpen = state === 'open';
    console.log(state);

})}
}
