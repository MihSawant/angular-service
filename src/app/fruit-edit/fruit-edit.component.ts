import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Fruit } from '../shared/fruit.model';
import { FruitStorageService } from '../shared/fruit.storage.service';
import { LoggingService } from '../shared/logging.service';
@Component({
  selector: 'app-fruit-edit',
  templateUrl: './fruit-edit.component.html',
  styleUrls: ['./fruit-edit.component.css'],
  // providers: [LoggingService]
})
export class FruitEditComponent implements OnInit {
  fruitName: string = '';
  fruitSize: string = 'small';
  fruitWeight: string = '';
  fruit: Fruit;

  constructor(private fruitStorage: FruitStorageService) { }

  ngOnInit(): void {
    this.fruitStorage.event.subscribe((event: string) => {
      alert(event);
    });
  }

  onFruitAddClick() {
    this.fruit = new Fruit(this.fruitName, this.fruitSize, Number.parseFloat(this.fruitWeight));
    this.fruitStorage.addFruit(this.fruit);
    this.fruitName = '';
    this.fruitWeight = '';
  }


}
