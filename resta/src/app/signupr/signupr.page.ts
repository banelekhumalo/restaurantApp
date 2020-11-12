import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { SearchService } from '../services/search.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';



@Component({
  selector: 'app-signupr',
  templateUrl: './signupr.page.html',
  styleUrls: ['./signupr.page.scss'],
})
export class SignuprPage implements OnInit {
  
  // rname :string;
  // regno :string;
  // cellphone :number;
  // address : string;
  // email: string;
  // password: string;
  // cpassword :string;

  passwordMatch: boolean;

  RestOwnerForm: FormGroup;

  constructor(public afAuth: AngularFireAuth,
     private router: Router,
     private formBuilder: FormBuilder, 
     private searchService: SearchService,
     public nav: NavController,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
     ) { }
  
     public errorMessages = {
      // rname: [
      //   { type: 'required', message: 'Restaurant name is required' },
      //   { type: 'maxlength', message: 'No longer than 100 characters' }
      // ],
      email: [
        { type: 'required', message: 'Email field must be filled!' },
        {
          type: 'maxlength',
          message: 'Not more than 100 characters'
        }
      ],
      password: [
        { type: 'required', message: 'Valid password number is required' },
        {
          type: 'maxlength',
          message: 'Not more than 100 characters'
        }
      ]
    };


  ngOnInit() {
    this.addRest();
  }

  addRest() {
    this.RestOwnerForm = this.formBuilder.group({
      //rname: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.maxLength(10)]]
      //cpassword: ['', [Validators.required, Validators.maxLength(100)]]

      // address: this.formBuilder.group({
      //   street: ['', [Validators.required, Validators.maxLength(100)]],
      //   city: ['', [Validators.required, Validators.maxLength(100)]],
      //   province: ['', [Validators.required, Validators.maxLength(100)]],
      //   zip: [
      //     '',
      //     [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]
      //   ]
      // })
    });
    }
   

  async submit() {
    const alert = await this.alertCtrl.create({
      message: `Registered successfully, click Okay to continue to login.`,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log(this.RestOwnerForm.value);
            // this.isSubmitted = true;
            if(this.RestOwnerForm.valid){
              this.searchService.Signup_Owner(this.RestOwnerForm.value.email, this.RestOwnerForm.value.password).then((res) => {
                return firebase.firestore().collection('Restaurant_Owner').doc(res.user.uid).set({
                  // name: this.RestOwnerForm.value.name,
                  email:this.RestOwnerForm.value.email,
                  password: this.RestOwnerForm.value.password
                  // phone: this.RestOwnerForm.value.phone
                }).then(() => {
                  console.log(res.user);
                  this.router.navigate(['/loginr']);
                }).catch(function (error) {
                  console.log(error);
                });
              })
            }
          }
        },
      ]
    });
    return await alert.present();
  }
 
  // async register()
  // {
  //  const { rname,regno,address, email,password, cpassword}= this
  //   if(password !== cpassword)
  //   {
  //     return console.error("Password do not match");
   
  //   }
  //   try
  //   {
  //    const res = await this.afAuth.createUserWithEmailAndPassword(email, password )
  //    console.log(res);
  //    this.router.navigate(['./loginr']);
        

  //   }catch(error)
  //   {
  //      console.dir(error)
  //   }
   
  // }



  //juju's code

  // get rname() {
  //   return this.RestOwnerForm.get('rname');
  // } 
  get email() {
    return this.RestOwnerForm.get('email');
  } 
  get password() {
    return this.RestOwnerForm.get('password');
  } 
 

  

  // checkPassword(){
  //   if(this.password == this.cpassword)
  //   {
  //     this.passwordMatch = true;
  //   }else {
  //     this.passwordMatch = false;
  //   }
  // }

  // Signup_Owner(email,password) {
  //   return firebase.auth().createUserWithEmailAndPassword(email, password);
  // }
  

}
