import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-body',
  templateUrl: './container-body.component.html',
  styleUrls: ['./container-body.component.scss']
})
export class ContainerBodyComponent implements OnInit {

  items = '';
  currentItem = this.items;

  constructor() { }

  ngOnInit(): void {
  }

}
