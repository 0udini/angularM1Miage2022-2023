import { Component, OnInit, Input } from '@angular/core';
import{Assignment} from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignementTransmis:Assignment=new Assignment;

  constructor() { }

  ngOnInit(): void {
  }

}
