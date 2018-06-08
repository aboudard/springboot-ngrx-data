import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from '../todo/todo.component';
import { AdminModule } from '../admin/admin.module';
import { TodoEditComponent } from '../todo/todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todopage',
    pathMatch: 'full'
  },
  {
    path: 'adminpage',
    loadChildren: () => AdminModule
  },
  {
    path: 'todopage',
    component: TodoComponent
  },
  { path: 'todopage/:id', component: TodoEditComponent },
  { path: '**', redirectTo: 'todopage' } // bad routes redirect to todopage
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
