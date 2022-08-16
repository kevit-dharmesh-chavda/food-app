import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared-folder/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() featuredSelected = new EventEmitter<string>();


  linkIsClicked(feature: string) {
    this.featuredSelected.emit(feature);
  }

  constructor(private storedata: DataStorageService) { }

  ngOnInit(): void {
  }
  saveData() {
    this.storedata.storeData();
  }
  fetchData(){
    this.storedata.fetchData();
  }
}
