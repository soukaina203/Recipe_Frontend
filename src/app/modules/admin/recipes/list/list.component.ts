import { Component, inject } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  recipes: Recipe[] = [];
  recipeService = inject(RecipeService);

  ngOnInit(): void {
    this.recipeService.fetchData().subscribe((recipes)=>{
      this.recipes=recipes;
    })
  }
  Delete = (id: number) => {
    this.recipeService.DeleteData(id).subscribe(() => {
    });
  };
}
