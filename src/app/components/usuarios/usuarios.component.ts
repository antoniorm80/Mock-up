import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { Storage, ref, uploadBytes} from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements AfterViewInit{
  formSubirArchivo!: FormGroup;
  formUsuario!: FormGroup;
  @ViewChild('name') inputName?: ElementRef;

  constructor( private fb: FormBuilder,
    private fireStorage: AngularFireStorage,
    private usuarioService: UsuariosService) {
    
    this.formSubirArchivo = fb.group({
      file: ['', Validators.required]
    })

    this.formUsuario = fb.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      username: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required],      
      address: ["", Validators.required],
      description: ["", Validators.required]
    })
  }
  ngAfterViewInit(): void {
    this.inputName?.nativeElement.focus();
  }
 

  async onSubmit () {
    console.log(this.formUsuario.value)
    const response = await this.usuarioService.addUsuario(this.formUsuario  .value);
    console.log(response);
    this.limpiarFormulario();
    this.inputName?.nativeElement.focus();
  }

  limpiarFormulario() :void {
    this.formUsuario.reset();

  }
  
  // onUpload($event: any) {
  //   console.log($event);
  // }

  // async uploadImage($event: any) {
  //   const file = $event.target.files[0];
  //   // console.log(file);
  //   if (file) {
  //     const path = `ìmages/${file.name}`;
  //     const uploadedFiles = await this.fireStorage.upload(path, file);
  //     console.log(uploadedFiles);
  //   }

    
    // const imgRef = ref(this.storage, `ìmages/${file.name}`);
    // uploadBytes(imgRef, file )
    //   .then( response => console.log(response))
    //   .catch( error => console.log("errorts"));
      

  }
