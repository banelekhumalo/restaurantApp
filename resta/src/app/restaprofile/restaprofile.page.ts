import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaprofile',
  templateUrl: './restaprofile.page.html',
  styleUrls: ['./restaprofile.page.scss'],
})
export class RestaprofilePage implements OnInit {
  title = 'khumalo2';
  images: any =[];
  allfiles: any =[];
  constructor(private router:Router) { }

  ngOnInit() {
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

  back(){
    this.router.navigateByUrl('/loginr')
  }

}
