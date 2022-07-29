import { Component, OnInit } from '@angular/core';
import { ingrediant } from '../shared-folder/ingrediant.module'
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingridiant : ingrediant[]; 

  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
    this.ingridiant = this.shoppinglistservice.getIngrediant();
  }
  soppingdetailsAdded(shoppingdata:ingrediant){
    // console.log(shoppingdata);
    this.ingridiant.push(shoppingdata);
  }

}
