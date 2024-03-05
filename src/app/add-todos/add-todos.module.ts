import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodosRoutingModule } from './add-todos-routing.module';
import { AddTodosComponent } from './add-todos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosStore } from '../state/todos.store';
import { TodosQuery } from '../state/todos.query';

@NgModule({
  declarations: [AddTodosComponent],
  imports: [CommonModule, AddTodosRoutingModule, ReactiveFormsModule],
  providers: [TodosStore, TodosQuery],
})
export class AddTodosModule {}
