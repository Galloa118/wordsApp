import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { WordsService } from './words.service';
import { RandomWordComponent } from './random-word/random-word.component';
import { WordDefinitionComponent } from './word-definition/word-definition.component';


@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    RandomWordComponent,
    WordDefinitionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
