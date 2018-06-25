import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigation: string= "";
  @Output('nav') currentNavigation: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeNavigation(nav){
    this.navigation=nav.target.innerHTML;
    this.currentNavigation.emit(this.navigation);
  }
}
