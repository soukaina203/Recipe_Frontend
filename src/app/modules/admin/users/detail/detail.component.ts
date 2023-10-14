import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  standalone:true,
  imports: [
    CommonModule,
  ]
})
export class DetailComponent implements OnInit {
user:User;
  constructor(  private  userService:UserService,
    private route: ActivatedRoute

    ) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      id!==null? this.userService.getItem(id).subscribe((res)=>{
        console.log(res)
      }):console.log('not found')

    }

}
