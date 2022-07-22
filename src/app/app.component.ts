import { Component, Output } from '@angular/core';
import { Fruit } from './shared/fruit.model';
import { LoggingService } from './shared/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent {
  fruits: Fruit[] = [];

  constructor(private logger: LoggingService) { }

  onFruitAdded(fruit: Fruit) {
    this.logger.logFruitResult('Fruit: ' + fruit.name + ' added...');
    this.fruits.push(fruit);
  }

}

