import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component';
import { UploadComponent } from './upload/upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [FilesComponent, UploadComponent, ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FilesRoutingModule
  ]
})
export class FilesModule { }
