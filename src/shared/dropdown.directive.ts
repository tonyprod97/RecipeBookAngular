import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') clicked: boolean = false;

  @HostListener('click') onclick(){
      this.clicked=!this.clicked;
  }


}
