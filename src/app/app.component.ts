import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCPp4L7LxYmwJT4Ygn98rb8AEQe1cdGJEE",
      authDomain: "recipe-book-2098f.firebaseapp.com",
    });
  }
}
