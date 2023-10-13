import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
users:object[];
  constructor(
  private  userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((res)=>{
      this.users=res
    })
  }

}
