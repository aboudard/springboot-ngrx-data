import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from '../todo/todo.component';
import { TodoEditComponent } from '../todo/todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: 'files',
    loadChildren: () => import('../files/files.module').then(m => m.FilesModule)
  },
  {
    path: 'todopage',
    component: TodoComponent
  },
  {
    path: 'todopage/:id',
    component: TodoEditComponent
  },
  {
    path: '',
    redirectTo: 'todopage',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'todopage' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
