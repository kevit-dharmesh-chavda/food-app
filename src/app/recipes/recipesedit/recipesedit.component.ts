import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-recipesedit',
  templateUrl: './recipesedit.component.html',
  styleUrls: ['./recipesedit.component.css']
})
export class RecipeseditComponent implements OnInit {
  editOrNot: boolean = false;
  id: number;
  constructor(private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.id != null) {
        this.editOrNot = true;
      }
      else {
        this.editOrNot = false;
      }
      console.log(this.editOrNot)
    })
  }

}
