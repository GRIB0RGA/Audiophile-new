import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-categories',
  templateUrl: './header-categories.component.html',
  styleUrls: ['./header-categories.component.scss'],
})
export class HeaderCategoriesComponent implements OnInit {
  @Input() currentHeader: any;

  constructor() {}

  ngOnInit(): void {}
}
