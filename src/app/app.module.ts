import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FruitEditComponent } from './fruit-edit/fruit-edit.component';
import { FruitBasketComponent } from './fruit-basket/fruit-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitEditComponent,
    FruitBasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
