import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() birthDate: string = "";
  @Input() employeeID: number = 1;
  @Input() employeeName: string = "";
  @Input() gender: string ="";
  constructor() { }
  ngOnInit(): void {
  }
}
