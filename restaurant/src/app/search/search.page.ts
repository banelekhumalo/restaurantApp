import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { title } from 'process';
import { from } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild ('search', {static:false}) search:IonSearchbar;

  public list: Array<Object>= [];
  private searchedItem: any;


  constructor() { 
    this.list=[
      {title:"Xolani Food"},
      {title:"Banele Food"},
      {title:"Food Food"},
      {title:"Jobs Food"},
      {title:"Internship Food"},
      {title:"Internship Food"},
      {title:"MLAB Food"},
      {title:"012365 Food"},
      {title:"Xolani Food"},
      {title:"Banele Food"},
      {title:"Food Food"},
      {title:"Jobs Food"},
      {title:"Internship Food"},
      {title:"Internship Food"},
      {title:"MLAB Food"},
      {title:"012365 Food"},
    ]
    this.searchedItem = this.list
  }

  ngOnInit() {
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

}
