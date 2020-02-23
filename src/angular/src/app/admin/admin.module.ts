import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UploadComponent } from './upload/upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  declarations: [AdminComponent, UploadComponent]
})
export class AdminModule {}
