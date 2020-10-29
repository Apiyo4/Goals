import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import {HttpClient} from '@angular/common/http'
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[]
  alertService:AlertService
  quote: Quote;
  goToUrl(id){
    this.router.navigate(['/goals',id])
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    debugger
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
   deleteGoal(isComplete, index){
     if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
         this.alertService.alertMe("The goal has been deleted")
      }
    }
  }


  constructor(goalService:GoalService, alertService:AlertService, private http:HttpClient, private quoteRequestService:QuoteRequestService, private router:Router) { 
    this.goals = goalService.getGoals()
    this.alertService = alertService
  }

  ngOnInit() {
    this.quoteRequestService.quoteRequest()
    this.quote = this.quoteRequestService.quote
  }

}
