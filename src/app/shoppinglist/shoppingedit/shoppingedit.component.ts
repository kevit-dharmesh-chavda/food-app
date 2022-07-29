import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ingrediant } from 'src/app/shared-folder/ingrediant.module';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput')amountInput:ElementRef;
  // @Output() shoppingDetails = new EventEmitter<ingrediant> (); 
  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
  }
  addItem(){
    // this.shoppingDetails.emit(new ingrediant(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value))
        this.shoppinglistservice.addIngridiant(new ingrediant(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }
}
