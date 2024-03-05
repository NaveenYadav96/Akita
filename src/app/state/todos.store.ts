import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { Todo } from '../model/todos.model';
import { Injectable } from '@angular/core';

export interface TodosState extends EntityState<Todo> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super();
  }
}
