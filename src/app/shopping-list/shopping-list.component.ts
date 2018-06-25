import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor() {
    this.ingredients.push(new Ingredient('Butter',2),
  new Ingredient('bread slice',1));
  }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
