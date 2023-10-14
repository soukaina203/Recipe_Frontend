import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly routes  = [
    // {name: 'Home', route: '/admin/user'},
    {name: 'Users', route: '/admin/user'},
    {name: 'singUp', route: '/singUp'},
    {name: 'login', route: '/login'},
  ]
  title = 'recipe';
}
