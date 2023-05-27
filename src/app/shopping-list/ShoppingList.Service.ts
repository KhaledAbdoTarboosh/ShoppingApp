import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService
{
    newIngredient=new EventEmitter<Ingredient[]>();

    // ingredients:Ingredient[]=[
    //     new Ingredient('Apples',5),
    //     new Ingredient('Tomatos',3)
    //   ];

    ingredients:Ingredient[]=[];


    constructor()
    {

    }

    getIngredients()
    {
        return this.ingredients.slice();
    }

    addIngredient(ing:Ingredient)
    {
        this.ingredients.push(ing);
        this.newIngredient.emit(this.ingredients.slice());
    }

    AddIngredientsToShoppingList(ingredients:Ingredient[])
    {
   
        // for(let ingredient of ingredients)
        // {
        //     this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);

        this.newIngredient.emit(this.ingredients.slice());
    }
}