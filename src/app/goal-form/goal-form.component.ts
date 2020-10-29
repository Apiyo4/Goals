import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})

export class GoalFormComponent implements OnInit {
  @Output() addGoal =  new EventEmitter<Goal>()
 newGoal:Goal =  new Goal(0,"","",new Date());
 submitGoal(){
   this.addGoal.emit(this.newGoal)
 }
  constructor() { }

  ngOnInit() {
  }

}
