
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService:EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
    
  }
 
 
 remove(id: number) {
  this. employeeService.removeUser(id);
  this.employeeService.getEmployees().subscribe(data => this.employees = data);
 }


}
