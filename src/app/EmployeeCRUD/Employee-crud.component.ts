import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './Employee-crud.component.html',
  styleUrls: ['./Employee-crud.component.css']
})
export class EmployeeCRUDComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  registerform = new FormGroup({
    name: new FormGroup({
      firstname : new FormControl('Madhavi'),
      lastname : new FormControl('Patel')
    }),
    email : new FormControl('mad123@gmail.com')
  });
 
  updateName() {
    this.registerform.controls.email.setValue('abcd@gmail.com');
    this.registerform.controls.name.controls.firstname.setValue('krisha');
   // this.name.firstname.setValue('Nancy');
  }

  get name(): any {
  return this.registerform.get('name');
 // console.log('name :',this.name);
  }

 get lastname() : any{
  return this.registerform.get('name.lastname');
 }

 submit(){
  console.log('name:',this.name);
 }
}


  