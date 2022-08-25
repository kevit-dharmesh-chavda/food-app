import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { DropDownDirective } from './shared-folder/dropdown.directive'
import { ShoppingListService } from './shoppinglist/shopping-list.service';

import { RecipesService } from './recipes/recipes.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { SpinnerComponent } from './shared-folder/spinner/spinner.component';
import { AuthInterceptorService } from './auth/auth.interceptor.service';
import { ALertComponent } from './auth/alert/alert.component';

import { RecipesModule } from './recipes/recipes.module';
import { ShoppinglistModule } from './shoppinglist/shoppinglist.module';
import { SharedModule } from './shared-folder/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // DropDownDirective,
    AuthComponent,
    // SpinnerComponent,
    ALertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RecipesModule,
    ShoppinglistModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipesService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
