import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe2',
  standalone: true
})
export class CustomPipe2Pipe implements PipeTransform {

  transform (value: any[], id: string, prop: string): any {
    if (!Array.isArray(value)) {
      return value;
    }
    const foundObj = value.find(obj => obj.id === id);
    return foundObj ? foundObj[prop] : '';
  }

}
