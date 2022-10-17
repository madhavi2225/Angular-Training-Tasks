import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './madhavi-parent.component.html',
  styleUrls: ['./madhavi-parent.component.css']
})
export class ParentComponent implements OnInit {
  messagetosendparent:string ='';
  constructor() { }

  ngOnInit(): void {
  }

  sendtochild(message:string){
    this.messagetosendparent = message;
  }

}
