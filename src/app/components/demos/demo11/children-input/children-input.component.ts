import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './children-input.component.html',
  styleUrl: './children-input.component.css'
})
export class ChildrenInputComponent {
  @Input() messageFromParent: string = "";
  @Input() colorChild: string = "";
}
