import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Fruit } from "./fruit.model";
import { LoggingService } from "./logging.service";

@Injectable({ providedIn: 'root' })
export class FruitStorageService {
    fruits: Fruit[] = [];
    event = new EventEmitter<string>();

    constructor(private logger: LoggingService) {
        this.fruits.push(new Fruit('Apple', 'medium', 15.62),
            new Fruit('Banana', 'small', 8.44), new Fruit('Pomegranate', 'medium', 17.5));
    }

    addFruit(fruit: Fruit) {
        this.event.emit('Fruit Added');
        this.fruits.push(fruit);
        this.logger.logFruitResult('Fruit :' + fruit.name + ' added');
        this.logger.logFruitResult('Basket Updated');
    }



    getAllFruits(): Fruit[] {
        return this.fruits;
    }


}