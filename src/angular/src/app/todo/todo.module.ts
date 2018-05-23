import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { CountervalidComponent } from '../counter/countervalid/countervalid.component';
import { CounterComponent } from '../counter/counter.component';
import { HelloComponent } from '../comp/hello/hello.component';
import { CompModule } from '../comp/comp.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CompModule
  ],
  declarations: [
    TodosComponent,
    TodoComponent,
    CounterComponent,
    CountervalidComponent
  ],
  exports: [TodosComponent]
})
export class TodoModule {}
