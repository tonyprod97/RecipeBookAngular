import { RecipeSelectStartComponent } from './recipes/recipe-select-start/recipe-select-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeSelectStartComponent},
    { path: 'new', component: RecipeEditComponent},
    { path: ':id' , component: RecipeDetailComponent},
    { path: ':id/edit', component: RecipeEditComponent}
  ]},
  { path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRouterConfig {}
