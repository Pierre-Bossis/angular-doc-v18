import { Component } from '@angular/core';
import { ChildrenInputComponent } from './children-input/children-input.component';
import { ChildrenOutputComponent } from './children-output/children-output.component';

@Component({
  selector: 'app-demo11',
  standalone: true,
  imports: [ChildrenInputComponent, ChildrenOutputComponent],
  templateUrl: './demo11.component.html',
  styleUrl: './demo11.component.css'
})
export class Demo11Component {
  messageToChild: string = "Ceci est le message provenant du parent.";
  colorToChild: string = "bg-lightblue";

  changeColor (): void {
    if (this.colorToChild === 'bg-lightblue') this.colorToChild = 'bg-lightcoral';
    else this.colorToChild = 'bg-lightblue';
  }


  messageFromChild: string = "";

  receiveEmit (message: string): void {
    this.messageFromChild = message;
  }
}
