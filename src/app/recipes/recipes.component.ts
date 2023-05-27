import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from '../shopping-list/ShoppingList.Service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {


  constructor(private recipeService: RecipeService,private shoppingListService:ShoppingListService) {


  }

  selectedRecipe: Recipe;

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe1: Recipe) => {
        this.selectedRecipe = recipe1;        
      }
    );
  }
}
