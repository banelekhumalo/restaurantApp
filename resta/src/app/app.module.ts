import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire'
import firebaseConfig from './firebase';
import {AngularFireAuthModule } from '@angular/fire/auth';
import  firebase from 'firebase'
import { from } from 'rxjs';


firebase.initializeApp(
   {
    apiKey: "AIzaSyAgve50KJjfe-VDihPzPawOWPXBj4TrDMg",
    authDomain: "resta-ff968.firebaseapp.com",
    databaseURL: "https://resta-ff968.firebaseio.com",
    projectId: "resta-ff968",
    storageBucket: "resta-ff968.appspot.com",
    messagingSenderId: "551692102156",
    appId: "1:551692102156:web:b0e5947b45f40cf53f5c29",
    measurementId: "G-L93EMQVNQD"
  }
)

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
