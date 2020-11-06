import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  email: string;
  constructor(
    private afauth: AngularFireAuth,
    private toastr: ToastController,
    private router: Router,
    private loadingCtrl:LoadingController
  ) { }

  ngOnInit() {
  }
  async resetPassword()
  {
    if(this.email)
    {
      const loading = await this.loadingCtrl.create({
        message:'Please wait ..',
        spinner:'crescent',
        showBackdrop: true
      });
      loading.present();
      
      this.afauth.sendPasswordResetEmail(this.email).then(()=>{
        loading.dismiss();
        this.toast('successful, please check your emails','success');
        this.router.navigate(['/home']);
      })
      .catch((error)=>{
        this.toast(error.message,'danger')
      })
    } else{
      this.toast('Please enter your email address','danger');
    }

  } //end of reset password

  async toast(message, status)
     {
       const toast = await this.toastr.create({
       message: message,
        position:'top',
         color: status,
       duration: 2000
       });
         toast.present();
      }//end of toast
      logout(){
        this.afauth.signOut().then(()=>{
          this.router.navigate(['./home']);
        })
      }

}
