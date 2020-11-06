import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupr',
  templateUrl: './signupr.page.html',
  styleUrls: ['./signupr.page.scss'],
})
export class SignuprPage implements OnInit {
  
  rname :string;
  regno :string;
  cellphone :number;
  address : string;
  email: string;
  password: string;
  cpassword :string;
  passwordMatch: boolean;
  constructor() { }

  ngOnInit() {
  }

}
