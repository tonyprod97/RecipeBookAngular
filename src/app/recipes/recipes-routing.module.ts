import { RouterModule } from '@angular/router';
import { AuthGuard } from './../auth/auth-guard.service';
import { RecipeSelectStartComponent } from './recipe-select-start/recipe-select-start.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from "@angular/core";
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipeRoutes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeSelectStartComponent},
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        { path: ':id' , component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
      ]}
];

@NgModule({
    imports : [
        RouterModule.forChild(recipeRoutes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class RecipesRoutingModule {}