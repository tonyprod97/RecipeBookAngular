import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from '../../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Response } from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService : AuthService) { }

  ngOnInit() {
  }

  onSave() {
    this.subscription = this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetch() {
    this.dataStorageService.getRecipes();
  }
  onLogout() {
    this.authService.logout();
  }

}
