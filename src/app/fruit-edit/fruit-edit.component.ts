import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Fruit } from '../shared/fruit.model';
@Component({
  selector: 'app-fruit-edit',
  templateUrl: './fruit-edit.component.html',
  styleUrls: ['./fruit-edit.component.css']
})
export class FruitEditComponent implements OnInit {
  fruitName: string = '';
  fruitSize: string = 'small';
  fruitWeight: string = '';
  fruit: Fruit;
  @Output() fruitEvent: EventEmitter<Fruit> = new EventEmitter<Fruit>();

  constructor() { }

  ngOnInit(): void {
  }

  onFruitAddClick() {
    this.fruit = new Fruit(this.fruitName, this.fruitSize, Number.parseFloat(this.fruitWeight));
    this.fruitName = '';
    this.fruitWeight = '';
    this.fruitEvent.emit(this.fruit);

  }


}
