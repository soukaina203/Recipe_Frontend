import { Component, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
   ngZone =inject(NgZone)
  // function helps to run code within Angular's zone and should ensure that the change detection is triggered correctly
isOpen:boolean=false;
Menu=(state:string)=>{


  this.ngZone.run(() => {
    this.isOpen = state === 'open';
    console.log(state);

})}
}
