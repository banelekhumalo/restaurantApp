import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { truncate } from 'fs';

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
  viewTitle : string;

  event = {
    title:'',
    desc:'',
    startTime: null,
    endTime : '',
    allday: true
  };

  modalReady = false;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async closeModal()
  {
    await this.modalCtrl.dismiss();
  }
}
