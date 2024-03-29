import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  images: string[];

  constructor(private storage:Storage){
    this.images = [];
  }


  ngOnInit(): void {
    this.getImages();
  }

  uploadImage($event: any): void {
    
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `ìmages/${file.name}`);
    uploadBytes(imgRef, file )
      .then( response => {
        console.log(response)
        this.getImages();
      }).catch( error => console.log("error"));
  }

  getImages(): void {
    const imagesRef = ref(this.storage, 'ìmages');

    listAll(imagesRef)
    .then(async response => {
        console.log(response);
        this.images = [];
        for(let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
    .catch( error => console.log(error));
  }

}
