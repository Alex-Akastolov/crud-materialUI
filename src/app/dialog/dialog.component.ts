import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  productionConditionList = [
    {value: 'new', caption: 'Новый'},
    {value: 'used', caption: 'Б/у'},
    {value: 'repaired', caption: 'После ремонта'}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
