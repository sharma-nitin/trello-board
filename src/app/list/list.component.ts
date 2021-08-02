import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'trello-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list;
  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  deleteList() {
   this.listService.deleteList(this.list);
  }

  addItem() {

  }

}
