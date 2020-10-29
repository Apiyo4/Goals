import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { DefinitionComponent } from './definition/definition.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashCardComponent,
    DefinitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
