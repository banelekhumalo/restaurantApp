import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll, IonSearchbar, LoadingController, ModalController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import { SearchService } from '../services/search.service';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

import { FormGroup, FormControl } from '@angular/forms'


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild ('search', {static:false}) search:IonSearchbar
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  products:Array<any> =[];
  lastKey: string = null;

  uid = this.activatedActivated.snapshot.params.id;


  toAddObj ={
    date:'',
    noOfPeople:'',
    resname:'',
    time:''
  }
//cart declaration
  cart =[];
  items=[];
   
  sliderConfig ={
    spaceBetween:10,
    centeredSlides: true,
    slidePerView:1.6

  }

//search code
  public list: Array<Object>= [];
  private searchedItem: any;


  //retrieving data
 

  // jsonData: any = [];
  // listing: Array<any> = [];

  restaurants: Array<any> = [];
  // restaurants: any;
  id: any;

  constructor(public nav:NavController,
    private loadingController: LoadingController,
    private modalCtrlr: ModalController,
    private router: Router,
    private activatedActivated: ActivatedRoute, 
    private searchService: SearchService) {

      //this.initializaJSONData();
    this.list=[
      {title:"Newly added!"}
    
     
    ]
    this.searchedItem = this.list
   }
    // async bookTable()
    // {
    //   const loading = await this.loadingController.create({
    //     message: 'Please wait...',
    //   });
    //   await loading.present();
    //   firebase.firestore().collection('bookdetails')
    //   .add(this.toAddObj)
    //   .then((res) => {
    //     console.log("Document successfully written!");
    //     this.modalCtrlr.dismiss();
    //   })
    //   .catch((error) => {
    //     loading.dismiss();
    //     console.error("Error writing document: ", error);
    //   });
    // }


    
    //paballo's code
    // FilterJSONData(ev: any) {
    //   this.initializaJSONData();
    //   const val = ev.target.value;
    //   if (val && val.trim() != '') {
    //     this.jsonData = this.jsonData.filter((item) => {
    //       return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //     })
    //   }
    // }
    // selectVal(val) {
    //   alert("you have selected = " + val);
    // }


  ngOnInit() {

    this.searchService.signAuth()

    // let user = firebase.auth().currentUser.uid
    // console.log('user: ', user)
    // this.id = this.activatedActivated.snapshot.paramMap.get('id')
    // firebase.firestore().collection('restaurants').doc(this.id).get().then(snapshot => {
    //   this.restaurants = snapshot.data();
    //   console.log('new data: ', this.restaurants)
    // });
    this.cart = this.searchService.getCart();
    this.items= this.searchService.getProducts();


    //paballo code

    // firebase.firestore().collection('restaurants').onSnapshot(snap => {
    //   snap.forEach(doc => {
    //     this.listing.push(doc.data());
    //     console.log(doc.data());
    //     console.log(doc.id);
    //   });
    // })

    

    firebase.firestore().collection('restaurants').onSnapshot(res => {
      res.forEach(element => {
        this.restaurants.push(element.data());
      });
    });
  }


  ionViewDidEnter(){
    setTimeout(() => {
      this.search.setFocus;
    });
  }


  
  _ionChange(event)
  {
    const val = event.target.value;
    this.searchedItem = this.list;
    if(val && val.trim() !='')
    {
        this.searchedItem = this.searchedItem.filter((item:any) =>{
          return (item.title.toLowerCase().indexOf(val.toLowerCase() )> -1);
        })
    }
    //this.search.getInputElement().then(item =>console.log(item));
  }

  //search code
  addToCart(products)
  {
    this.searchService.addProduct(this.products)
  }
  openCart()
  {
    this.router.navigate(['/cart']);
  }

  //paballo listing ts code

  // initializaJSONData(){
  // }

  back()
  {
    this.router.navigateByUrl('/login')
  }

}
