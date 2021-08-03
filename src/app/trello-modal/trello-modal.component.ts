import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { listModal } from '../models/model';

@Component({
  selector: 'app-trello-modal',
  templateUrl: './trello-modal.component.html',
  styleUrls: ['./trello-modal.component.scss']
})
export class TrelloModalComponent implements OnInit {
  @Input() data: any;
  listModel = new listModal('','')
  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  /**
   *
   * @param sendData
   * closes the modal and passes close notifier data
   */
  closeModal(data: string): void {
    this.activeModal.close(data);
  }

  /**
   *
   * @param sendData
   * closes the modal and passes sumbit notifier data
   */
  add(): void {
    this.activeModal.close(this.listModel);
  }
}
