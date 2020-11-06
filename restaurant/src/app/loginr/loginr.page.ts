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
  goToNextPage2() {
    this.router.navigateByUrl('/restamenu');
  }
  goToNextPage() {
    this.router.navigateByUrl('/resta-profile');
  }
  goToNextPage1() {
    this.router.navigateByUrl('/datafromuser');
  }
  goToNextPage3() {
    this.router.navigateByUrl('/appointments');
  }
  goToNextPage4() {
    this.router.navigateByUrl('/loginr');
  }
  goToNextPage5() {
    this.router.navigateByUrl('/group');
  }
  goToNextPage6() {
    this.router.navigateByUrl('/settings');
  }
  logout(){
    this.afauth.signOut().then(()=>{
      this.router.navigate(['./home']);
    })
  }

}
