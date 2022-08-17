import { Injectable } from "@angular/core";
import { RecipesService } from "../recipes/recipes.service";
import { HttpClient, HttpParams } from "@angular/common/http"
import { Recipe } from "../recipes/recipes.module";
import { AuthService } from "../auth/auth.service";
import { pipe } from "rxjs";

import { map } from "rxjs-compat/operator/map";
import { ingrediant } from "./ingrediant.module";
import { take } from "rxjs/operators";
@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private recipes: RecipesService, private http: HttpClient, private authservice: AuthService) { }

    storeData() {
        const recipes = this.recipes.getServiceRecipe();
        return this.http.put('https://recipes-f6118-default-rtdb.firebaseio.com/recipes.json', recipes)
    }
    fetchData() {

       return this.http.get<Recipe[]>('https://recipes-f6118-default-rtdb.firebaseio.com/recipes.json')
          
    }

}