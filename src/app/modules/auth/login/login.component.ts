import { Component, NgModule, OnInit, inject } from '@angular/core';
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

  handleLogin = (form:any) => {
    this.user={...this.user,email:form.controls.email.value,
      password:form.controls.password.value}
    // console.log(form.controls.email.value)
    this.loginData.login(this.user).subscribe((res) => {
      console.log(res.status)
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
