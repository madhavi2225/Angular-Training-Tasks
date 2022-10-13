import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  orderForm!: FormGroup;  
  items!: FormArray;  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
