import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { SearchService } from '../services/search.service';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  users: Array<any> = [];
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
    firebase.firestore().collection('users').onSnapshot(res => {
      res.forEach(element => {
        // this.reservations.push(element.data());
        console.log('users: ', this.users)
        this.users.push(Object.assign( element.data(), {uid:element.id}) );
        console.log('uuu: ' + {uid:element.id})
        console.log('u: ' + element.id)
      });
    });
  }

  back()
  {
    this.router.navigateByUrl('/login')
  }
  edituserprof()
  {
    this.router.navigateByUrl('/edituserprof')
  }
}
