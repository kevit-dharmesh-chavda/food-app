import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.module';
import { RecipesService } from '../recipes.service'
@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() passrecipedetails : Recipe;
  constructor(private recipesService : RecipesService) { }

  ngOnInit(): void {
  }
  onAdd(){
   this.recipesService.addingridianttoshopping(this.passrecipedetails.ingridiant) ; 
  }


}
