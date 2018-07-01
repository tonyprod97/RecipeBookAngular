import { EventEmitter } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  private ingredients: Ingredient[] = [];
  createIngredients = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor() {
    this.ingredients.push(new Ingredient('Butter', 2),
                      new Ingredient('bread slice', 1));
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.createIngredients.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.createIngredients.next(this.ingredients.slice());
  }
  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.createIngredients.next(this.ingredients);
  }

  getIngredients() {
    return this.ingredients.slice(); // make a copy of private array
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.createIngredients.next(this.ingredients);
  }

}
