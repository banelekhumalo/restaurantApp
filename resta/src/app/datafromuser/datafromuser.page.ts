import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonInfiniteScroll, IonSearchbar, LoadingController, ModalController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import { SearchService } from '../services/search.service';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';



@Component({
  selector: 'app-datafromuser',
  templateUrl: './datafromuser.page.html',
  styleUrls: ['./datafromuser.page.scss'],
})
export class DatafromuserPage implements OnInit {
  page = 0;
  resultsCount =10;
  totalPages = 10;
  
  products:Array<any> =[];
  lastKey: string = null;

  //uid = this.activatedActivated.snapshot.params.id;
  restaurants: Array<any> = [];

  reservations: Array<any> = [];
  // restaurants: any;
  id: any
  disableButton;
  data = [];
  constructor(
    public nav:NavController,
    private loadingController: LoadingController,
    private modalCtrlr: ModalController,
    private router: Router,
    private activatedActivated: ActivatedRoute, 
    private searchService: SearchService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.searchService.signAuth()

    let user = firebase.auth().currentUser.uid
    console.log('user: ', user)
    firebase.firestore().collection('restaurants').doc(user).collection('bookings').where('ownerId', '==', user).onSnapshot(res => {
      res.forEach(element => {
        // this.reservations.push(element.data());
        console.log('Bookings: ', this.reservations)
        this.reservations.push(Object.assign( element.data(), {uid:element.id}) );
        console.log('uuu: ' + {uid:element.id})
        console.log('u: ' + element.id)
      });
    });
  }
  
  async showAlert()
  {
    await this.alertCtrl.create({
      header:"Process of Confirming booking",
      subHeader:"confirmed booking",
      message:"Are you sure about this step?",
      inputs:[
        {type:'password', name:'promo', placeholder:"Enter Password"}
      ],
      buttons:[
        {
          text:"Apply", handler:(res) => {
            console.log(res.promo);
            //this.simon();
          }
        },
        {
          text:"Cancel"
        }
      ]

    }).then(res => res.present())
  }

  
  async declineAlert()
  {
    await this.alertCtrl.create({
      header:"Process of Declining booking",
      subHeader:"confirmed booking",
      message:"The booking is not successful!",
      inputs:[
        {type:'text', name:'promo', id:"promo", placeholder:"Response text"}
      ],
      buttons:[
        {
          text:"Apply", handler:(res) => {
            console.log(res.promo);
          }
        },
        {
          text:"Cancel"
        }
      ]

    }).then(res => res.present())
  }

  truthClick() {
    this.disableButton = true;
    }
   
    simon(){
    
      let shareData = {
        title:'BCK',
        text:'Learn web development',
        url:'https://banelekhumalo.github.io',
      }
    
    
      const btn = document.querySelector('button');
      const resultPara = document.querySelector('.result');
    
      btn.addEventListener('click',  () => {
        
             navigator.share(shareData)
             .then( () =>
             resultPara.textContent = 'BCK shared successfully'
             )
            .catch((e) => 
            resultPara.textContent = 'Error' + e
            )  
      });
    }
    back(){
      this.router.navigateByUrl('/loginr')
    }


}
