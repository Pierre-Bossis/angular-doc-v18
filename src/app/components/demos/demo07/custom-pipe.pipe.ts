import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform (value: number): string {

    let jours = Math.floor(value / 86400);
    value = value - (jours * 86400);

    let heures = Math.floor(value / 3600);
    value = value - (heures * 3600);

    let minutes = Math.floor(value / 60);
    value = value - (minutes * 60);

    let secondes = value;


    let format = "";

    format += `${jours} ${jours > 1 ? 'jours' : 'jour'}, `;
    format += `${heures < 10 ? '0' + heures : heures} ${heures > 1 ? 'heures' : 'heure'}, `;
    format += `${minutes < 10 ? '0' + minutes : minutes} ${minutes > 1 ? 'minutes' : 'minute'} et `;
    format += `${secondes < 10 ? '0' + secondes : secondes} ${secondes > 1 ? 'secondes' : 'seconde'}`;

    return format;
  }

}
