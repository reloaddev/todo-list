import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [
    NgForOf,
    MatCheckbox,
    CdkDrag,
    FormsModule
  ],
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {

  @Input() todo!: string;
  @Input() disabled = false;
  @Output() todoChange = new EventEmitter<string>();
  @Output() deleteTodoEvent = new EventEmitter<void>();

  removeTodo() {
    setTimeout(() => {
      this.deleteTodoEvent.emit();
    }, 1000)
  }

  onTodoChange() {
    this.todoChange.emit(this.todo);
  }

}
