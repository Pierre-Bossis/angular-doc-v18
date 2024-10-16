import { Component } from '@angular/core';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CustomPipe2Pipe } from './custom-pipe2.pipe';
import { CustomPipe3Pipe } from './custom-pipe3.pipe';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo07',
  standalone: true,
  imports: [CustomPipePipe,CustomPipe2Pipe,CustomPipe3Pipe,JsonPipe,FormsModule],
  templateUrl: './demo07.component.html',
  styleUrl: './demo07.component.css'
})
export class Demo07Component {
  nbSecondes: number = 89999;
  myArray: any[] = [
    { id: '001', nom: 'Bossis', prenom: 'Pierre' },
    { id: '002', nom: 'Santos', prenom: 'Pierre' },
    { id: '003', nom: 'Person', prenom: 'Michaël' },
    { id: '004', nom: 'Legrain', prenom: 'Samuel' },
  ];

}
