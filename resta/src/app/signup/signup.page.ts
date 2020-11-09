import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


// import * as firebase from 'firebase/app';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name : string;
  lname: string;
  email:string;
  gender: string;
  cellphone: number;
  password: string;
  cpassword: string;

  passwordMatch: boolean;

  constructor(private router:Router, public afAuth: AngularFireAuth)
   {
   
    }

  ngOnInit() {
  }
  goToNextPage2() {
    this.router.navigateByUrl('/home');
     }

     async register()
     {
      const { name,lname,gender, cellphone, email,password, cpassword}= this
       if(password !== cpassword)
       {
         return console.error("Password do not match");
       }
       try
       {
        const res = await this.afAuth.createUserWithEmailAndPassword(email, password )
        console.log(res)
       }catch(error)
       {
          console.dir(error)
       }
      
     }



     checkPassword(){
      if(this.password == this.cpassword)
      {
        this.passwordMatch = true;
      }else {
        this.passwordMatch = false;
      }
    }

}
