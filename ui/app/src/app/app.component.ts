import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuItems: LazyComponentItem[] = [];
  constructor(private menuService: MenuService) { }
  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(menuItems => {
      this.menuItems = menuItems;
    })
  }
  module: LazyComponentItem;


  loadComponent(moduleToLoad: LazyComponentItem) {
    this.module = moduleToLoad;
  }
}
