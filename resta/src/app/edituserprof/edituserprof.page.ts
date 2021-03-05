import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { LoadingController, AlertController, ToastController, MenuController } from '@ionic/angular';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-edituserprof',
  templateUrl: './edituserprof.page.html',
  styleUrls: ['./edituserprof.page.scss'],
})
export class EdituserprofPage implements OnInit {
  updateForm: FormGroup

  selectedFile: File = null;
  upLoadedFile: any;
  id: any;
  users: firebase.firestore.DocumentData;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private searchService: SearchService,
    private loaderCtrl: LoadingController,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private activatedRoute: ActivatedRoute,
    private menu: MenuController
  ) { }

  ngOnInit() { 

    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log('ID: ', this.id)

    // fetching single restaurant by it's id and set the values
    firebase.firestore().collection('users').doc(this.id).get().then(snapshot => {
      this.users = snapshot.data();
      console.log('New Document Data: ', this.users)
      this.updateForm.controls['name'].setValue(this.users.name),
        this.updateForm.controls['lname'].setValue(this.users.lname),
        this.updateForm.controls['cellphone'].setValue(this.users.cellphone),
        this.updateForm.controls['email'].setValue(this.users.email),
        this.updateForm.controls['imgUrl'].setValue(this.users.imgUrl)
    });

    this.updateUser();
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }

  updateUser() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.0]+.[a-zA-Z]{2,4}$')]],
      cellphone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')]],
      imgUrl: ['', Validators.required]
    });
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadstart = (p) => {
      console.log(p);
    };
    reader.onloadend = (e) => {
      console.log(e.target);
      this.upLoadedFile = reader.result;
      this.updateForm.get('imgUrl').setValue(this.upLoadedFile);
      //console.log(this.upLoadedFile);
    };
  }

  async presentLoading(){

    const loader = await this.loaderCtrl.create({
      message: 'Updating User Details',
      duration: 2000,
      
    }).then((res) => {
      res.present()

      res.onDidDismiss().then(async (dis) => {
        console.log('Loading dismissed after 2 seconds', dis)
        const alert = await this.alertCtrl.create({
        
          message: `Your details has been updated successfully`,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.router.navigateByUrl('/tabs/profile')
              }
            }
          ]
  
        });
        return await alert.present();
      })
    });

  } 
  async save() {

    this.presentLoading()

    firebase.firestore().collection('users').doc(this.id).update({
      name: this.updateForm.value.name,
      lname: this.updateForm.value.lname,
      cellphone: this.updateForm.value.cellphone,
      email: this.updateForm.value.email,
      //imgUrl: this.updateForm.value.imgUrl,
    }).then(() => {
      this.updateForm.reset();
    }).catch(async error => {
      console.log('error ',error)
      const toast = await this.toastCtrl.create({
        message: error.message,
        duration: 3000
      });
      toast.present();
    });

  }


}
