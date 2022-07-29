import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";
import { ConnectableObservable } from "rxjs";

@Directive({
    selector:'[appdropdown]'
})
export class DropDownDirective {
  
     constructor(private rendere : Renderer2 , private elemref:ElementRef){}
     isOpen = true;
     
     @HostListener('click') clciked(eventdata:Event){
       if(this.isOpen){
        this.rendere.addClass(this.elemref.nativeElement,'open');
         this.isOpen = !this.isOpen;   
        
    }
     else{
        this.rendere.removeClass(this.elemref.nativeElement,'open');
        this.isOpen = !this.isOpen;
     }
    }

}