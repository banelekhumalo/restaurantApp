import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';



// import * as firebase from 'firebase/app';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  // name : string;
  // lname: string;
  // email:string;
  // gender: string;
  // cellphone: number;
  // password: string;
  // cpassword: string;

  passwordMatch: boolean;
  userForm: FormGroup;

  constructor(private router:Router, public afAuth: AngularFireAuth,
     private formBuilder: FormBuilder, 
     private searchService: SearchService,
     public nav: NavController,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController)
   {
   
    }

  ngOnInit() {
    this.addUser();
  }
  public errorMessages = {
    name: [
      { type: 'required', message: 'Username name is required' },
      { type: 'maxlength', message: 'No longer than 100 characters' }
    ],
    lname: [
      { type: 'required', message: 'Last name is required' },
      { type: 'maxlength', message: 'No longer than 100 characters' }
    ],
    email: [
      { type: 'required', message: 'Email field must be filled!' },
      {
        type: 'maxlength',
        message: 'Not more than 100 characters'
      }
    ],
    gender: [
      { type: 'required', message: 'Choose one' },
      { type: 'maxlength', message: 'No longer than 100 characters' }
    ],
    cellphone: [
      { type: 'required', message: 'Cellphone name is required' },
      { type: 'maxlength', message: 'Not more than 10 characters' }
    ],
    password: [
      { type: 'required', message: 'Cellphone name is required' },
      { type: 'maxlength', message: 'Not more than 10 characters' }
    ],
    cpassword: [
      { type: 'required', message: 'confirm password field is required is required' },
      {
        type: 'maxlength',
        message: 'Not more than 100 characters'
      }
      
    ]
  };

  
  


  addUser() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      lname: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(100)]],
      gender: ['', [Validators.required, Validators.maxLength(50)]],
      cellphone: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
      cpassword: ['', [Validators.required, Validators.maxLength(10)]],
    });
    }

    async submit() {
      const alert = await this.alertCtrl.create({
        message: `Registered successfully, click Okay to continue to login.`,
        buttons: [
          {
            text: 'Okay',
            handler: () => {
              console.log(this.userForm.value);
              // this.isSubmitted = true;
              if(this.userForm.valid){
                this.searchService.Signup_Owner(this.userForm.value.email, this.userForm.value.password).then((res) => {
                  return firebase.firestore().collection('users').doc(res.user.uid).set({
                     name: this.userForm.value.name,
                     lname: this.userForm.value.lname,
                    email:this.userForm.value.gender,
                    gender:this.userForm.value.email,
                    password: this.userForm.value.password,
                    cellphone: this.userForm.value.cellphone
                  }).then(() => {
                    console.log(res.user);
                    this.router.navigate(['/login']);
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
   

    get email() {
      return this.userForm.get('email');
    } 
    get password() {
      return this.userForm.get('password');
    } 
    get name() {
      return this.userForm.get('name');
    } 
    get gender() {
      return this.userForm.get('gender');
    } 
    get cpassword() {
      return this.userForm.get('cpassword');
    } 
    get cellphone() {
      return this.userForm.get('cellphone');
    } 
    get lname() {
      return this.userForm.get('lname');
    } 
 

  goToNextPage2() {
    this.router.navigateByUrl('/home');
     }

    //  async register()
    //  {
    //   const { name,lname,gender, cellphone, email,password, cpassword}= this
    //    if(password !== cpassword)
    //    {
    //      return console.error("Password do not match");
    //    }
    //    try
    //    {
    //     const res = await this.afAuth.createUserWithEmailAndPassword(email, password )
    //     console.log(res);
    //     this.router.navigate(['./login']);
    //    }catch(error)
    //    {
    //       console.dir(error)
    //    }
      
    //  }



     checkPassword(){
      if(this.password == this.cpassword)
      {
        this.passwordMatch = true;
      }else {
        this.passwordMatch = false;
      }
    }

}
