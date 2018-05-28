import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceFactory,
  EntityCollectionServiceBase
} from 'ngrx-data';
import { Todo } from '../dto/todo';
/**
 * Service qui map les Entities NgRx Data avec l'interface Todo
 */
@Injectable()
export class TodosService extends EntityCollectionServiceBase<Todo> {
  constructor(entityServiceFactory: EntityCollectionServiceFactory) {
    super('Todo', entityServiceFactory);
  }
}
