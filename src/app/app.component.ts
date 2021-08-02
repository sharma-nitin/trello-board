import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Trelloboard';
  boarddata =[];

  constructor(public listService: ListService){

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

  addList() {

  }
}
