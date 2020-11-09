import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

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
  constructor(public afAuth: AngularFireAuth,
     private router: Router) { }
  
  ngOnInit() {
  }
 
  async register()
  {
   const { rname,regno,address, email,password, cpassword}= this
    if(password !== cpassword)
    {
      return console.error("Password do not match");
   
    }
    try
    {
     const res = await this.afAuth.createUserWithEmailAndPassword(email, password )
     console.log(res);
     this.router.navigate(['./loginr']);
        

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
