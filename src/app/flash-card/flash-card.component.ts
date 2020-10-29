import { Component, OnInit } from '@angular/core';
import { Vocabularies } from '../vocabularies';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {
  vocabularies:Vocabularies[] = [
    new Vocabularies("Closure", "A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain. The closure has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables."),
    new Vocabularies("Hoisting", "Hoisting is the concept in which Javascript, by default, moves all declarations to the top of the current scope. As such, a variable can be used before it has been declared. Note that Javascript only hoists declarations and not initializations"),
    new Vocabularies("Event bubbling", "Event bubbling is the concept in which an event triggers at the deepest possible element, and triggers on parent elements in nesting order. As a result, when clicking on a child element one may exhibit the handler of the parent activating."),
    new Vocabularies("Null", "Null is an assignment value, and can be assigned to a variable representing that it has no value"),
    new Vocabularies("Undefined", " Undefined represents that a variable has been declared but there is no value associated with it")

  ]
  defineWord(num:number){
    this.vocabularies[num].showDefinition = !this.vocabularies[num].showDefinition
  }
  constructor() { }

  ngOnInit() {
  }

}
