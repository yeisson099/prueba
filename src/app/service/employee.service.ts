import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { 
    
  }

  // Metodos del crud
  //Create
  createEmployee(employee: any){
    let object = JSON.stringify(employee);
    let header = new HttpHeaders().set('Content-Type','application/json')

    return this.httpClient.post("http://dummy.restapiexample.com/api/v1/create", object, { headers: header})
  }
  //Read
  selectEmployees(): Observable<any>{
    return this.httpClient.get("http://dummy.restapiexample.com/api/v1/employees");
  }
  //Update
  UpdateEmployee(employee: any, id){
    let object = JSON.stringify(employee);
    let header = new HttpHeaders().set('Content-Type','application/json')

    return this.httpClient.put("http://dummy.restapiexample.com/api/v1/update/"+id, object, { headers: header})
  }
  //Delete
  deleteEmployee(id): Observable<any>{
    return this.httpClient.delete("http://dummy.restapiexample.com/api/v1/delete/"+id);
  }
}
