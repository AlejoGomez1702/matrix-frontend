import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReusableTableComponent } from './components/reusable-table/reusable-table.component';
import { ColumnValuePipe } from './pipes/column-value.pipe';
import { VideoPlayerComponent } from './components/video-player/video-player.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    AdminLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    ColumnValuePipe,
    ReusableTableComponent,
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [
    MaterialModule,
    ToolbarComponent,
    ReactiveFormsModule,
    AdminLayoutComponent,
    VideoPlayerComponent
  ]
})
export class SharedModule { }
