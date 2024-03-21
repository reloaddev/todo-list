import {Component, OnInit} from '@angular/core';
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {LocalStorageService} from "../local-storage.service";
import {Observable} from "rxjs";

@Component({
  selector: 'done-todos',
  standalone: true,
  imports: [
    TodoItemComponent,
    NgForOf,
    AsyncPipe,
  ],
  templateUrl: './done-todos.component.html'
})
export class DoneTodosComponent implements OnInit {

  doneTodos$!: Observable<string[]>;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
       this.doneTodos$ = this.localStorageService.doneTodos$;
  }

}
