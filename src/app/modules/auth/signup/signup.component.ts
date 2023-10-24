import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
 user:User;
 error:string=""
 private router=inject(Router)
 private signupData=inject(AuthService)

  handleSignup=(form:any)=>{
    this.user={...this.user,email:form.controls.email,password:form.controls.password}

    this.signupData.signUp(this.user).subscribe((res)=>{
      if(res==="existed"){
        this.error="Email already existed"
      }else if(res==="success"){
        this.router.navigate(['/']);

      }
    })
  }
  ngOnInit(): void {

  }

}
