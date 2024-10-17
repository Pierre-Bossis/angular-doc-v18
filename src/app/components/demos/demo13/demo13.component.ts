import { Component } from '@angular/core';
import { ChildComponent } from './child/child/child.component';

@Component({
  selector: 'app-demo13',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './demo13.component.html',
  styleUrl: './demo13.component.css'
})
export class Demo13Component {
  messageFromParent: string = "My message";
}
