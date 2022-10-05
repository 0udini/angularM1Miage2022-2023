import { Component, OnInit } from '@angular/core';
import {Assignment} from './assignment.model';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  assignments:Assignment[] = [
    {
      nom: "Devoir Angular",
      dateRendu:new Date('2022-10-10'),
      rendu: false
    },
    {
      nom: "Devoir Java",
      dateRendu:new Date('2022-10-10'),
      rendu: true
    },
    {
      nom: "Devoir R",
      dateRendu:new Date('2022-10-10'),
      rendu: false
    },
    {
      nom: "Devoir Ocaml",
      dateRendu:new Date('2022-10-10'),
      rendu: true
    },

  ]

  assignementSelectionne:Assignment= new Assignment;

  assignementClique(assignment:Assignment){
    this.assignementSelectionne = assignment;
  }
  titre = "Mon application sur les Assignments !"

  constructor() { }

  ajoutActive = false;
  nomDevoir="";
  dateRendu = new Date();

  onSubmit(){
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateRendu = this.dateRendu;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

}
