import { Component } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
recipes:any[]=[
  {title:'Grilled Salmon with Asparagus',img:'r1',type:'Mediterranean Cuisine',stars:4},
  {title:'Quinoa and Black Bean Salad',img:'r2',type:'South American Cuisine',stars:5},
  {title:' Chickpea and Spinach Stew',img:'r3' ,type:'Middle Eastern Cuisine',stars:4.8},

  {title:' Spaghetti Carbonara',img:'r4' ,type:'Italian Cuisine',stars:4.9},
  {title:'  Chicken Tikka Masala',img:'r5' ,type:'Indian Cuisine',stars:4.6},
  {title:' Sushi Rolls with Sauce',img:'r6' ,type:'Japanese Cuisine',stars:4.6},
]
}
