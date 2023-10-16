import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  user:User
  features:string[]=['first Feature','Users','Recipes','Categories','plans','plans']

  ngOnInit(): void {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      this.user = JSON.parse(userDataString);
      console.log(this.user);
    }}
}
