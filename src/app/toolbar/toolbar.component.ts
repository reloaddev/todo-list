import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar
  ],
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {

}
