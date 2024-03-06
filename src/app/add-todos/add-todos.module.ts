import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodosRoutingModule } from './add-todos-routing.module';
import { AddTodosComponent } from './add-todos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoStore } from '../state/todos.store';
import { TodoqueryService } from '../state/todos.query';

@NgModule({
  declarations: [AddTodosComponent],
  imports: [CommonModule, AddTodosRoutingModule, ReactiveFormsModule],
  providers: [TodoStore, TodoqueryService],
})
export class AddTodosModule {}
