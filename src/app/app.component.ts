import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf} from "@angular/common";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, TodoItemComponent, MatButton, MatFabButton, MatIcon, MatToolbar, CdkDropList, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  todos: string[] = [];

  ngOnInit() {
    const storedTodos = localStorage.getItem('storedTodos');
    this.todos = JSON.parse(storedTodos === null ? '' : storedTodos);
  }

  addNewItem() {
    this.todos.push("");
    this.saveTodoItems();
  }

  updateTodo(event: any, index: number) {
    this.todos[index] = event;
    this.saveTodoItems();
  }

  removeItem(i: number) {
    this.todos.splice(i, 1);
    this.saveTodoItems();
  }

  dropItem(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    this.saveTodoItems();
  }

  private saveTodoItems() {
    localStorage.setItem('storedTodos', JSON.stringify(this.todos));
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
