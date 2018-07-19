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
      apiKey: "AIzaSyDL5ZRzaDRQWUWVhqJcg0ZTNdz66JbFRd0",
      authDomain: "recipe-book-3a3cc.firebaseapp.com"
    });
  }
}
