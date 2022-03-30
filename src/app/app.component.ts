import { Component } from '@angular/core';
import { SCAService } from './services/sca.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  Employees: any[] = [];
  constructor(private SCAService:SCAService){
  }
  ngOnInit(){
    this.SCAService.getEmployees().subscribe((Employees: any) =>{
      this.Employees = Employees;
      console.log(Employees); 
    })
  }
}
