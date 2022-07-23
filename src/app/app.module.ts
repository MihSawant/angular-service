import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FruitEditComponent } from './fruit-edit/fruit-edit.component';
import { FruitBasketComponent } from './fruit-basket/fruit-basket.component';
import { ActiveItemDirective } from './active-item.directive';
import { FruitStorageService } from './shared/fruit.storage.service';
import { LoggingService } from './shared/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    FruitEditComponent,
    FruitBasketComponent,
    ActiveItemDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FruitStorageService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
