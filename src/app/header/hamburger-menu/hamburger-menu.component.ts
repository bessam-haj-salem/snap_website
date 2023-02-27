import { Component } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent {
  open: boolean = false;
  feature_list: boolean = false
  feature_list_company: boolean = false

  constructor(private navService: NavService) {}

  openNav() {
    this.open = true;
    this.navService.getNav(true)
  }
  openList() {
    this.feature_list = !this.feature_list
  }
  closeNav() {
    this.open = false;
    this.feature_list = false
    this.feature_list_company = false
    this.navService.getNav(false)

  }
  openListCompany() {
    this.feature_list_company = !this.feature_list_company
  }
 
  
}
