import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datafromuser',
  templateUrl: './datafromuser.page.html',
  styleUrls: ['./datafromuser.page.scss'],
})
export class DatafromuserPage implements OnInit {
  page = 0;
  resultsCount =10;
  totalPages = 10;

  data = [];
  constructor() { }

  ngOnInit() {
  }

}
