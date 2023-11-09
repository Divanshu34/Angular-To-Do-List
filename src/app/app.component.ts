import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-to-do-list';
  constructor(){
    console.log("Hello World");
    // setTimeout(()=>{
    //   this.title = 'not my-to-do-list';
    //   console.log('changed title');
    // }, 2000)
  }
}
