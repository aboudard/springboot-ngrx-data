import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './todos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [TodosService]
})
export class ServicesModule { }
