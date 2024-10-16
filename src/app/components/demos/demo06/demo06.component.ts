import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo06',
  standalone: true,
  imports: [CurrencyPipe,JsonPipe,PercentPipe,DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe, DecimalPipe],
  templateUrl: './demo06.component.html',
  styleUrl: './demo06.component.css'
})
export class Demo06Component {
  maVariable1: string = "hello world !";
  maVariable2: number = 150.369852147;
  maVariable3: Date = new Date();
  maVariable4: {} = { nom: 'Bossis', prenom: 'Pierre', sexe: 'H' };
}
