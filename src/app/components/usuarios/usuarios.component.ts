import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { Storage, ref, uploadBytes} from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  formSubirArchivo!: FormGroup;
  constructor( private fb: FormBuilder ,private fireStorage: AngularFireStorage) {
    this.formSubirArchivo = fb.group({
      file: ['', Validators.required]
    })
  }

 

  
  onUpload($event: any) {
    console.log($event);
  }

  async uploadImage($event: any) {
    const file = $event.target.files[0];
    // console.log(file);
    if (file) {
      const path = `files/${file.name}`;
      const uploadedFiles = await this.fireStorage.upload(path, file);
      console.log(uploadedFiles);
    }

    
    // const imgRef = ref(this.storage, `ìmages/${file.name}`);
    // uploadBytes(imgRef, file )
    //   .then( response => console.log(response))
    //   .catch( error => console.log("errorts"));
      

  }
}
