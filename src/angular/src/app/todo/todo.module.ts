import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  declarations: [TodosComponent],
  exports: [TodosComponent]
})
export class TodoModule {}
