import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  orderId:any;
  tableForm:FormGroup;
  downloadurl:null;
  
  id: any;
  ownerId: any
  userId: any;
  array: any = []
  resName: any;
  resResult: any;


  uid = this.route.snapshot.params.id;


  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
     private router: Router,
      public nav: NavController,
   public loadingCtrl: LoadingController, 
   private alertCtrl: AlertController,
   private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    console.log('IDDD: ', this.id)
    this.searchService.signAuth()
    this.addTable();
    
  }
  get resname() {
    return this.tableForm.get("resname");
  }
  get noOfPeople() {
    return this.tableForm.get('noOfPeople');
  }
  get time() {
    return this.tableForm.get('time');
  }
  get date() {
    return this.tableForm.get('date');
  }
//resEmail
get resEmail() {
  return this.tableForm.get('resEmail');
}

  public errorMessages = {
    resname: [
      { type: 'required', message: 'Restaurant name is required' },
      { type: 'maxlength', message: 'Name of the person making the booking' }
    ],
    noOfPeople: [
      { type: 'required', message: 'number of people is required' },
      
    ],
   
    time: [
      { type: 'required', message: 'time Field is needed!' },
      {
        type: 'maxlength',
        message: 'Not more than 100 characters'
      }
    ],
    date: [
      { type: 'required', message: 'Select the correct date' },
      {
        type: 'maxlength',
        message: 'Not more than 100 characters'
      }
    ]
  };

  addTable() {
    this.tableForm = this.formBuilder.group({
      resname: ['', [Validators.required, Validators.maxLength(50)]],
      noOfPeople: ['', [Validators.required, Validators.maxLength(100)]],
      time: ['', [Validators.required, Validators.maxLength(100)]],
      date: ['', [Validators.required, Validators.maxLength(10)]],
      resEmail: ['', [Validators.required, Validators.maxLength(50)]],

    });
    }

    // async submit() {
    //   const alert = await this.alertCtrl.create({
    //     message: `Table reserved successfulluy, click Okay to continue`,
    //     buttons: [
    //       {
    //         text: 'Okay',
    //         handler: () => {
    //           console.log(this.tableForm.value);
    //           var user = firebase.auth().currentUser
    //           this.orderId = user.uid;
    //           this.searchService.regRest().doc(this.orderId).set({
    //             orderId: this.orderId,
    //             resname: this.tableForm.value.resname,
    //             time:this.tableForm.value.time,
    //             date:this.tableForm.value.date,
    //             noOfPeople:this.tableForm.value.noOfPeople
    //           }).then(() => {
    //             this.router.navigateByUrl('/loginr');
    //             this.tableForm.reset();
    //           }).catch(function (error) {
    //             console.log(error)
    //           });
    //         },
    //       },
    //     ]
    //   });
    //   return await alert.present();
  
    // }

    async submit() {
      const alert = await this.alertCtrl.create({
        message: `Thank you for making a booking with us, please click Okay to confirm.`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: blah => {
              console.log('Confirm Cancel: ', blah);
            },
          },
          {
            text: 'Okay',
            handler: () => {
              
              var user = firebase.auth().currentUser;
              this.userId = user.uid;
              console.log('userId booking: ', this.userId);
              console.log('UID: ', this.uid);
            
              this.ownerId = this.uid
              console.log('Owner IDD: ', this.ownerId)
              console.log('Owner : ', this.id)
              
                firebase.firestore().collection('restaurants').doc(this.uid).collection('bookings').add({
                  userId: this.userId,
                  ownerId: this.uid,
                  resname: this.tableForm.value.resname,
                  noOfPeople: this.tableForm.value.noOfPeople,
                  date: this.tableForm.value.date,
                  time: this.tableForm.value.time,
                  resEmail: this.tableForm.value.resEmail,
                  
                }).then(() => {
                  this.router.navigateByUrl('/search');
                  this.tableForm.reset();
                }).catch(function (error) {
                  console.log(error)
                })
              // }else{
              //   console.log('Invalid fields')
              // }
            },
          },
        ],
      });
      return await alert.present();
    }


    

}
