import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { boards } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  trelloboards = new Subject<any>();
  trelloboards$ = this.trelloboards.asObservable();

  constructor() { }

  fetchboardsData() {
    const boardsdata = JSON.parse(localStorage.getItem('boardsdata'));
    let data;
    if(boardsdata) {
      data = boardsdata;
    } else {
      this.trelloboards.next(boards);
      data=boards;
      localStorage.setItem('boardsdata',JSON.stringify(boards));
    }
    return of(data);
  }

  deleteList(list) {
    let data = JSON.parse(localStorage.getItem('boardsdata'));
    data = data.filter((res)=>{
      return res.id!== list.id;
    })
    localStorage.setItem('boardsdata',JSON.stringify(data));
    this.trelloboards.next(data);
   }

   deleteCardItem(item,listid) {
    let data = JSON.parse(localStorage.getItem('boardsdata'));
    const listItem = data.find((res)=>{
      return res.id === listid;
    })
    listItem.cards = listItem.cards.filter((res)=>{
      return res.id !== item.id;
    })
    localStorage.setItem('boardsdata',JSON.stringify(data));
    this.trelloboards.next(data);
   }

   addList(name) {
    let data = JSON.parse(localStorage.getItem('boardsdata'));
    const payload = {
      id:Math.floor(Math.random()*10000),
      name:name,
      cards:[]
    }
    data.push(payload)
    localStorage.setItem('boardsdata',JSON.stringify(data));
    this.trelloboards.next(data);
   }

}
