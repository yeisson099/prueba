import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../service/employee.service'
import { error } from 'protractor';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  createEmployee: any ={
    name:"",
    salary:"",
    age:"" 
  }
  updateEmployee: any ={
    id:"",
    name:"",
    salary:"",
    age:"" 
  }
  employees: any;

  constructor(private EmployeeService: EmployeeService) { 
    this.showEmployees();
  }


  ngOnInit(): void {
  }

  //CRUD
  //Create
  create(){
    console.log('agrego')
    console.log(this.createEmployee)
    this.EmployeeService.createEmployee(this.createEmployee).subscribe( result => {
      this.showEmployees();
    },
    error =>{
      console.log(JSON.stringify(error));
    })
  }
  //Read
  showEmployees() {
    this.EmployeeService.selectEmployees().subscribe(result => {
      this.employees = result.data;
    },
     error =>{
      console.log(JSON.stringify(error));
    });
  }
  //Update
  update(id){
    console.log('actualizo')
    console.log(this.updateEmployee)
    this.EmployeeService.UpdateEmployee(this.updateEmployee,id).subscribe( result => {
      this.showEmployees();
    },
    error =>{
      console.log(JSON.stringify(error));
    })
  }
  //Delete
  delete(id){
    console.log('elimine',id)
    this.EmployeeService.deleteEmployee(id).subscribe(result=>{
      this.showEmployees();
      console.log('se borro')
    },
    error =>{
      console.log(JSON.stringify(error));
    })
  }


}
