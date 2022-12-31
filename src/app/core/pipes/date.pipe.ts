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

  transform(value: string, format?: string): unknown {
    // if (format) {
    //   switch (format) {
    //     case options.full:
    //       return new Date(value).toLocaleString('fa-IR').replace('،', ' - ').slice(0, -3).split(' - ').reverse().join(' - ');
    //     case options.date:
    //       return new Date(value).toLocaleDateString('fa-IR');
    //   }
    // }
    // return new Date(value).toLocaleDateString('fa-IR');

    return value.split('/')[2]

  }

}
