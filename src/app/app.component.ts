import { Component, Output } from '@angular/core';
import { Fruit } from './shared/fruit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits: Fruit[] = [];

  onFruitAdded(fruit: Fruit) {
    this.fruits.push(fruit);
  }

}

