import { Component } from '@angular/core';

@Component({
  selector: 'menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss'],
})
export class MenuDesktopComponent {
  feature_list: boolean = false;
  feature_list_company: boolean = false;

  openList() {
    this.feature_list = !this.feature_list;
  }

  openListCompany() {
    this.feature_list_company = !this.feature_list_company;
  }
}
