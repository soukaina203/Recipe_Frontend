import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  user:User
  features=[
       {feature:'Create recipes',icon:'edit_square'}
      ,{feature:'Effortless User Management',icon:'hub'}
      ,{feature:'Manage your profile settings',icon:'settings'}
      ,{feature:"Know what's your users like",icon:'favorite'}
      ,{feature:"Master Your Task List",icon:'task_alt'}
      ,{feature:"Customize your categories & ingredients",icon:'tune'}
      ]
  ngOnInit(): void {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      this.user = JSON.parse(userDataString);
      console.log(this.user);
    }}
}
