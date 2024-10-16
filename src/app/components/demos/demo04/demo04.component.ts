import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo04',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo04.component.html',
  styleUrl: './demo04.component.css'
})
export class Demo04Component {
  // Une fois terminé, revenir au niveau du Two-Way Binding pour expliquer plus en détails avec l'attribute et Event Binding [(ngModel)]

  maVariable: number = 0;
  url: string = "https://www.google.com";
  bool: boolean = true;

  min: number = 10;
  max: number = 50;

  rangeValue: number = this.min;

  changeValue (): void {
    this.maVariable = 42;
  }
}
