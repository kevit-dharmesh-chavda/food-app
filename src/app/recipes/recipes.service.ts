import { EventEmitter, Injectable } from "@angular/core";
import { ingrediant } from "../shared-folder/ingrediant.module";
import { Recipe } from "./recipes.module"
import { ShoppingListService } from "../shoppinglist/shopping-list.service"
@Injectable() 
export class RecipesService{
   selectedRecipe = new EventEmitter<Recipe>();
   
   recipes: Recipe[] = [new Recipe('A test', 'This is Simple Test', 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg',
    [new ingrediant('mirch',1),new ingrediant('milk',2)]),
  new Recipe('A test1', 'This is new Test', 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg',[new ingrediant('mirch',1),new ingrediant('milk',2)] )]
  
  constructor(private shppingservice:ShoppingListService) {}

   
  getServiceRecipe(){
    return this.recipes;
  } 
  addingridianttoshopping(ingrdiant : ingrediant[]){
    this.shppingservice.addIngridiantsfromrecipe(ingrdiant);
   }
}