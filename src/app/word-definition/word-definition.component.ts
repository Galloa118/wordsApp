import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-word-definition',
  templateUrl: './word-definition.component.html',
  styleUrls: ['./word-definition.component.css']
})
export class WordDefinitionComponent implements OnInit {

  @Input() word: any;
  @Input() seeWordDefinition: boolean;
  definitionUrl: string;
  @Input() htmlContent: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  trustedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.word.url);
  }
}
