import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentsService } from '../../shared/assignments.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-assignments-details',
  templateUrl: './assignments-details.component.html',
  styleUrls: ['./assignments-details.component.css'],
})

export class AssignmentsDetailsComponent implements OnInit {
  @Input() assignmentTransmis!: Assignment;
  @Output() onAssignmentSupprime = new EventEmitter<Assignment>();
  constructor(private assignmentsService:AssignmentsService,
    private route: ActivatedRoute,
    private router:Router) { }

  
  ngOnInit(): void {
    this.getAssignment();
  }
  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(message =>console.log(message));
    this.router.navigate(['/home']);
  }

  onDelete(){
    this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe(message =>console.log(message));
    this.router.navigate(['/home']);
  }

  getAssignment(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.assignmentsService.getAssignment(id).subscribe(assignment => this.assignmentTransmis = assignment);
  }


}
