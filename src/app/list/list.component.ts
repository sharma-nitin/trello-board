import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  @Input() boarddata;
  connectedTo = [];
  constructor(private listService: ListService,  private modalService: NgbModal) { }

  ngOnInit(): void {
    for (let item of this.boarddata) {
      this.connectedTo.push('list-'+item.id);
    };
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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        this.listService.handleDrop(event.previousContainer.id,event.previousIndex,event.container.id)
      }
  }

}
