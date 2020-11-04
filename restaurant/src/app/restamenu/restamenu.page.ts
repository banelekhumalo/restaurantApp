import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { min } from 'rxjs/operators';
import { DatafilesService } from '../services/datafiles.service';

@Component({
  selector: 'app-restamenu',
  templateUrl: './restamenu.page.html',
  styleUrls: ['./restamenu.page.scss'],
})
export class RestamenuPage implements OnInit {
 
  employee: string ="";
  noOftables: number;
  noOfEmployees: number;
  date: Date;

  constructor
  (
    private afauth: AngularFirestore,
    private router: Router,
    public alertController: AlertController,
    private modalCtrl: ModalController,
    private afs:AngularFirestore,
    public datafiles: DatafilesService
    
  ) { }

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
