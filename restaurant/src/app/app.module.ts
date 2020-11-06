import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { HttpClientModule } from '@angular/common/http'
import { AngularFireDatabaseModule } from 'angularfire2/database'
//env
import { environment } from '../environments/environment.prod';

//services
import { AuthService } from './services/auth.service';

//guards
import { AuthGuard } from './guards/auth.guard'
import { from } from 'rxjs';
import { DatafilesService } from './services/datafiles.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule, FormsModule,
     HttpClientModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule ,AngularFireDatabaseModule
    ],
  providers: [
    AuthService,
    AuthGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatafilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
