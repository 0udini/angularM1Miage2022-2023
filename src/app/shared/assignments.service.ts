import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      id:1,
      nom: "Angular",
      dateDeRendu: new Date('2022-10-10'),
      rendu: false
    },
    {
      id:2,
      nom: "JAVA",
      dateDeRendu: new Date('2022-09-10'),
      rendu: true
    },
    {
      id:3,
      nom: "BD",
      dateDeRendu: new Date('2022-12-01'),
      rendu: false
    }
    ];

  constructor(private loggingService:LoggingService) { }

  getAssignment(id:number):Observable<Assignment> {
    return of(this.assignments.find(a => a.id === id)!);
  }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }
  addAssignment(assignment:Assignment) {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");
    return of(this.assignments);
  }
  updateAssignment(assignment:Assignment):Observable<string> {
    return of("Assignment service : assignments mis à jour");
  }
  deleteAssignment(assignment:Assignment):Observable<string> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos,1);
    return of("Assignment service : assignment supprimé");
  }
}
