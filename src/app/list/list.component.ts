import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListService } from '../services/list.service';
import { TrelloModalComponent } from '../trello-modal/trello-modal.component';

@Component({
  selector: 'trello-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list;
  constructor(private listService: ListService,  private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  deleteList() {
   this.listService.deleteList(this.list);
  }

  addItem() {
    const modalRef = this.modalService.open(TrelloModalComponent);
    const data = {
      title: `Add item to ${this.list.name}`,
      showDescription:true
    };
    modalRef.componentInstance.data = data;
    modalRef.result.then((result) => {
      if (result !== 'close') {
        this.listService.addItemToList(result,this.list.id)
      }
    });
  }

}
