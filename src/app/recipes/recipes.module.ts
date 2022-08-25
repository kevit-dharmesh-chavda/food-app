import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared-folder/shared.module";
import { RecipesDetailsComponent } from "./recipes-details/recipes-details.component";
import { RecipesItemsComponent } from "./recipes-list/recipes-items/recipes-items.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesRoutingModule } from "./recipes-routong.module";
import { RecipesComponent } from "./recipes.component";
import { RecipeseditComponent } from "./recipesedit/recipesedit.component";

@NgModule({
    declarations:[
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailsComponent,
        RecipesItemsComponent,
        RecipeseditComponent,
    ],
    imports:[
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        RecipesRoutingModule,
    ]
   
})
export class RecipesModule{

}