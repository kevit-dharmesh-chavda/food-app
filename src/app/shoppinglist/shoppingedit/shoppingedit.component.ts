import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ingrediant } from 'src/app/shared-folder/ingrediant.module';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  constructor(private shoppinglistservice: ShoppingListService) { }
  editItem : ingrediant;
  editIndex : number;
  editmode:boolean = false;
  ngOnInit(): void {
    this.shoppinglistservice.edittoingrediant.subscribe(
      (index:number)=>{
          this.editIndex = index;
          this.editmode = true;
          this.editItem = this.shoppinglistservice.getEditIngrediant(index);
          this.form.setValue( {
            inputname : this.editItem.name ,
            inputamount : this.editItem.amount 
      })
           
      }
    )          
  
  }
  

  addItem() {
    if(this.editmode ){
      this.shoppinglistservice.updatedIngrediant(this.editIndex,new ingrediant(this.form.value.inputname,this.form.value.inputamount))
      this.editmode = false;
    }
    else{
    this.shoppinglistservice.addIngridiant(new ingrediant(this.form.value.inputname, this.form.value.inputamount));
    }
    this.form.reset();
  }
}
