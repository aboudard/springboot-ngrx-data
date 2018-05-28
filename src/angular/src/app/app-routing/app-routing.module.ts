import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { AdminModule } from '../admin/admin.module';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => AdminModule
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
