import { Injectable } from "@angular/core";
import { RecipesService } from "../recipes/recipes.service";
import { HttpClient } from "@angular/common/http"
import { Recipe } from "../recipes/recipes.module";
import { map } from "rxjs-compat/operator/map";
@Injectable({
    providedIn:'root'
})
export class DataStorageService{
    constructor(private recipes:RecipesService,private http:HttpClient){}
    
    storeData(){
         const recipes = this.recipes.getServiceRecipe();
         this.http.put('https://recipes-f6118-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(response=>{
            // console.log(response)
         })
    }
    fetchData(){
        this.http.get<Recipe[]>('https://recipes-f6118-default-rtdb.firebaseio.com/recipes.json')
        .subscribe(
            response =>{
                this.recipes.setRecipes(response);
                
            }
        )
    }  
     
}