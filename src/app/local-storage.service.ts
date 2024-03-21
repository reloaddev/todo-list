import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  activeTodos$ = new BehaviorSubject(this.activeTodos);
  doneTodos$ = new BehaviorSubject(this.doneTodos);

  set activeTodos(todos: string[]) {
    this.activeTodos$.next(todos);
    localStorage.setItem('active', JSON.stringify(todos));
  }

  get activeTodos() {
    const savedTodos = localStorage.getItem('active');
    return savedTodos === null ? [] : JSON.parse(savedTodos);
  }

  set doneTodos(todos: string[]) {
    this.doneTodos$.next(todos);
    localStorage.setItem('done', JSON.stringify(todos));
  }

  get doneTodos() {
    const savedTodos = localStorage.getItem('done');
    return savedTodos === null ? [] : JSON.parse(savedTodos);
  }

}
