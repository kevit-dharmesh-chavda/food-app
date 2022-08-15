import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipesedit',
  templateUrl: './recipesedit.component.html',
  styleUrls: ['./recipesedit.component.css'],
  
  })
export class RecipeseditComponent implements OnInit {
  editOrNot: boolean = false;
  id: number;
  recipeform: FormGroup;

  constructor(private routes: ActivatedRoute,private recipe:RecipesService, private route:Router) { }

  ngOnInit(): void {
    this.routes.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.id != null) {
        this.editOrNot = true;
      }
      else {
        this.editOrNot = false;
      }
      this.initiate();
       })
  }

  onSubmit(){
      if(this.editOrNot){
        this.recipe.updaterecipe(this.id,this.recipeform.value);
    
      }
      else{
        this.recipe.addNewRecipe(this.recipeform.value);
      }
      this.onClear();
    
  }
   onClear(){
     this.route.navigate(['../'],{relativeTo:this.routes})
   }
  

  addIngrdiant(){
      (<FormArray>this.recipeform.get('ingridiant')).push(
        new FormGroup({
          'name':new FormControl(null,Validators.required),
          'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
      )
  }
  initiate() {
   let recipename = '';
   let recipeUrl = '';
   let recipeDescription ='';
   let ingrediant = new FormArray([])
    if (this.editOrNot) {
      recipename = this.recipe.getRecipe(this.id).name;
      recipeDescription = this.recipe.getRecipe(this.id).description;
      recipeUrl = this.recipe.getRecipe(this.id).imagepath;

            for(let oneingrediant of this.recipe.getRecipe(this.id).ingridiant){
             ingrediant.push(
                 new FormGroup({
                  'name': new FormControl(oneingrediant.name,Validators.required),
                  'amount':new FormControl(oneingrediant.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
                 })
              )
            }
    
    }
    this.recipeform = new FormGroup({
       'name':new FormControl(recipename,Validators.required),
       'imagepath':new FormControl(recipeUrl,Validators.required),
        'description':new FormControl(recipeDescription,Validators.required),
        'ingridiant': ingrediant, 

    })
  } 
  getArray(){
    return  (<FormArray>this.recipeform.get('ingridiant')).controls;

  }
  deleteIngrediant(index:number){
          (<FormArray>this.recipeform.get('ingridiant')).removeAt(index)
  }
}
