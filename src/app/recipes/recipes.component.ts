import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.module';
import { RecipesService } from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipesService]
})
export class RecipesComponent implements OnInit {
  
   singlerecepidetails:Recipe;
  constructor(private Recipeservice:RecipesService) { }

  ngOnInit(): void {
    this.Recipeservice.selectedRecipe.subscribe(
    (recipe:Recipe) =>{
      this.singlerecepidetails = recipe;
    }
   );
  }

}
