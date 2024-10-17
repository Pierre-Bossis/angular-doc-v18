import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit{

  constructor (private el: ElementRef) { }

  @Input() appHighlight: string = "";
  @Input() defaultColor: string = "";

  @HostListener("mouseenter")
  onMouseEnter () {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener("mouseleave")
  onMouseLeave () {
    this.el.nativeElement.style.backgroundColor = null;
  }

  @HostListener("click")
  onMouseClick () {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.el.nativeElement.style.color = "red";
  }

  @Input()
  @HostBinding('class') // permet de définir la valeur d’une propriété sur les hôtes de la directive
  private class!: string;

  @HostBinding('attr.role')
  private role!: string;

  @HostBinding('style.backgroundColor')
  private color!: string;

  ngOnInit (): void {
    console.log(this.class);
    this.class = 'test'; // Ajoute la classe test à l'attribut class qui se trouve sur l'élément <!> ne fonctionne qu'avec class
    this.role = 'admin';
    this.color = 'yellow';
  }
}
