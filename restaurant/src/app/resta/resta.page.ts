import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.page.html',
  styleUrls: ['./resta.page.scss'],
})
export class RestaPage implements OnInit {
  email: string;
  password: string;

  constructor
  (
    private router: Router,
    private auth: AuthService,
    private toastr: ToastController,
    private loadingCtrl: LoadingController
    
  ) { }

  ngOnInit() {
  }
  register()
  {
    this.router.navigate(['/signupr'])
  }
  forget()
    {
      this.router.navigate(['/forget-password']);
    }
    async loginr(){
      if(this.email && this.password)
      {
        const loading = await this.loadingCtrl.create({
          message: 'Loging in ..',
          spinner:'crescent',
          showBackdrop:true
        });
        loading.present();

        this.auth.login(this.email, this.password).then(()=>{
       
          loading.dismiss();
        })
        .catch((error)=>{
          loading.dismiss();
          this.toast(error.message,'danger');
        });
      }
      else{
        this.toast('Please enter your email and password', 'danger');
      }
    }//end of login
    async toast(message, status)
     {
       const toast = await this.toastr.create({
       message: message,
        position:'top',
         color: status,
       duration: 2000
       });
         toast.present();
      }
      goToNextPage2() {
        this.router.navigateByUrl('/signupr');
      }


}
