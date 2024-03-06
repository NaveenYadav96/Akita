import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from '../model/todos.model';
import { Injectable } from '@angular/core';

export interface TodoState extends EntityState<Todo> {}
@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'todos',
})
export class TodoStore extends EntityStore<TodoState> {
  constructor() {
    super();
  }
}
