import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataviewer',
  templateUrl: './dataviewer.component.html',
  styleUrls: ['./dataviewer.component.css']
})
export class DataviewerComponent implements OnInit {
  items = [
    {size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'},
    {size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'},
    {size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'},
    {size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'},
    {size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'},
    {size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'},
    {size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'},
    {size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'},
    {size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'},
    {size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'},
  ];

  constructor() { }

  ngOnInit(): void {
  }


  add(i: number) {
    this.items.push({size: '7500', category: 'fitness equipement', Employee: 'dilshan', location: 'purchasing', pipeline: 'ezuitesale', stage: 'ProductDemo', lastupdate: '2020-12-03 04:23:43'});
  }

  edit(i: number) {

  }

  remove(i: number) {
    this.items.forEach((element, index) => {
      if (index === i) { this.items.splice(index, 1); }
    });
  }
}
