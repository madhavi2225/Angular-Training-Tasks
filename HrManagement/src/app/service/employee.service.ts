
import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8000/employees';
  

  constructor(private http: HttpClient) { }
//   getEmployees(){
//     return this.employees
//   }
//   removeUser(id: number) {
//     this.employees = this.employees.filter(x => x.id != id);
// }
// updateUser(Employee: Employee) {
//   const userIndex = this.employees.findIndex(x => x.id == Employee.id);
//   if (userIndex != null && userIndex != undefined) {
//       this.employees[userIndex] = Employee;
//   }
// }
// getUsersByID(id: number) {
//   return this.employees.find(x => x.id == id)
// }
getEmployees(): Observable<Employee[]> {
  return this.http.get<any>(this.baseUrl);
}

getUsersByID(id: number): Observable<Employee> {
  return this.http.get<any>(this.baseUrl + '/' + id);
}

create(Employee: Employee) {
  return this.http.post<any>(this.baseUrl, Employee);
}

updateUser(id: number, Employee: Employee): Observable<Employee> {
  return this.http.put<any>(this.baseUrl + '/' + id, Employee);
}

removeUser(id: number) {
  return this.http.delete<any>(this.baseUrl + '/' + id);
}
}
