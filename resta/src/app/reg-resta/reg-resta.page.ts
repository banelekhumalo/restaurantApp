import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { SearchService } from '../services/search.service';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-reg-resta',
  templateUrl: './reg-resta.page.html',
  styleUrls: ['./reg-resta.page.scss'],
})
export class RegRestaPage implements OnInit {
  ownerId:any;
  restaurantForm:FormGroup;
  downloadurl:null;

  constructor(
    private formBuilder: FormBuilder,
     private searchService: SearchService,
      private router: Router,
       public nav: NavController,
    public loadingCtrl: LoadingController, 
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.addRest();
  }
  
  
  get restaname() {
    return this.restaurantForm.get("restaname");
  }
  get Profilepic() {
    return this.restaurantForm.get('Profilepic');
  }
  get location() {
    return this.restaurantForm.get('location');
  }
  get regNo() {
    return this.restaurantForm.get('regNo');
  }
  get email() {
    return this.restaurantForm.get('email');
  }

  public errorMessages = {
    restaname: [
      { type: 'required', message: 'Restaurant name is required' },
      { type: 'maxlength', message: 'No longer than 100 characters' }
    ],
    Profilepic: [
      { type: 'required', message: 'Profile picture is required' },
      
    ],
   
    location: [
      { type: 'required', message: 'Location Field is needed!' },
      {
        type: 'maxlength',
        message: 'Not more than 100 characters'
      }
    ],
    email: [
      { type: 'required', message: 'Email field must be filled!' },
      {
        type: 'maxlength',
        message: 'Not more than 100 characters'
      }
    ],
    regNo: [
      { type: 'required', message: 'Registration number is required' },
      {
        type: 'maxlength',
        message: 'Not more than 100 characters'
      }
    ]
  };
  
  addRest() {
  this.restaurantForm = this.formBuilder.group({
    restaname: ['', [Validators.required, Validators.maxLength(50)]],
    Profilepic: [
      '',
      [
        Validators.required
       
      ]
    ],
    location: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.maxLength(100)]],
    regNo: ['', [Validators.required, Validators.maxLength(10)]],
  
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


  addPic(event: any) {
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.downloadurl = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);

  }


  async submit() {
    const alert = await this.alertCtrl.create({
      message: `Restaurant added successfulluy, please click Okay to confirm`,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log(this.restaurantForm.value);
            var user = firebase.auth().currentUser
            this.ownerId = user.uid;
            this.searchService.regRest().doc(this.ownerId).set({
              ownerId: this.ownerId,
              restaname: this.restaurantForm.value.restaname,
              Profilepic: this.restaurantForm.value.Profilepic,
              location:this.restaurantForm.value.location,
              email:this.restaurantForm.value.email,
              regNo:this.restaurantForm.value.regNo
            }).then(() => {
              this.router.navigateByUrl('/loginr');
              this.restaurantForm.reset();
            }).catch(function (error) {
              console.log(error)
            });
          },
        },
      ]
    });
    return await alert.present();

  }
}
