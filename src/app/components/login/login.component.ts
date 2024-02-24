
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit{
  loginForm: FormGroup;
  @ViewChild('Email') inputEmail!: ElementRef;
 

  constructor(private router: Router,  private fb:FormBuilder){

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  ngAfterViewInit(): void {
    // Enviar el focus *** descomentar
    /// this.inputEmail.nativeElement.focus();    
  }

  ngOnInit(): void {
   
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() { 
    return this.loginForm.controls['password'];
  }

  onSubmit(): void {
    console.log("estupida");
    
    this.router.navigate(['/inicio']);
  }



}
