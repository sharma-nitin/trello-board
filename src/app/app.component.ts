import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListService } from './services/list.service';
import { TrelloModalComponent } from './trello-modal/trello-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Trelloboard';
  boarddata =[];
  modalShown =false;
  constructor(public listService: ListService,
    private modalService: NgbModal, private activeModal: NgbActiveModal){

  }

  ngOnInit() {
  this.fetchData();
  this.listService.trelloboards$.subscribe((res:any)=>{
    this.boarddata = res;
  })
  }

  fetchData() {
  this.listService.fetchboardsData().subscribe(
    (res) => {
      this.boarddata = res;
    },
    () => {
      this.boarddata = [];
    }
  );
  }

  addList(): void {
    const modalRef = this.modalService.open(TrelloModalComponent);
    const data = {
      title: 'Add List',
      showDescription:false
    };
    modalRef.componentInstance.data = data;
    modalRef.result.then((result) => {
      if (result !== 'close') {
        this.listService.addList(result.title)
      }
    });
  }

  closeModal(): void {
    this.modalShown = false;
    this.modalService.dismissAll();
  }

  add(name) {
   if(name) {
     this.listService.addList(name);
   }
   this.closeModal();
  }
}
