 import { NgModule } from '@angular/core'
 import {CommonModule } from '@angular/common'
 import { FormsModule } from '@angular/forms'

 import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


import { IonicModule } from '@ionic/angular'


import {NgCalendarModule } from 'ionic2-calendar'
import { from } from 'rxjs';

@Component({
  selector: 'app-appointments-modal',
  templateUrl: './appointments-modal.page.html',
  styleUrls: ['./appointments-modal.page.scss'],
})
export class AppointmentsModalPage implements OnInit {
  calendar ={
    mode:'month',
    currentDate: new Date()
  };

  viewTitle: string;
  
  event = {
    title:'',
    desc:'',
    startTime: null,
    endTime:'',
    allDay:true
  };

  modalReady = false;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    setTimeout(()=>{
      this.modalReady = true;
    },0);
  }

  save(){
    this.modalCtrl.dismiss({event: this.event})
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onTimeSelected(ev) {
    this.event.startTime = new Date(ev.selectedTime);
  }
  close()
  {
    this.modalCtrl.dismiss();
  }

}
