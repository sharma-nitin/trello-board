import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { AddListComponent } from './add-list/add-list.component';
import {  NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NgbActiveModal,
    NgbModal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
