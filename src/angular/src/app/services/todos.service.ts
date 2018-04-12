// todos.service.ts
import { Injectable } from '@angular/core';
import { EntityServiceBase, EntityServiceFactory } from 'ngrx-data';
import { Todo } from '../dto/todo';
@Injectable()
export class TodosService extends EntityServiceBase<Todo> {
  constructor(entityServiceFactory: EntityServiceFactory) {
    super('Todo', entityServiceFactory);
  }
}
