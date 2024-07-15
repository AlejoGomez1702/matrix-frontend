import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllSponsorsPageComponent } from './pages/list-all-sponsors-page/list-all-sponsors-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListAllSponsorsPageComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorsRoutingModule { }
