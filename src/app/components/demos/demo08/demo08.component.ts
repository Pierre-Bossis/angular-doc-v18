import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo08',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo08.component.html',
  styleUrl: './demo08.component.css'
})
export class Demo08Component {
  currentStyle: any;

  italic: boolean = false;
  bold: boolean = false;
  size: boolean = false;

  isActive: boolean = false;

  setCurrentStyle () {
    this.currentStyle = {
      'font-style': this.italic ? 'italic' : 'normal',
      'font-weight': this.bold ? 'bold' : 'normal',
      'font-size': this.size ? '24px' : '12px',
    };
  }

  switchItalic () {
    this.italic = !this.italic;
    this.setCurrentStyle();
  }

  switchBold () {
    this.bold = !this.bold;
    this.setCurrentStyle();
  }

  switchSize () {
    this.size = !this.size;
    this.setCurrentStyle();
  }

  switchClass () {
    this.isActive = !this.isActive;
  }
}
