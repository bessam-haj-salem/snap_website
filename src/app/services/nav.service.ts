import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  openSubject = new Subject<boolean>();
  open$ = this.openSubject.asObservable();
  constructor() {}

  getNav(open: boolean): void {
    this.openSubject.next(open);
  }
}
