import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListAllUsersPageComponent } from './pages/list-all-users-page/list-all-users-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ListAllUsersPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
