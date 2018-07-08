import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Burger','croatian burger beef',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Umami_Burger_hamburger.jpg/220px-Umami_Burger_hamburger.jpg',
    [new Ingredient('buns',2),new Ingredient('cheese',3)]),
    new Recipe('Burger','Bosnian burger beef','https://www.maxpixel.net/static/photo/1x/Hamburger-Burger-Unhealthy-Eat-Lunch-Fast-Food-2201748.jpg',
  [new Ingredient('wheat',2)])
  ];
  
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // create copy of private array
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes);
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe (recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }
  updateRecipe (index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes);
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  } 
}
