import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector:'app-alert',
    templateUrl:'./alert.component.html',
    styleUrls:['./alert.component.css']
})
export class ALertComponent  implements OnInit{
    constructor(){}

    @Input() errormessage :any;
    @Output () closeerror = new EventEmitter<void>();
    ngOnInit(){
        console.log(this.errormessage)
    }
    onClose(){
           this.closeerror.emit();
    }
 
}