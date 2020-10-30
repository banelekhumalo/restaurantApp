import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bookmodal',
  templateUrl: './bookmodal.component.html',
  styleUrls: ['./bookmodal.component.scss'],
})
export class BookmodalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}
  
  async showMoadl()
  {
    const modal = await this.modalCtrl.create({
      component: BookmodalComponent
    })
    await modal.present();
  }

}
