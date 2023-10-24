import { Component, inject } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  user:User
  userData=inject(AuthService)
  links:any[]=[
    {name:'Profile',icon:'person'},
    {name:'Users',icon:'group'},
    {name:'Recipes',icon:'restaurant'},
    {name:'Categories',icon:'category'},
    {name:'Plans',icon:'list_alt'},

]

  ngOnInit(): void {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      this.user = JSON.parse(userDataString);
    }}

}
