import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { min } from 'rxjs/operators';
import * as firebase from 'firebase';
import{ AngularFireModule } from 'angularfire2';
//import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-restamenu',
  templateUrl: './restamenu.page.html',
  styleUrls: ['./restamenu.page.scss'],
})
export class RestamenuPage implements OnInit {
 
  employee: string ="";
  noOfTables: number;
  noOfEmployees: number;
  date: Date;

  menuUpdate ={
    employee: "",
    noOfTables:'',
    noOfEmployees:'',
    date : Date

  }
  Items: any;

  //db = firebase.default.firestore();

  constructor
  (
    private afauth: AngularFirestore,
    private router: Router,
    public alertController: AlertController,
    private modalCtrl: ModalController,
    private afs:AngularFirestore,
    public navCtrl: NavController
   // ,private db: AngularFireDatabase


  ) { 
   // this.Items = this.db.list('menuUpdate');
  }

  
  

  ngOnInit() {
  }
  async presentAlertPrompt()
  {
    const alert = await this.alertController.create({
      header:'Update the table',
      inputs:[
        {
          name:'employee',
          type:'text',
          placeholder:'employee name'
        },
        {
          name:'noOftables',
          type:'number',
          placeholder:'number of tables',
          min: '1',
          max: '50'
        },
        {
          name:'noOfEmployees',
          type:'number',
          placeholder:'number of employees'
        },
        {
          name:'date',
          type:'date',
          min:'2020-10-30',
          max:'2020-12-31'
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


}
