import { Component } from '@angular/core';
import { PrepareRenderDirective } from './prepare-render.directive';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-demo10',
  standalone: true,
  imports: [HighlightDirective, PrepareRenderDirective],
  templateUrl: './demo10.component.html',
  styleUrl: './demo10.component.css'
})
export class Demo10Component {
  color: string = "red";
}
