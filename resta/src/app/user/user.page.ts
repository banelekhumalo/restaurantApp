import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  email: string;
  password: string;

  constructor(public afAuth: AngularFireAuth, public router:  Router) { }

  ngOnInit() {
  }



   async login()
   {
     const {email, password} =this
     try{
       const res = await this.afAuth.signInWithEmailAndPassword(email, password)
       this.router.navigate(['/login']);
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

}
