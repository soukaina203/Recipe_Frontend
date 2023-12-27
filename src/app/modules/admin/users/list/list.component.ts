import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'table-basic-example',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    CommonModule

  ]
})
export class ListComponent {
  displayedColumns: string[] = ['id','photo', 'name', 'email','city','country', 'actions'];
  filterList: string[] = ['city', 'country'];

  deleteMessage = ""
  dataSource: User[];
  selectedElementId: number | null = null;

  distinctCities:any[]=[]
  distinctCountries:any[]=[]

  userService = inject(UserService)

  isOpen:boolean=false
  ngOnInit(): void {
    this.userService.getAll().subscribe((res:any) => {
      this.dataSource = res.users
      this.distinctCities=res.distinctCities
      this.distinctCountries=res.distinctCountries
      console.log(res)

    })
  }
  filterProcess=(item:string)=>{
    this.userService.getAll().subscribe((res:any) => {

    })
  }
  handleOptions=(id:number)=>{
    this.selectedElementId = id;
  this.isOpen = this.selectedElementId === id;

  }
  deleteItem = (id: number) => {
    this.userService.deleteItem(id).subscribe((res) => {
      res === "deleted" ? this.deleteMessage = "The User was deleted successfully" :
        this.deleteMessage = ""

    })
    this.userService.getAll().subscribe((e) => {
      this.dataSource = e
    })
  }
}
