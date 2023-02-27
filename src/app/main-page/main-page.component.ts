import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent  {
  open$: Observable<boolean> = this.navService.open$ ;

  constructor(private navService: NavService) {}
 
}
