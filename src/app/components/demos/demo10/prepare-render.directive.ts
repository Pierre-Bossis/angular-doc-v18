import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrepareRender]',
  standalone: true
})
export class PrepareRenderDirective {

  constructor (private el: ElementRef) {
    this.el.nativeElement.style.color = "grey";
    this.el.nativeElement.style.fontSize = "18px";
    this.el.nativeElement.style.backgroundColor = "yellow";
  }

}
