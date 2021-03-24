import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-restamenu',
  templateUrl: './restamenu.page.html',
  styleUrls: ['./restamenu.page.scss'],
})
export class RestamenuPage implements OnInit {
  employee: string ="";
  noOfTables: number;
  noOfEmployees: number;
  date: Date;

  menuUpdate ={
    employee: "",
    noOfTables:'',
    noOfEmployees:'',
    date : Date

  }
  Items: any;

  title = 'khumalo3';
  images: any =[];
  allfiles: any =[];

  constructor(public alertController: AlertController,
    private modalCtrl: ModalController,
    private router:Router) { }

  ngOnInit() {
  }
  async presentAlertPrompt()
  {
    const alert = await this.alertController.create({
      header:'Update the table',
      inputs:[
        {
          name:'employee',
          type:'text',
          placeholder:'employee name'
        },
        {
          name:'noOftables',
          type:'number',
          placeholder:'number of tables',
          min: '1',
          max: '50'
        },
        {
          name:'noOfEmployees',
          type:'number',
          placeholder:'number of employees'
        },
        {
          name:'date',
          type:'date',
          min:'2021-02-19',
          max:'2021-12-31'
        }
      ], buttons: [
        {
          text:'Cancel',
          role:'cancel',
          cssClass:'secondary',
          handler:()=>{
            console.log('Confirm Cancel');
          }
        },{
          text: 'Ok',
          handler: ()=>{
            console.log('Confirm Ok');
            
          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
   console.log(result.data.values);
  
    }
    back(){
      this.router.navigateByUrl('/loginr')
    }

    fileuploads(event)
    {
        const files = event.target.files;
        console.log(files);
        if(files)
        {
          for (let i = 0; i <  files.length; i++){
            const image={
              name : '',
              type : '',
              size : '',
              url : ''
            };
            this.allfiles.push(files[i]);
            image.name = files[i].name;
            image.type = files[i].type;
  
            const size = files[i].size / 1000;
            const mbc = size + '';
            const mb = mbc.split('.')[0];
            const length = mb.length;
  
              if(length === 4 || length === 5)
              {
                const mbsize = size /1000;
                const splitdata = mbsize + '';
                const splitvalues = splitdata.split('.');
                let secondaryvariable ='';
                for(let j=0; j < splitvalues.length;j++)
                {
                  if(j===1)
                  {
                    secondaryvariable = splitvalues[j].slice(0,2);
                  }
                }
                image.size = splitvalues[0] + '.' + secondaryvariable + 'MB'
              }else{
  
                const splitdata = size + '';
                const splitvalues = splitdata.split('.');
                let secondaryvariable ='';
                for(let j=0; j < splitvalues.length;j++)
                {
                  if(j===1)
                  {
                    secondaryvariable = splitvalues[j].slice(0,2);
                  }
                }
                image.size = splitvalues[0] + '.' + secondaryvariable + 'KB'
  
              }
  
  
            const reader = new FileReader();
            reader.onload = (filedata)=>{
              image.url = reader.result + '';
              this.images.push(image);
            };
            reader.readAsDataURL(files[i]);
          }
        }
          event.srcElement.value = null;
    }
    deleteImage(image: any)
    {
      const index = this.images.indexOf(image);
      this.images.splice(index, 1);
      this.allfiles.splice(index, 1);
    }
  
    save()
    {
      console.log(this.allfiles);
    }

}
