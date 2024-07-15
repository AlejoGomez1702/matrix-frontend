import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllUsersPageComponent } from './pages/list-all-users-page/list-all-users-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListAllUsersPageComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
