import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor
  (
    private router: Router
  ) {}


  goToNextPage() {
     this.router.navigateByUrl('/user');
}
goToNextPage2() {
  this.router.navigateByUrl('/resta');
}
}
