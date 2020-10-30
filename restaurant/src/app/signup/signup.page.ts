import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { error } from 'protractor';

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
  
  constructor
  (
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

    async register()
    {
        if(this.name && this.email && this.password)
        {
          const loading = await this.loadingCtrl.create({
            message:'loading..',
            spinner:'crescent',
            showBackdrop:true
          });

          loading.present();
          
          this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data)=>{
            this.afs.collection('users').doc(data.user.uid).set({
              'userId': data.user.uid,
              'name': this.name,
              'lname': this.lname,
              'password': this.password,
              'cpassword':this.cpassword,
              'email': this.email,
              'gender': this.gender,
              'cellphone': this.cellphone,
              'createdAt': Date.now()
            });
            data.user.sendEmailVerification();
          })
          .then(()=>{
            loading.dismiss();
            this.toast('Registration Success!', 'success');
            this.router.navigate(['/login']);
          })
          .catch((error)=>{
            loading.dismiss();
           this.toast(error.message,'danger');
          })
        }else{
          this.toast('Please fill the form requirements!','danger')
        }
      
    } //end of register

    checkPassword(){
      if(this.password == this.cpassword)
      {
        this.passwordMatch = true;
      }else {
        this.passwordMatch = false;
      }
    }

    async toast(message, status)
    {
      const toast = await this.toastr.create({
        message: message,
        position:'top',
        color:status,
        duration:2000
      });
      toast.present();
    }//end of toast
    goToNextPage2() {
      this.router.navigateByUrl('/signup');
    }

}
