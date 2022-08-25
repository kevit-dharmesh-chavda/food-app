import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { RecipesService } from '../recipes/recipes.service';
import { DataStorageService } from '../shared-folder/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() featuredSelected = new EventEmitter<string>();
  isAuthenticated :boolean = false

  linkIsClicked(feature: string) {
    this.featuredSelected.emit(feature);
  }

  constructor(private storedata: DataStorageService,private authservice:AuthService,private recipes:RecipesService  ) { }

  ngOnInit(): void {
    this.authservice.user.subscribe(user=>{
      this.isAuthenticated = user?true:false
    })
    console.log(this.isAuthenticated)
 
  }
  saveData() {
    this.storedata.storeData().subscribe(response =>{
      console.log(response)
    });
  }
  fetchData(){
    this.storedata.fetchData().subscribe(
      response => {
          this.recipes.setRecipes(response);
          console.log(response)
      }
  );
  }
  onLogout(){
      this.authservice.logOut();
  }
}
