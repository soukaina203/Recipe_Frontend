import { CommonModule } from '@angular/common';
import { Component, NgModule, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,


  ]
})
export class UpdateComponent {
  private subscription: Subscription; // Declare a private subscription property
  private userService = inject(UserService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  userDetail: User;
  file: File;
  isUpload: boolean = false
  id: string | null = this.route.snapshot.paramMap.get('id');



  uploadSection = () => {
    this.isUpload ? this.isUpload = false : this.isUpload = true;

  }
  onFileSelected = (event: any) => {
    const fd = new FormData()
    this.file = event.target?.files[0]
    fd.append('photo',this.file)
    this.userService.uploadImg(fd,this.id).subscribe((d) => {
      console.log(d)
    })

  }

  handleUpdate(form: any) {

    this.userDetail = {
      ...this.userDetail,
      name: form.controls.name.value,
      email: form.controls.email.value,
      password: form.controls.password.value,
      country: form.controls.country.value,
      city: form.controls.city.value,

    }
    this.subscription = this.userService.updateItem(this.id, this.userDetail)
      .subscribe(d => {
        if (d === "great") {
          this.router.navigate(['/admin/user'])
        }
      })
  }

  ngOnInit(): void {
    if (this.id !== null) {
      this.subscription = this.userService.getItem(this.id).subscribe((d) => {
        this.userDetail = d
        console.log(d)
      });
    } else {
      console.log('hiiii');
    }
  }
  ngOnDestroy() {
    // Unsubscribe from the subscription to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
