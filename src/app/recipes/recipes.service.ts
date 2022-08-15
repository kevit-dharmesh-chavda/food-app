import {  Injectable } from "@angular/core";
import { ingrediant } from "../shared-folder/ingrediant.module";
import { Recipe } from "./recipes.module"
import { ShoppingListService } from "../shoppinglist/shopping-list.service"
import { Subject } from "rxjs";
@Injectable() 
export class RecipesService{
   selectedRecipe = new Subject<Recipe>();
   
   recipes: Recipe[] = [new Recipe('Burger', 'This is Simple Test', 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg',
    [new ingrediant('mirch',1),new ingrediant('milk',2)]),
  new Recipe('Cheeze Kadai', 'This is new Test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8HOYYpfX5sGSFXj4HoTAkNQ0UVWbsDr0fg&usqp=CAU',[new ingrediant('mirch',1),new ingrediant('milk',2)] )]
  
  constructor(private shppingservice:ShoppingListService) {}
   
  getServiceRecipe(){
    return this.recipes;
  } 
  getRecipe(index:number){
    return this.recipes[index];
  }
  addingridianttoshopping(ingrdiant : ingrediant[]){
    this.shppingservice.addIngridiantsfromrecipe(ingrdiant);
   }
   updaterecipe(index:number,recipe:Recipe){
       this.recipes[index]=recipe;
   }
   addNewRecipe(recipe:Recipe){
    this.recipes.push(recipe);
   }
   deleteRecipe(index:number){
    this.recipes.splice(index,1);
   }
}