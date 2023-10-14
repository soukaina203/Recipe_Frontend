import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  standalone: true,
  imports:[
    CommonModule,
    RouterModule
  ]

})
export class ListComponent implements OnInit {
users:any[] = [];
  constructor(
  private  userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((res)=>{
      this.users=res
    })
  }

}
