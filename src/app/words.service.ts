import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WordsService {

  wordsUrl = 'words-app/assets/words.json';

  constructor(private http: HttpClient) { }

  getWords() {
    return this.http.get(this.wordsUrl);
  }

}
