import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './todos.service';
import { ToastService } from './toast.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [TodosService, ToastService]
})
export class ServicesModule { }
