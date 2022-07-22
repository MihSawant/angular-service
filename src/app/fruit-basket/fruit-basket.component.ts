import { Component, Input, OnInit } from '@angular/core';
import { Fruit } from '../shared/fruit.model';

@Component({
  selector: 'app-fruit-basket',
  templateUrl: './fruit-basket.component.html',
  styleUrls: ['./fruit-basket.component.css']
})
export class FruitBasketComponent implements OnInit {
  @Input() fruit: Fruit;
  name: string;
  weight: number;

  constructor() { }

  ngOnInit(): void {
    this.name = this.fruit.name;
    this.weight = this.fruit.weight;
  }

}
