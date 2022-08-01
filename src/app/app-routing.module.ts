import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesStartingComponent } from './recipes/recipes-starting/recipes-starting.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeseditComponent } from './recipes/recipesedit/recipesedit.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

const routes: Routes = [
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent , children:[
    { path : '' ,component:RecipesStartingComponent },
    { path: 'new' , component:RecipeseditComponent },
    { path : ':id' , component:RecipesDetailsComponent },
    { path:':id/edit' , component:RecipeseditComponent }  ]},
  {path : 'shoppinglist', component:ShoppinglistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
