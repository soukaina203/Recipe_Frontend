import { Component, inject } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { Recipe } from 'src/app/shared/models/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  // search input
  search='';
  recipes: Recipe[] = [];

  recipeService = inject(RecipeService);
  // Filter variables
  Categories: Category[];
  Types: any[];

  isFound:boolean=false
  // Filter Groupes
  CategoryGroupes: any;
  TypesGroupes: any;
  CookingTimeGroupes: any;

  mainRecipes: Recipe[];
  parmanentRecipes: Recipe[];

  expansionPanel: any[];
  ngOnInit(): void {
    this.recipeService.fetchData().subscribe((recipes) => {
      this.recipes = recipes;
    })

    this.FilteredRecipes()


  }
  handleSearch=()=>{
this.recipeService.SearchRecipe(this.search).subscribe((res)=>{
  console.log(res)
  this.mainRecipes=res;
})
  }

  FilteredRecipes = () => {
    this.recipeService.FilteredRecipes().subscribe((res) => {

      // main recipes of the welcome page
      this.parmanentRecipes=res.mainRecipes
      this.mainRecipes = res.mainRecipes;
      //distinct types
      this.Categories = res.allCategories;
      this.Types = res.distinctTypes;
      // Groupes
      this.CategoryGroupes = res.categoriesGroupes;
      this.CookingTimeGroupes = res.recipesByCookingTimeGroupes;
      this.TypesGroupes = res.typesGroupes;
      console.log(this.CategoryGroupes)

    })
  }
  // Category filter
  HandleFiltersCategory( idOfCategory: any) {
    Object.keys(this.CategoryGroupes).forEach((key) => {
      if (idOfCategory == key) {
        this.mainRecipes = this.CategoryGroupes[key];
        this.isFound=true
      }

    });
    if(this.isFound===false){
      this.mainRecipes=[];

    }
    if(idOfCategory===0){
       this.mainRecipes=this.parmanentRecipes;
    }
    this.isFound=false

  }

  allRecipes(){
    this.mainRecipes=this.parmanentRecipes;
  }
// Types filter

HandleFiltersTypes(type:string){

  Object.keys(this.TypesGroupes).forEach((key:string)=>{
    if(type==key){

      this.mainRecipes=this.TypesGroupes[key]
    }
  })
}
HandleFiltersTiming(interval:string){
  // lessThan10 lessThan30 greaterThan30
  Object.keys(this.CookingTimeGroupes).forEach((key:string)=>{
    if(interval===key){
      this.mainRecipes=this.CookingTimeGroupes[key]
    }
  })
}
  Delete = (id: number) => {
    this.recipeService.DeleteData(id).subscribe((recipes) => {
      this.recipes = recipes
    });
  };
}
