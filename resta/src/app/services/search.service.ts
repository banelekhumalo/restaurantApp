import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  

  private data =[
    {
      category:'Top rated restaurant slides',
      expanded: true,
      products:[
        {id:1, resname:'K-Food',location:'Pretoria',ratings:'5', image:'https://images.pexels.com/photos/9315/menu-restaurant-france-eating-9315.jpg?auto=compress&cs=tinysrgb&h=650&w=940'},
        {id:2, resname:'Lerato Lifestyle',location:'Johannesburg',ratings:'4', image:'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {id:3, resname:'Zamokuhle Chilla Nathi',location:'Boksbug',ratings:'4',image:'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
        {id:4, resname:'Mkhuzeni Dlamini Food',location:'Copesville',ratings:'3', image:'https://images.pexels.com/photos/245535/pexels-photo-245535.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
        {id:5, resname:'TKM Kitchen',location:'Soweto',ratings:'5', image:'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&h=650&w=940'},
        {id:6, resname:'SANDILE Fast Food',location:'Orlando',ratings:'5', image:'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
        {id:7, resname:'Dannie newsroom',location:'KwaThema',ratings:'5', image:'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
        {id:8, resname:'NKOSIKHONA & SONS',location:'Springs',ratings:'5', image:'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
      ] 
    }
  ];
  
  private cart =[];

  constructor(private router:Router) { }

  //listen for auth status changes
  signAuth(){
    return firebase.auth().onAuthStateChanged(user => {
     if(user){
      //  const email = user.email;
      //  this.setSession(email);
       console.log('user logged in: ', user);
     }else{
       console.log('user logged out')
     }
    });
  }

  getProducts(){
    return this.data;
  }
  getCart(){
    return this.data;
  }
  addProduct(product)
  {
    this.cart.push(product);
  }
  goToNextPage2() {
    this.router.navigateByUrl('/login');
     }
//-------------------------------------JUJU-------------------------------
     regRest() {
      return firebase.firestore().collection('restaurants');
    }

    Signup_Owner(email,password) 
    {
      return firebase.auth().createUserWithEmailAndPassword(email, password); 
    }
    reserve() {
      return firebase.firestore().collection('restaurants');
    }
}
