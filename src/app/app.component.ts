import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleado: any;

  constructor(private EmployeeService: EmployeeService){
     
  }
}
