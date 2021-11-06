import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    component: HomeCountersComponent
  },
  {
    path: 'create',
    component: CreateProjectComponent
  },
  {
    path: 'update',
    component: UpdateProjectComponent
  },
  {
    path: 'user',
    component: UserDataComponent
  },
  
  // {
  //   path: 'special',
  //   canActivate: [AuthGuard],
  //   component: SpecialEventsComponent
  // },
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
