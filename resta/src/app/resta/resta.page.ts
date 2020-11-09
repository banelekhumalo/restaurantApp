import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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

  constructor( private router: Router,
    private afAuth: AngularFireAuth) { }
  async loginr()
  {
    const {email, password} =this
    try{
      const res = await this.afAuth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['/loginr']);
    }catch(err)
    {
      console.dir(err)
      if(err.code === "auth/user-not-found")
      {
        console.log("User not found");
      }
    }
    
  }


   logout(){
     this.afAuth.signOut().then(()=>{
       this.router.navigate(['./home']);
     })
   }
  ngOnInit() {
  }
  goToNextPage2() {
    this.router.navigateByUrl('/signupr');
  }
}
