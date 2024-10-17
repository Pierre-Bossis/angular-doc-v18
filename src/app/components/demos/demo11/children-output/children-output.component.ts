import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children-output',
  standalone: true,
  imports: [],
  templateUrl: './children-output.component.html',
  styleUrl: './children-output.component.css'
})
export class ChildrenOutputComponent {
  @Output() emitToParent: EventEmitter<string> = new EventEmitter<string>();

  messageFromChild: string = "Mon message";

  onEmit (): void {
    this.emitToParent.emit(this.messageFromChild);
  }
}
