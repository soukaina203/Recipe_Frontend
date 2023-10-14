import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  standalone: true,
  imports:[
    CommonModule,
    RouterModule
  ]
})
export class UpdateComponent implements OnInit {
readonly route = inject(ActivatedRoute);



  constructor() { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

  }

}
