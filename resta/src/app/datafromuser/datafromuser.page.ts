import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll, IonSearchbar, LoadingController, ModalController, NavController } from '@ionic/angular';
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

  data = [];
  constructor(
    public nav:NavController,
    private loadingController: LoadingController,
    private modalCtrlr: ModalController,
    private router: Router,
    private activatedActivated: ActivatedRoute, 
    private searchService: SearchService
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
  


}
