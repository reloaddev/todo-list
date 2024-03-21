import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {MatButton, MatFabButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {CdkDropList} from "@angular/cdk/drag-drop";
import {FormsModule} from "@angular/forms";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ActiveTodosComponent} from "./active-todos/active-todos.component";
import {DoneTodosComponent} from "./done-todos/done-todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, TodoItemComponent, MatButton, MatFabButton, MatIcon, MatToolbar, CdkDropList, FormsModule, MatIconButton, ToolbarComponent, MatTab, MatTabGroup, ActiveTodosComponent, DoneTodosComponent, NgIf, AsyncPipe, NgOptimizedImage],
  templateUrl: './app.component.html'
})
export class AppComponent {

}
