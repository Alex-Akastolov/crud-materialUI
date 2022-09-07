import {Component} from '@angular/core';
import {DialogComponent} from "./dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });

  }
}
