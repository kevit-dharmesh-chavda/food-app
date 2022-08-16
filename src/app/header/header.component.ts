import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth/auth.service';
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

  constructor(private storedata: DataStorageService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.authservice.user.subscribe(user=>{
      this.isAuthenticated = user?true:false
      console.log(this.isAuthenticated,user)
  })
  }
  saveData() {
    this.storedata.storeData();
  }
  fetchData(){
    this.storedata.fetchData();
  }
}
