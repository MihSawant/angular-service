import { Component, OnInit, Output } from '@angular/core';
import { Fruit } from './shared/fruit.model';
import { FruitStorageService } from './shared/fruit.storage.service';
import { LoggingService } from './shared/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, FruitStorageService]
})
export class AppComponent implements OnInit {

  fruits: Fruit[] = [];

  constructor(private logger: LoggingService, private fruitsStorage: FruitStorageService) { }
  ngOnInit(): void {
    this.fruits = this.fruitsStorage.getAllFruits();
  }

}

