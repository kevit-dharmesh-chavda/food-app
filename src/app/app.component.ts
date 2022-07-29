import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodapp';
  features : string = "recipe";
  onFeature(feature:string){
       this.features = feature;
  }
}
