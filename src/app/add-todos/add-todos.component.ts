import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Todo } from '../model/todos.model';
import { guid } from '@datorama/akita';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodosStore } from '../state/todos.store';
import { TodosQuery } from '../state/todos.query';
import { Observable } from 'rxjs';

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
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  public async addTodo(): Promise<void> {
    if (this.addTodoForm.valid) {
      return;
    }
    try {
      const newTodo: Todo = {
        ...this.addTodoForm.value,
      };
      console.log(newTodo);
      await this.apiService.addTodo(newTodo).subscribe();
      this.router.navigate(['/']);
    } catch (error) {
      console.error(error, 'error');
    }
  }
}
