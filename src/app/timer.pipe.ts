import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value < 60 ? (value % 60) + ' s' : Math.floor(value / 60) + ' m ' + (value % 60) + ' s';
  }

}
