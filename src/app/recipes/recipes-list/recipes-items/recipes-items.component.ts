import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.module';
import { RecipesService } from '../../recipes.service';
@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.css']
})
export class RecipesItemsComponent implements OnInit {

  @Input() recipedata: Recipe;
  @Input() Index : number ; 

  constructor(private recipeservice: RecipesService) { }

  ngOnInit() {
    
  }


}