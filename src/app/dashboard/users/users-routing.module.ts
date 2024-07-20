import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllUsersPageComponent } from './pages/list-all-users-page/list-all-users-page.component';
import { ListAllUsersBySponsorPageComponent } from './pages/list-all-users-by-sponsor-page/list-all-users-by-sponsor-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListAllUsersPageComponent },
      { path: ':id', component: ListAllUsersBySponsorPageComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
