import { Component } from '@angular/core';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  constructor(){
    setTimeout(() => {
      this.title = "Changed title";
    },2000);
  }

}
