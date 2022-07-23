import { Component, Input, OnInit } from '@angular/core';
import { Fruit } from '../shared/fruit.model';
import { FruitStorageService } from '../shared/fruit.storage.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-fruit-basket',
  templateUrl: './fruit-basket.component.html',
  styleUrls: ['./fruit-basket.component.css'],
  // providers: [LoggingService]
})
export class FruitBasketComponent implements OnInit {
  @Input() fruit: Fruit;
  name: string;
  weight: number;

  constructor(private logger: LoggingService, private fruitStorage: FruitStorageService) {
  }

  ngOnInit(): void {
    this.name = this.fruit.name;
    this.weight = this.fruit.weight;
  }

}
