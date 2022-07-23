import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LoggingService {
    logFruitResult(message: string) {
        console.log('LOG: ' + message);
    }
}