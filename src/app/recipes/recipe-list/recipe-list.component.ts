import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Burger','croatian burger beef','https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Umami_Burger_hamburger.jpg/220px-Umami_Burger_hamburger.jpg'),
    new Recipe('Burger','Bosnian burger beef','https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Umami_Burger_hamburger.jpg/220px-Umami_Burger_hamburger.jpg')
  ];
  @Output('displayDetails') recipeToDisplayDetails: EventEmitter<Recipe>= new EventEmitter();
  constructor() {
    console.log(this.recipes)
   }

  ngOnInit() {
  }

  onRecipeSected(recipe: Recipe){
    this.recipeToDisplayDetails.emit(recipe);
  }
}
