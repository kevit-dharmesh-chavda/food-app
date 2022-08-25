import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingeditComponent } from "./shoppingedit/shoppingedit.component";
import { ShoppinglistComponent } from "./shoppinglist.component";

@NgModule({
    declarations: [
        ShoppinglistComponent,
        ShoppingeditComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild([{path : 'shoppinglist', component:ShoppinglistComponent}])
    ]
})
export class ShoppinglistModule {

}