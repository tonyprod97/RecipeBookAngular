import { AuthService } from './../app/auth/auth.service';
import { RecipeService } from './../app/recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Recipe } from '../app/recipes/recipe.model';
import '../../node_modules/rxjs/add/operator/map';
import { map } from "rxjs/operators";




@Injectable()
export class DataStorageService {
    baseRoot = 'https://recipe-book-2098f.firebaseio.com/';

    constructor(private http: Http, private recipeService: RecipeService,
                        private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();

        return this.http.put(this.baseRoot+'recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        
        this.http.get(this.baseRoot + 'recipes.json?auth=' + token).pipe(map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes) {
                    if(!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}