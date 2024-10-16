import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe3',
  standalone: true
})
export class CustomPipe3Pipe implements PipeTransform {

  transform (...args: number[]): number {
    return args.reduce((acc, val) => acc + val, 0);
  }

}
