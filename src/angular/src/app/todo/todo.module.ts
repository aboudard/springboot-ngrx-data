import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodosComponent } from "./todos/todos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoComponent } from "./todo.component";
import { CountervalidComponent } from "../counter/countervalid/countervalid.component";
import { CounterComponent } from "../counter/counter.component";
import { CompModule } from "../comp/comp.module";
import { TodoEditComponent } from "./todo-edit/todo-edit.component";
import { RouterModule } from "@angular/router";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { TodoRoutingModule } from "./todo.routing.module";
import { FilterModule } from "../shared/filter/filter.module";
import { InputRefModule } from "../shared/input-ref/input-ref.module";

@NgModule({
  imports: [
    CommonModule,
    InputRefModule,
    FilterModule,
    FormsModule,
    ReactiveFormsModule,
    CompModule,
    RouterModule,
    FontAwesomeModule,
    NgbDatepickerModule,
    TodoRoutingModule,
  ],
  declarations: [
    TodosComponent,
    TodoComponent,
    CounterComponent,
    CountervalidComponent,
    TodoEditComponent,
  ],
  exports: [TodosComponent],
})
export class TodoModule {}
