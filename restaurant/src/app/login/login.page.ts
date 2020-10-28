import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor
  (
    private afauth: AngularFireAuth,
    private router: Router

  ) { }

  ngOnInit() {
  }
   logout(){
    this.afauth.signOut().then(()=>{
      this.router.navigate(['./user']);
    })
  }

}
