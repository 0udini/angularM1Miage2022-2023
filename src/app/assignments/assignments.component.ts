import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  assignments = [
    {
      nom: "Devoir Angular",
      dateRendu:'2022-10-10',
      rendu: false
    },
    {
      nom: "Devoir Java",
      dateRendu:'2022-10-10',
      rendu: true
    },
    {
      nom: "Devoir R",
      dateRendu:'2022-10-10',
      rendu: false
    },
    {
      nom: "Devoir Ocaml",
      dateRendu:'2022-10-10',
      rendu: true
    },

  ]
  titre = "Mon application sur les Assignments !"

  constructor() { }

  ngOnInit(): void {
  }

}
