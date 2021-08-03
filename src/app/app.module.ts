import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { AddListComponent } from './add-list/add-list.component';
import {  NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TrelloModalComponent } from './trello-modal/trello-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    AddListComponent,
    TrelloModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    NgbActiveModal,
    NgbModal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
