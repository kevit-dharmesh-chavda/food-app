import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.module';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

 recipes: Recipe[];
 
  constructor(private recepeservice : RecipesService ) { }

  ngOnInit(): void {
    this.recipes =  this.recepeservice.getServiceRecipe();
  }

}
