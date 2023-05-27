import { EventEmitter ,Injectable} from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/ShoppingList.Service";




@Injectable()
export class RecipeService {

    recipes: Recipe[] = [

        new Recipe(
            'Kabsa', 'it simply rice and checken',
            'https://c.ndtvimg.com/2021-04/9s8mb8no_chicken-kabsa_625x300_30_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675',
            [new Ingredient('Checken',1),new Ingredient('Rice',2)]
        ),
        new Recipe(
            'kubba',
            'it simply stuffed with meet', 'https://hsaa.hsobjects.com/h/menuitems/images/011/092/545/4fab7af2fc963f011717765a8447d93e-size1200.jpg',
            [new Ingredient('Meet',1),new Ingredient('Oil',2)]
        ),
        new Recipe(
            'shiekh mihshi', 'it simply stuffed with meet',
            'https://elmqal.com/wp-content/uploads/2021/01/%D8%B4%D9%8A%D8%AD-%D8%A7%D9%84%D9%85%D8%AD%D8%B4%D9%8A.jpg',
            []
        )
    ];

    selectedRecipe = new EventEmitter<Recipe>();

    constructor(private shoppingListService:ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    AddIngredientsToShoppingList(ingredients:Ingredient[])
    {
        this.shoppingListService.AddIngredientsToShoppingList(ingredients);
        
    }


}