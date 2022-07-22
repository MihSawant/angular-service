import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveItem]'
})
export class ActiveItemDirective {

  @HostBinding('class.active') isActive = false;

  @HostListener('mouseover') onMouseOver() {
    this.isActive = true;
  }
  @HostListener('mouseout') toggleState() {
    this.isActive = false;
  }


  constructor() { }



}
