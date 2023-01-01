import { Pipe, PipeTransform } from '@angular/core';

// eslint-disable-next-line no-shadow,no-unused-vars
enum options {
  // eslint-disable-next-line no-unused-vars
  full = `full`,
  // eslint-disable-next-line no-unused-vars
  date = `date`
}

@Pipe({
  name: 'localDate'
})
export class DatePipe implements PipeTransform {

  transform(value: string, format?: number): unknown {

    const handle = value.split('/')[2]
    return handle.split('')[0] === '0'? handle.split('')[1]: handle

  }

}
