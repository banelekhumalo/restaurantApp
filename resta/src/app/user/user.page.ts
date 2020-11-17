import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from "firebase";
import { SearchService } from '../services/search.service';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  email: string;
  password: string;

  constructor(public afAuth: AngularFireAuth, public router:  Router, private searchService: SearchService) { }

  ngOnInit() {
  }



   async login()
   {

    this.searchService.signAuth();

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
    goToNextPage5() {
      this.router.navigateByUrl('/forgot');
       }

}
