import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataviewer',
  templateUrl: './dataviewer.component.html',
  styleUrls: ['./dataviewer.component.css']
})
export class DataviewerComponent implements OnInit {
  items: any;

  constructor() { }

  ngOnInit(): void {
  }


}
