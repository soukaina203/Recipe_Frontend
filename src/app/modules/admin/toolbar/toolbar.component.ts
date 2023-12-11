import { Component, NgZone, inject } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  user:User
  ngZone =inject(NgZone)
  isOpen:boolean=false;
  dropdown:boolean=false;

  userData=inject(AuthService)
  links:any[]=[
    {name:'Profile',icon:'person'},
    {name:'Users',icon:'group'},
    {name:'Recipes',icon:'restaurant'},
    {name:'Categories',icon:'category'},
    {name:'Plans',icon:'list_alt'},

]
Menu=(state:string)=>{


  this.ngZone.run(() => {
    this.isOpen = state === 'open';
    console.log(state);

})}
Dropdown=()=>{
this.dropdown?this.dropdown=false:this.dropdown=true
}

  ngOnInit(): void {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      this.user = JSON.parse(userDataString);
    }}

}
