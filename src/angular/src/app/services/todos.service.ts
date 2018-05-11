// todos.service.ts
import { Injectable } from '@angular/core';
import { EntityCollectionServiceFactory, EntityCollectionServiceBase } from 'ngrx-data';
import { Todo } from '../dto/todo';
@Injectable()
export class TodosService extends EntityCollectionServiceBase<Todo> {
  constructor(entityServiceFactory: EntityCollectionServiceFactory) {
    super('Todo', entityServiceFactory);
  }
}
