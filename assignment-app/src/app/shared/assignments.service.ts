import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { forkJoin, Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { bdInitialAssignments } from './data';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [

    ];

  constructor(private loggingService:LoggingService,
    private http:HttpClient) { }

  uri ="http://localhost:8010/api/assignments";

  getAssignment(id:string):Observable<Assignment> {
    this.loggingService.log("ID : " + id, "récupéré");
    //return of(this.assignments.find(a => a.id === id)!);
    //var ObjectId = require('mongoose').Type.ObjectID;
    //var o_id = new ObjectId(id);
    return this.http.get<Assignment>(this.uri + "/" + id);
  }

  getAssignments():Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.uri);
  }

  addAssignment(assignment:Assignment):Observable<any> {
    this.assignments.push(assignment);
    //this.loggingService.log(assignment.nom, "ajouté");
    //return of(this.assignments);
    return this.http.post<Assignment>(this.uri, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<any> {
    //return of("Assignment service : assignments mis à jour");
    return this.http.put<Assignment>(this.uri, assignment);
  }
  deleteAssignment(assignment:Assignment):Observable<any> {
    //let pos = this.assignments.indexOf(assignment);
    //this.assignments.splice(pos,1);
    //return of("Assignment service : assignment supprimé");
    let deleteURI = this.uri + '/' + assignment._id;
    console.log("deleteURI " + deleteURI);
    return this.http.delete(deleteURI);
  }

  populateDB(){
    bdInitialAssignments.forEach(a =>{
      let newAssignment = new Assignment()
      newAssignment.nom = a.nom;
      newAssignment.dateDeRendu = new Date(a.dateDeRendu);
      newAssignment.rendu = a.rendu;
    this.addAssignment(newAssignment)
    .subscribe(response =>{console.log(response.message)
      })
  })
  }
  

  populateDBWithForkJoin(): Observable<any> { 
    const appelsVersAddAssignment:any = [];
    bdInitialAssignments.forEach(a =>{
      const newAssignment:any = new Assignment();
      newAssignment.nom = a.nom;
      newAssignment.dateDeRendu = new Date(a.dateDeRendu);
      newAssignment.rendu = a.rendu;

      appelsVersAddAssignment.push(this.addAssignment(newAssignment));
    })
    return forkJoin(appelsVersAddAssignment)
  }

  resetDB(){
    console.log("resetDB ");
    const appelsVersDeleteAssignment:any = [];
    this.getAssignments()
    .subscribe(aToDelete => {
      aToDelete.forEach(a => {
        
        let deleteURI = this.uri + '/' + a._id;
        console.log(deleteURI);
        this.http.delete(deleteURI).subscribe(response => {
          console.log(response);})
      })
    
    });
    
  }

//  resetDBWithForkJoin(): Observable<any> { { 
//     const appelsVersDeleteAssignment:any = [];
//     const assignmentsToDelete:Assignment[] = [];
//     this.getAssignments().subscribe(next: assig);
    
    
//   }}
// }

  // (aToDelete => {
  //   aToDelete.forEach(a => {
      
  //     let deleteURI = this.uri + '/' + a._id;
  //     console.log(deleteURI);
  //     appelsVersDeleteAssignment.push(this.http.delete(deleteURI))
  //   })
  //   return forkJoin(appelsVersDeleteAssignment)
  // });
  

}