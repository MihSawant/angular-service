import { OnInit } from "@angular/core";
import { Fruit } from "./fruit.model";

export class FruitStorageService {
    fruits: Fruit[] = [];


    addFruit(fruit: Fruit) {
        this.fruits.push(fruit);
    }

    getAllFruits(): Fruit[] {
        return this.fruits;
    }
}