import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { AppointmentsModalPage } from '../appointments-modal/appointments-modal.page';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  eventSource = [];
  viewTitle : string;

  calendar ={
    mode: 'month',
    currentDate : new Date()
  };

  selectedDate : Date;

  @ViewChild (CalendarComponent) myCal: CalendarComponent;
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  next()
  {
    this.myCal.slideNext();
  }
  back(){
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title)
  {
     this.viewTitle = title;
  }

  removeEvents()
  {
    this.eventSource = [];
  }


  createRandomEvents(){
    var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;

                startTime = new Date(
                  date.getFullYear(),
                   date.getMonth(), 
                   date.getDate() + startDay,
                    0,
                     date.getMinutes() + startMinute);

                endTime = new Date(
                  date.getFullYear(), 
                  date.getMonth(),
                   date.getDate() + endDay,
                    0, 
                    date.getMinutes() + endMinute
                    );

                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false,
                });
            }
        }
       this.eventSource = events;
    }

    async openAppModal(){
      const modal = await this.modalCtrl.create({
        component: AppointmentsModalPage,
        cssClass:'appointments-modal',
        backdropDismiss: false
      });

      await modal.present();

      modal.onDidDismiss().then((result)=>{
        if(result.data && result.data.event) {
          let event = result.data.event;
          if (event.allDay)
          { 
            let start = event.startTime;
            event.startTime = new Date(
              Date.UTC(
                start.getUTCFullYear(),
                start.getUTCMonth(),
                start.getUTCDate()
              )
            );
              event.endTime = new Date(
                Date.UTC(
                  start.getUTCFullYear(),
                  start.getUTCMonth(),
                  start.getUTCDate() + 1
                )
              );
             
          }
          this.eventSource.push(result.data.event);
          this.myCal.loadEvents();
        }
      });
    }
  

}
