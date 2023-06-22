import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoComponent } from "../todo/todo.component";
import { TodoEditComponent } from "../todo/todo-edit/todo-edit.component";

const routes: Routes = [
  {
    path: "files",
    loadChildren: () =>
      import("../files/files.module").then((m) => m.FilesModule),
    title: "File management",
  },
  {
    path: "todo",
    loadChildren: () => import("../todo/todo.module").then((m) => m.TodoModule),
    title: "Todo management",
  },
  {
    path: "",
    redirectTo: "todo",
    pathMatch: "full",
  },
  { path: "**", redirectTo: "todo" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
