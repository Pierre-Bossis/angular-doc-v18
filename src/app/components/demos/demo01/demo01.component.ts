import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  standalone: true,
  imports: [],
  templateUrl: './demo01.component.html',
  styleUrl: './demo01.component.css'
})
export class Demo01Component implements OnInit{
  maVariable1!: string; // definite assignment assertion
  maVariable2: number = 15;
  declare maVariable3: boolean; // ambient declaration

  maVariable4: null = null;
  maVariable5: undefined = undefined;
  maVariable6: any[] = ["Chaine de caractères", 12, true, () => { console.log('Heyo'); }];
  maVariable7: [string, number] = ["", 3]; // Tuple

  ngOnInit (): void {
    this.maVariable1 = "Hello World !";
    this.maVariable3 = true;
  }
}
