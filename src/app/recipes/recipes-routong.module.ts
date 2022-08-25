import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesDetailsComponent } from "./recipes-details/recipes-details.component";
import { RecipesStartingComponent } from "./recipes-starting/recipes-starting.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeseditComponent } from "./recipesedit/recipesedit.component";

const routes : Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent , children:[
      { path : '' ,component:RecipesStartingComponent },
      { path: 'new' , component:RecipeseditComponent },
      { path : ':id' , component:RecipesDetailsComponent },
      { path:':id/edit' , component:RecipeseditComponent }  ]},
]  ;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule{


}