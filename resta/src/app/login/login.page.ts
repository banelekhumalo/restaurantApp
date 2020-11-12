import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { SearchService } from '../services/search.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  toModal = [];
  constructor(
    private router: Router,
    public alertController: AlertController,
    private modalCtrl: ModalController,
    private afauth: AngularFireAuth,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.signAuth()
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
          min:'2020-11-13',
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
    logout(){
      this.afauth.signOut().then(()=>{
        this.router.navigate(['./home']);
      })
    }
   

}
