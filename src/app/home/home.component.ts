import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

import { Observable, filter, switchMap, take } from 'rxjs';
import { Todo } from '../model/todos.model';
import { TodoqueryService } from '../state/todos.query';
import { TodoService } from '../state/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public todosLists$!: Observable<Array<Todo>>;
  public loading$ = this.todoQuery.selectLoading();
  constructor(
    private todoQuery: TodoqueryService,
    private router: Router,
    private todoService: TodoService
  ) {
    this.todosLists$ = this.todoQuery.selectAll();
  }

  public addtodo(): void {
    this.router.navigate(['/add-todos']);
  }
}
