import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserRepositoriesComponent } from './components/user-repositories/user-repositories.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/users-list',
    pathMatch: 'full'
  },
  {
    path:'users-list',
    component: UsersListComponent
  },
  {
    path:'user-repositories/:userid',
    component: UserRepositoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
