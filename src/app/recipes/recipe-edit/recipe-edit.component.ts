import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private rcpService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });
  }
  
  private initForm() {
    let recipeName =  '';
    let imagePath = '';
    let recipeDescription = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.rcpService.getRecipeByIndex(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      recipeDescription = recipe.description;
	    if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.pattern(/^[1-9]+[0-9]*$/), Validators.required])
          }));
        }
      }
    }
    
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(recipeDescription),
      'ingredients': ingredients,
    });
  }
  onSubmit() {
    console.log(this.editMode);
    const newRecipe = new Recipe(this.recipeForm.value['name'],
    this.recipeForm.value['description'],
    this.recipeForm.value['imagePath'],
    this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.rcpService.updateRecipe(this.id, newRecipe);
    } else {
      this.rcpService.addRecipe(newRecipe);
    }
    this.onCancel();
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.pattern(/^[1-9]+[0-9]*$/), Validators.required])
      })
     );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route});
    this.editMode = false;
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
