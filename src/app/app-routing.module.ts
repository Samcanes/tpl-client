import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatorGuard } from './authenticator.guard';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HomeCountersComponent } from './home-counters/home-counters.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeCountersComponent,
  },
  {
    path: 'create',
    component: CreateProjectComponent,
    canActivate: [AuthenticatorGuard],
  },
  {
    path: 'update',
    canActivate: [AuthenticatorGuard],
    component: UpdateProjectComponent
  },
  {
    path: 'user',
    canActivate: [AuthenticatorGuard],
    component: UserDataComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
