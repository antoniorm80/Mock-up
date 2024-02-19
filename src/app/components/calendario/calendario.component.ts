import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {

  constructor(private readonly router: Router){}

  regresar():void {
    this.router.navigate(['/inicio']);
  }

}
