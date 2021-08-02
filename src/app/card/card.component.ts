import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'trello-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() item;
 @Input() list;
  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  deleteItem() {
   this.listService.deleteCardItem(this.item,this.list.id);
  }

}
