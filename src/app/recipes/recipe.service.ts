import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Burger','croatian burger beef',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Umami_Burger_hamburger.jpg/220px-Umami_Burger_hamburger.jpg',
    [new Ingredient('buns',2),new Ingredient('cheese',3)]),
    new Recipe('Burger','Bosnian burger beef','https://www.maxpixel.net/static/photo/1x/Hamburger-Burger-Unhealthy-Eat-Lunch-Fast-Food-2201748.jpg',
  [new Ingredient('wheat',2)])
  ];
  selectedRecipe: EventEmitter<Recipe>= new EventEmitter();

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice(); // create copy of private array
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }
}
