import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

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
    private afAuth: AngularFireAuth,
    private toastr: ToastController,
    private loadingCtrl:LoadingController) { }
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
      
      this.afAuth.sendPasswordResetEmail(this.email).then(()=>{
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

      goToNextPage5() {
        this.router.navigateByUrl('/forgot');
         }


}
