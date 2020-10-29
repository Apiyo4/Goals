import { Component, OnInit, Input } from '@angular/core';
import { Vocabularies } from '../vocabularies';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {
 @Input() vocabulary: Vocabularies;

  constructor() { }

  ngOnInit() {
  }

}
