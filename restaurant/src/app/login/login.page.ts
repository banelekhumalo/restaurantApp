import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { BookmodalComponent } from '../components/bookmodal/bookmodal.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() resname;
  @Input() noOfPeople;
  @Input() time;
  @Input() date;


  toModal = [];

  constructor
  (
    private afauth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController,
    private modalCtrl: ModalController
  ) {
     
    
   }

  ngOnInit() {
   
  }
   logout(){
    this.afauth.signOut().then(()=>{
      this.router.navigate(['./home']);
    })
  }
 

    async presentAlertPrompt()
    {
      const alert = await this.alertController.create({
        header:'Book a Table',
        inputs:[
          {
            name:'resname',
            type:'text',
            placeholder:'Reservation Under'
          },
          {
            name:'noOfPeople',
            type:'number',
            placeholder:'number of people'
          },
          {
            name:'date',
            type:'date',
            min:'2020-10-30',
            max:'2020-12-31'
          },
          {
            name:'time',
            type:'time',
            min:'09:00',
            max:'21:00'
          }
        ], buttons: [
          {
            text:'Cancel',
            role:'cancel',
            cssClass:'secondary',
            handler:()=>{
              console.log('Confirm Cancel');
            }
          },{
            text: 'Ok',
            handler: ()=>{
              console.log('Confirm Ok');
            }
          }
        ]
      });
      await alert.present();
      let result = await alert.onDidDismiss();
     console.log(result.data.values);

      }

      _ionChange(event){
        console.log(event.detail.value)
      }

    
     

}
