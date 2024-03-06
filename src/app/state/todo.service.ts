import { Injectable } from '@angular/core';
import { TodoStore } from './todos.store';
import { Todo } from '../model/todos.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private todoStore: TodoStore) {}

  public addTodo(todos: Todo) {
    this.todoStore.add(todos);
  }
}
