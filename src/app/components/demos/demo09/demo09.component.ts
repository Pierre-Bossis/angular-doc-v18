import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo09',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo09.component.html',
  styleUrl: './demo09.component.css'
})
export class Demo09Component {
  isToggled: boolean = false;
  liste: string[] = ["pomme", "poire", "cerise", "pêche", "prune", "orange"];
  inputValue: string = "";

  toggle (): void {
    this.isToggled = !this.isToggled;
  }
}
