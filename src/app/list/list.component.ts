import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trello-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list;
  constructor() { }

  ngOnInit(): void {
  }

  deleteList() {
    
  }

}
