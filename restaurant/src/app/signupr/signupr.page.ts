import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

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

  constructor
  (
    private afs:AngularFirestore,
    private afauth :AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  async register()
  {
      if(this.rname && this.email && this.password)
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
            'rname': this.rname,
            'regno': this.regno,
            'address': this.address,
            'password': this.password,
            'cpassword':this.cpassword,
            'email': this.email,
            'cellphone': this.cellphone,
            'createdAt': Date.now()
          });
          data.user.sendEmailVerification();
        })
        .then(()=>{
          loading.dismiss();
          this.toast('Registration Success!', 'success');
          this.router.navigate(['/loginr']);
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


}
