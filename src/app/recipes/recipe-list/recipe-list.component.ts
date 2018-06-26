import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] ;
  @Output('displayDetails') recipeToDisplayDetails: EventEmitter<Recipe>= new EventEmitter();

  constructor(private recipeService: RecipeService) {
    console.log(this.recipes)
   }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

}
