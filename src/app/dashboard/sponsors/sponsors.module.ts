import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { ListAllSponsorsPageComponent } from './pages/list-all-sponsors-page/list-all-sponsors-page.component';


@NgModule({
  declarations: [
    ListAllSponsorsPageComponent
  ],
  imports: [
    CommonModule,
    SponsorsRoutingModule
  ]
})
export class SponsorsModule { }
