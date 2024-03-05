import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { TodosStore } from '../state/todos.store';
import { Observable, filter, switchMap, take } from 'rxjs';
import { Todo } from '../model/todos.model';
import { TodosQuery } from '../state/todos.query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public todos$: Observable<Array<Todo>> | undefined;
  public loading$ = this.todoQuery.selectLoading();
  constructor(
    private todoQuery: TodosQuery,
    private apiService: ApiService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.apiService.getTodos().subscribe();
    this.todos$ = this.todoQuery.selectAll();
  }
  public addtodo(): void {
    this.router.navigate(['/add-todos']);
  }

  public updateTodo(todo: Todo): void {
    this.apiService.updateTodo(todo).subscribe();
  }
}
