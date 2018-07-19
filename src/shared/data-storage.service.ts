import { RecipeService } from './../app/recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Recipe } from '../app/recipes/recipe.model';
import '../../node_modules/rxjs/add/operator/map';
import { Observable } from 'rxjs';



@Injectable()
export class DataStorageService {
    baseRoot = 'https://recipe-book-2098f.firebaseio.com/';

    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put(this.baseRoot+'recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get(this.baseRoot+'recipes.json').map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes) {
                    if(!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}