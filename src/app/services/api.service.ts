import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todos.model';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TodoStore } from '../state/todos.store';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private todoStore: TodoStore, private http: HttpClient) {}

  private readonly apiUrl: string = environment.apiUrl;

  public getTodos() {
    return this.http.get<Todo[]>(this.apiUrl).pipe(
      tap((todos) => {
        this.todoStore.set(todos);
      })
    );
  }

  public addTodo(todo: Todo) {
    return this.http.post<Todo>(this.apiUrl, todo).pipe(
      tap((newTodo) => {
        this.todoStore.add(newTodo);
      })
    );
  }

  public updateTodo(todo: Todo) {
    return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, todo).pipe(
      tap(() => {
        this.todoStore.update(todo.id, todo);
      })
    );
  }
}
