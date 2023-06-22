import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo.component";
import { TodoEditComponent } from "./todo-edit/todo-edit.component";

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
    title: "Todo management",
  },
  {
    path: "view/:id",
    component: TodoEditComponent,
    title: "Todo edition",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
