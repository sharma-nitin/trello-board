import { Component } from '@angular/core';
import { boards } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trelloboard';
  boarddata = boards;
}
