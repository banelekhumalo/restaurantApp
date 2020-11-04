import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { 
    this.loadData();
  }

  ngOnInit() {
  }
  loadData(){
    this.http.get(`https://randomuser.me/api/?page=${this.page}&results=${this.resultsCount}`).subscribe(
      res =>{
        console.log('res_', res);
        this.data = res['results'];
      });
  }

}
