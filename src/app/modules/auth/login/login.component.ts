import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  user: User;
  error: string = '';
  loginData=inject(AuthService)
  router=inject(Router)
  constructor() {
    this.user=new User;

  }
  handleLogin = () => {
    this.loginData.login(this.user).subscribe((res) => {
      console.log(res.user);
      if (res.status === 'error') {
        this.error = 'The Email or the password is incorrect';
      } else {
        localStorage.setItem('token', res.token);
        const userData = JSON.stringify(res.user); // Convert to JSON string
        localStorage.setItem('user', userData);

        this.router.navigate(['admin/dashbord/']);
      }
    });
  };

  ngOnInit(): void {}
}
