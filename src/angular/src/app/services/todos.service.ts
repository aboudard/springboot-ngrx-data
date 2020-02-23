import { Injectable } from '@angular/core';

import { Todo } from '../dto/todo';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
/**
 * Service qui map les Entities NgRx Data avec l'interface Todo
 */
@Injectable({ providedIn: 'root' })
export class TodosService extends EntityCollectionServiceBase<Todo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Todo', serviceElementsFactory);
  }
}
