import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  @Input() RecipeDetails: Recipe;


  constructor(private recipeService: RecipeService) {
  }

  AddToShoppingList() {
    this.recipeService.AddIngredientsToShoppingList(this.RecipeDetails.ingredients);
  }

}
