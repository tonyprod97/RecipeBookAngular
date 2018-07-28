import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { AppRouterConfig } from './../router-config.module';
import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRouterConfig
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService
    ],
    exports: [
        AppRouterConfig,
        HeaderComponent
    ]
})
export class CoreModule { }