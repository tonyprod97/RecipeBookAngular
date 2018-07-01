import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[] = [];
  constructor(private slService: ShoppingListService) {};
  private subscription: Subscription;


  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.createIngredients.subscribe((ingredients: Ingredient[]) =>
        this.ingredients = ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
}
