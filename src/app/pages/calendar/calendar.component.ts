import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {CalendarModel} from "../../models/calendar.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  private dates: any = [];

  paginatorDate: string = '';

  selectedDate: Date = new Date();

  private _items$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  get items$() {
    return this._items$.asObservable()
  }

  set items$(data: any) {
    this._items$.next(data)
  }


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.paginatorDate = `${this.selectedDate.toLocaleString('fa', {month: 'long'})} ${this.selectedDate.toLocaleString('fa', {year: 'numeric'})}`;
    this.fetch(new Date());
  }



  fetch(date: Date) {

    this.fetchCalendar(date);

    const body = {
      "strMessageGather": "09126386620"
    };
    this.apiService.getCalendar(body).subscribe({
      next: response => {
        response.forEach((item: CalendarModel) => {

          this.dates.every((date: any, index: number) => {

            if (date.date != item.strDate) return true;
            this.dates[index].calendar.push(item)
            return false

          });

        });
        this.items$ = this.dates;
      },
      error: err => console.log(err.toString())
    });
  }

  previousMonth() {

    this.selectedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), (this.selectedDate.getDate() - Number(this.selectedDate.toLocaleString('fa-IR-u-nu-latn').split('،')[0].split('/')[2])))
    this.paginatorDate = `${this.selectedDate.toLocaleString('fa', {month: 'long'})} ${this.selectedDate.toLocaleString('fa', {year: 'numeric'})}`;
    this.fetch(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate()));


  }

  nextMonth() {

    const dateMonth = Number(this.selectedDate.toLocaleString('fa-IR-u-nu-latn').split('،')[0].split('/')[1]);

    if (Number(this.selectedDate.toLocaleString('fa-IR-u-nu-latn').split('،')[0].split('/')[1]) !== 12) {
      while (Number(this.selectedDate.toLocaleString('fa-IR-u-nu-latn').split('،')[0].split('/')[1]) < (dateMonth + 1)) {
        this.selectedDate.setDate(this.selectedDate.getDate() + 1);
      }
    } else {
      while (Number(this.selectedDate.toLocaleString('fa-IR-u-nu-latn').split('،')[0].split('/')[1]) !== 1) {
        this.selectedDate.setDate(this.selectedDate.getDate() + 1);
      }
    }

    this.paginatorDate = `${this.selectedDate.toLocaleString('fa', {month: 'long'})} ${this.selectedDate.toLocaleString('fa', {year: 'numeric'})}`;

    this.fetch(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), (this.selectedDate.getDate() + 1)));


  }



  // private -----------------------------------------------------------------------------------------------------------

  private fetchCalendar(date: Date) {

    this.dates = []

    const now = new Date();

    date.setDate(date.getDate() - (Number(date.toLocaleString('fa-IR-u-nu-latn').split('،')[0].split('/')[2]) -1))
    const dateMonth = Number(date.toLocaleString('fa-IR-u-nu-latn').split('،')[0].split('/')[1]);

    for (let i = date.getDay(); i >= 0; i--) {
      this.dates.push({
        date: '',
      })
    }

    if (Number(date.toLocaleString('fa-IR-u-nu-latn').split('،')[0].split('/')[1]) !== 12) {
      while (Number(date.toLocaleString('fa-IR-u-nu-latn').split('،')[0].split('/')[1]) < (dateMonth + 1)) {

        this.dates.push({
          date: date.toLocaleString('fa-IR-u-nu-latn', { year: 'numeric',month: '2-digit', day: '2-digit'}).split('،')[0],
          active: now <= date,
          calendar: []
        })

        date.setDate(date.getDate() + 1);
      }
    } else {
      while (Number(date.toLocaleString('fa-IR-u-nu-latn').split('،')[0].split('/')[1]) !== 1) {

        this.dates.push({
          date: date.toLocaleString('fa-IR-u-nu-latn', { year: 'numeric',month: '2-digit', day: '2-digit'}).split('،')[0],
          active: now <= date,
          calendar: []
        })

        date.setDate(date.getDate() + 1);
      }
    }

    for (let i = (35 - this.dates.length); i > 0; i--) {
      this.dates.push({
        date: '',
      })
    }

  }

}
