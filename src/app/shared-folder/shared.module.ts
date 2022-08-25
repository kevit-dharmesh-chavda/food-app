import { NgModule } from "@angular/core";
import { DropDownDirective } from "./dropdown.directive";
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({

    declarations:[
        SpinnerComponent,
        DropDownDirective,
    ],
    exports:[
        SpinnerComponent,
        DropDownDirective
    ]
})
export class SharedModule{
 
}