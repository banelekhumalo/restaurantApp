import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginr',
  templateUrl: './loginr.page.html',
  styleUrls: ['./loginr.page.scss'],
})
export class LoginrPage implements OnInit {

  constructor(
    private afauth: AngularFireAuth,
    private router: Router
    


  ) { }

  ngOnInit() {
  }
  logout(){
    this.afauth.signOut().then(()=>{
      this.router.navigate(['./home']);
    })
  }

}
