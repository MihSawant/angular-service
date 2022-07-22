import { Component } from '@angular/core';
import { Fruit } from './shared/fruit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onFruitAdded(fruit: Fruit) {
    console.log(fruit);
  }

}

