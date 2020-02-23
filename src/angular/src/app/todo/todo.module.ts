import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { CountervalidComponent } from '../counter/countervalid/countervalid.component';
import { CounterComponent } from '../counter/counter.component';
import { CompModule } from '../comp/comp.module';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { RouterModule } from '@angular/router';
import { NgbDatepicker, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CompModule,
    RouterModule,
    FontAwesomeModule,
    NgbDatepickerModule
  ],
  declarations: [
    TodosComponent,
    TodoComponent,
    CounterComponent,
    CountervalidComponent,
    TodoEditComponent
  ],
  exports: [TodosComponent]
})
export class TodoModule {}
