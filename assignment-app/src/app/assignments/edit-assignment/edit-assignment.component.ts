import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentsService } from '../../shared/assignments.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {

  assignment!:Assignment| undefined;
  nomDevoir!:string;
  dateDeRendu!:Date;

  constructor(private assignmentsService:AssignmentsService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.getAssignment();
  }
  getAssignment(){
    const id = this.route.snapshot.params['id']!;
    this.assignmentsService.getAssignment(id).subscribe( (assignment) => 
      { 
        if (!assignment) return;
      this.assignment= assignment;
      this.nomDevoir = this.assignment.nom;
      this.dateDeRendu = this.assignment.dateDeRendu;});
  }

  onSaveAssignment(){
    if (!this.assignment) return;
    this.assignment.nom = this.nomDevoir;
    this.assignment.dateDeRendu = this.dateDeRendu;
    this.assignmentsService.updateAssignment(this.assignment)
      .subscribe(message =>{console.log(message)
        this.router.navigate(['/home']);
      });
  }


}
