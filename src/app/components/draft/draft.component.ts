import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent {

  @ViewChild('asMenu') menu!: ElementRef;
  @ViewChild('asToggle') toggle!: ElementRef;

  constructor (private readonly router: Router, private renderer2: Renderer2){}

  mensaje() :void {
    const asMenu = this.menu.nativeElement;
    const asToggle = this.menu.nativeElement;

    this.renderer2.addClass(asMenu, 'active');
    this.renderer2.setAttribute(asToggle, 'toggle', 'active');

    //this.router.navigate(['calendario'], {queryParams: {name:'Modesto'}});
  }
}
