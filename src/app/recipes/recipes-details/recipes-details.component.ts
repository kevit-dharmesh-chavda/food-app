import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipes.module';
import { RecipesService } from '../recipes.service'
@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  passrecipedetails : Recipe;
  id:number;
  constructor(private recipesService : RecipesService , private routes : ActivatedRoute , private route : Router) { }

  ngOnInit(): void {
   this.routes.params.subscribe(
      (params:Params)=>{
        this.id = params['id'];
        this.passrecipedetails = this.recipesService.getRecipe(this.id);
      }
   )
 

  }

  onAdd(){
   this.recipesService.addingridianttoshopping(this.passrecipedetails.ingridiant) ; 
  }


}
