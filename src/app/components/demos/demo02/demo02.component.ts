import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo02',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo02.component.html',
  styleUrl: './demo02.component.css'
})
export class Demo02Component {
  maVariable1: string = "";
  maVariable2: number = 0;
  maVariable3: boolean = false;

  // Après avoir vu l'Event Binding
  // changeValue (text: KeyboardEvent | any) {
  //   console.log("Called: ", text.target.value);
  //   this.maVariable1 = text.target.value;
  // }
}
