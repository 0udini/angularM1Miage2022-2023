import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      _id:1,
      nom: "Angular",
      dateDeRendu: new Date('2022-10-10'),
      rendu: false
    },
    {
      _id:2,
      nom: "JAVA",
      dateDeRendu: new Date('2022-09-10'),
      rendu: true
    },
    {
      _id:3,
      nom: "BD",
      dateDeRendu: new Date('2022-12-01'),
      rendu: false
    }
    ];

  constructor(private loggingService:LoggingService,
    private http:HttpClient) { }

  uri ="http://localhost:8010/api/assignments";

  getAssignment(id:number):Observable<Assignment> {
    //return of(this.assignments.find(a => a.id === id)!);
    return this.http.get<Assignment>(this.uri + "/" + id);
  }

  getAssignments():Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.uri);
  }

  addAssignment(assignment:Assignment):Observable<any> {
    //this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");
    //return of(this.assignments);
    return this.http.post<Assignment>(this.uri, assignment);
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
