import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  formVisible=false;
  visibleCard = true;
  assignments!:Assignment[];

  assignmentSelectionne!:Assignment;


  constructor(private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
   this.assignmentsService.getAssignments()
   .subscribe(tableauDesAssignmentsObservable => {
    this.assignments = tableauDesAssignmentsObservable
   });
  }


  onAssignmentClicke(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
    this.visibleCard=true;
  }

  onAddAssignmentBtnClick() {
    //this.formVisible = true;
  }
/*
  onNouvelAssignment(assignment:Assignment) {
    //this.assignments.push(assignment);
    this.assignmentsService.addAssignment(assignment).subscribe(message =>console.log(message));
    this.formVisible = false;
  }
  */
  onDeleteAssignment(assignment:Assignment) {
    this.assignmentsService.deleteAssignment(assignment).subscribe(message =>console.log(message));
    this.visibleCard = false;
  }
}
