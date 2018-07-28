import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from "@angular/core";
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule {}