import { EventEmitter } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

export class ShoppingListService {

  private ingredients: Ingredient[] = [];
  createIngredients: EventEmitter<Ingredient[]>= new EventEmitter

  constructor() {
    this.ingredients.push(new Ingredient('Butter',2),
                      new Ingredient('bread slice',1));
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.createIngredients.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.createIngredients.emit(this.ingredients.slice());
  }

  getIngredients(){
    return this.ingredients.slice(); // make a copy of private array
  }

}
