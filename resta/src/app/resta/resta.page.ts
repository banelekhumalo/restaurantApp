import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.page.html',
  styleUrls: ['./resta.page.scss'],
})
export class RestaPage implements OnInit {
  email: string;
  password: string;

  employee:string;
  date: Date;
  noOfEmployees: number;
  noOfTables: number;

  constructor( private router: Router) { }

  ngOnInit() {
  }
  goToNextPage2() {
    this.router.navigateByUrl('/signupr');
  }
}
