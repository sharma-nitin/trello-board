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
    this.sortData(data);
    localStorage.setItem('boardsdata',JSON.stringify(data));
    this.trelloboards.next(data);
   }

   sortData(data){
    data.forEach((list)=>{
      list.cards.sort((a,b)=>b.createdAt - a.createdAt)
    })
   }

   deleteCardItem(item,listid) {
    let data = JSON.parse(localStorage.getItem('boardsdata'));
    const listItem = data.find((res)=>{
      return res.id === listid;
    })
    listItem.cards = listItem.cards.filter((res)=>{
      return res.id !== item.id;
    })
    this.sortData(data);
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

   addItemToList(item,listid) {
    let data = JSON.parse(localStorage.getItem('boardsdata'));
    const payload = {
      id:Math.floor(Math.random()*10000),
      title:item.title,
      desc: item.description,
      createdAt: new Date().getTime()
    }
    const listItem = data.find((res)=>{
      return res.id === listid;
    })
    listItem.cards.push(payload);
    this.sortData(data);
    localStorage.setItem('boardsdata',JSON.stringify(data));
    this.trelloboards.next(data);
   }

   handleDrop(prevlist,itemindex,newlist) {
    let data = JSON.parse(localStorage.getItem('boardsdata'));
    const draglistid = Number(prevlist.split('-')[1]);
    const droplistid = Number(newlist.split('-')[1]);
    let draglist = data.find((res)=>{
      return res.id === draglistid;
    })
    const movedItem = draglist.cards[itemindex];
    draglist.cards = draglist.cards.filter((res)=>{
      return res.id !== movedItem.id;
    })
    let droplist = data.find((res)=>{
      return res.id === droplistid;
    })
    droplist.cards.push(movedItem);
    this.sortData(data);
    localStorage.setItem('boardsdata',JSON.stringify(data));
    this.trelloboards.next(data);
   }

}
