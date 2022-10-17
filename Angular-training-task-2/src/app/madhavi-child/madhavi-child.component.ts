import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './madhavi-child.component.html',
  styleUrls: ['./madhavi-child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() receivedparentmsg:string;

  constructor() { }

  ngOnInit(): void {
  }

}
