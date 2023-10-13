import { Component, OnInit } from '@angular/core';
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
  constructor(private loginData: AuthService, private router: Router) {
    this.user=new User;

  }
  handleLogin = () => {
    console.log(this.user)
    this.loginData.login(this.user).subscribe((res) => {
      if (res.status === 'error') {
        this.error = 'The Email or the password is incorrect';
      } else {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', res.user);

        this.router.navigate(['users']);
      }
    });
  };
  ngOnInit(): void {}
}
