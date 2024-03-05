import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { Storage, ref, uploadBytes} from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Usuarios from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, AfterViewInit{
  formSubirArchivo!: FormGroup;
  formUsuario!: FormGroup;
  usuarios!: Usuarios[];
;  @ViewChild('name') inputName?: ElementRef;

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
  ngOnInit(): void {
    this.usuarioService.getusuarios().subscribe(usuarios => {
      // console.log(usuarios);
      this.usuarios = usuarios;
    })
  }

  ngAfterViewInit(): void {
    this.inputName?.nativeElement.focus();
  }
 

  async onSubmit () {
    // console.log(this.formUsuario.value)
    const response = await this.usuarioService.addUsuario(this.formUsuario  .value);
    // console.log(response);
    this.limpiarFormulario();
    this.inputName?.nativeElement.focus();
  }

  limpiarFormulario() :void {
    this.formUsuario.reset();
  }
  
  async onClickDelete(usuario: Usuarios) {
    const response = await this.usuarioService.deleteUsuario(usuario);
    // Agregar un Alerta para confirmar que se quiere eliminar el registro. 
    // console.log(response);
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
