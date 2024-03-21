import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatTab} from "@angular/material/tabs";
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {LocalStorageService} from "../local-storage.service";
import {Observable} from "rxjs";

@Component({
  selector: 'active-todos',
  standalone: true,
  imports: [
    CdkDropList,
    MatTab,
    NgForOf,
    TodoItemComponent,
    MatFabButton,
    MatIcon,
    AsyncPipe,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './active-todos.component.html',
  styleUrl: './active-todos.component.css'
})
export class ActiveTodosComponent implements OnInit {

  activeTodos$!: Observable<string[]>;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.activeTodos$ = this.localStorageService.activeTodos$;
  }

  addNewItem() {
    this.localStorageService.activeTodos = [...this.localStorageService.activeTodos, ''];
  }

  updateTodo(event: any, index: number) {
    const activeTodos = this.localStorageService.activeTodos;
    activeTodos[index] = event;
    this.localStorageService.activeTodos = activeTodos;
  }

  dropItem(event: CdkDragDrop<string[]>) {
    const activeTodos = this.localStorageService.activeTodos;
    moveItemInArray(activeTodos, event.previousIndex, event.currentIndex);
    this.localStorageService.activeTodos = activeTodos;
  }

  removeItem(i: number) {
    const deletedTodos = this.localStorageService.activeTodos.slice(i, i + 1);
    this.localStorageService.activeTodos = [...this.localStorageService.activeTodos.filter(act => !deletedTodos.includes(act))];
    this.localStorageService.doneTodos = [...this.localStorageService.doneTodos, ...deletedTodos.filter(todo => todo !== '')];
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
