import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Todo } from '../model/todos.model';
import { guid } from '@datorama/akita';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { TodoService } from '../state/todo.service';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.scss'],
})
export class AddTodosComponent {
  public newTodoText: string = '';
  public addTodoForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    completed: ['', [Validators.required, Validators.email]],
  });
  constructor(
    private todoService: TodoService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  public addTodo(): void {
    const newTodo: Todo = {
      ...this.addTodoForm.value,
    };
    this.todoService.addTodo(newTodo);
    this.router.navigate(['/']);
  }
}
