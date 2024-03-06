import { QueryEntity } from '@datorama/akita';

import { Injectable } from '@angular/core';
import { Todo } from '../model/todos.model';
import { TodoState, TodoStore } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodoqueryService extends QueryEntity<TodoState> {
  constructor(protected todosstore: TodoStore) {
    super(todosstore);
  }
}
