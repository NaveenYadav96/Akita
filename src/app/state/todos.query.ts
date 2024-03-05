import { QueryEntity } from '@datorama/akita';
import { TodosState, TodosStore } from './todos.store';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todos.model';

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState, Todo> {
  constructor(protected todoStore: TodosStore) {
    super(todoStore);
  }
}
