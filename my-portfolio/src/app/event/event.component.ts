import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
// When a user interacts with an application in the form of a keyboard movement, a mouse click, or a mouseover, it generates an event. 
// These events need to be handled to perform some kind of action.
//  This is where event binding comes into picture.

export class EventComponent implements OnInit {
  title = 'Angular 4 Project!';
  //array of months.
  months = ["January", "Feburary", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];
  isavailable = true;
  myClickFunction(event) {
    //just added console.log which will display the event details in browser 
    //  on click of the button.
    alert("Button is clicked");
    console.log(event);
  }
  changemonths(event) {
    alert("Changed month from the Dropdown");
  }
  constructor() { }

  ngOnInit() {
  }

}
