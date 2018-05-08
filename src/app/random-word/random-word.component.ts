import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.css']
})
export class RandomWordComponent implements OnInit {

  words: any[];
  randomWord: any;
  seeWordDefinition: boolean;
  constructor(private wordService: WordsService) { }

  ngOnInit() {
    this.wordService.getWords().subscribe((data: any) => this.words = data);
    this.seeWordDefinition = false;
  }

  getRandomWord() {
    this.seeWordDefinition = false;
    const randomNumber = Math.floor(Math.random() * this.words.length);
    this.randomWord = this.words[randomNumber];
  }

  seeDefinition() {
    this.seeWordDefinition = true;
  }
}
