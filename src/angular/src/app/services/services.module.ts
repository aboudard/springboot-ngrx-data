import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './todos.service';
import { ToastService } from './toast.service';
import { FilesService } from './files.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [TodosService, ToastService, FilesService]
})
export class ServicesModule {}
