import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../ShoppingList.Service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  testValue:string="xxx1";
  @ViewChild('ItemNameInput',{static:false})NewShoppingItemName:ElementRef;
  @ViewChild('ItemAmountInput',{static:false})NewShoppingItemAmount:ElementRef;

  constructor(private shoppingListService:ShoppingListService){}


  onAddItem()
  {  

    const itemAmount:number=this.NewShoppingItemAmount.nativeElement.value;
    const itemName:string=this.NewShoppingItemName.nativeElement.value;
    const ingrediantItem=new Ingredient(itemName,itemAmount);
    this.shoppingListService.addIngredient(ingrediantItem);

    this.testValue="yyyy";
  }

}
