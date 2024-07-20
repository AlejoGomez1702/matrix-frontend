import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListAllUsersPageComponent } from './pages/list-all-users-page/list-all-users-page.component';
import { SharedModule } from '../../shared/shared.module';
import { DialogChangeStateComponent } from './components/dialog-change-state/dialog-change-state.component';
import { ListAllUsersBySponsorPageComponent } from './pages/list-all-users-by-sponsor-page/list-all-users-by-sponsor-page.component';


@NgModule({
  declarations: [
    ListAllUsersPageComponent,
    DialogChangeStateComponent,
    ListAllUsersBySponsorPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
