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
  @Input() hireDate: string ="";
  @Input() jobTitle: string ="";
  @Input() loginID: string ="";
  @Input() maritalStatus: string ="";
  @Input() modifiedDate: string ="";
  @Input() nationalIDNumber: string ="";
  @Input() rowGuide: string ="";
  @Input() sickLeaveHours: string ="";
  @Input() vacationHours: string ="";
  @Input() urlImage: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR71NMInPLzHQXuT-nuGGPOS5g5GTD9Iwxvw&usqp=CAU";
  constructor() { }
  ngOnInit(): void {
  }
}
