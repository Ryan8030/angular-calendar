import { Component, OnInit } from '@angular/core';
import {CalendarModel} from "../../../../models/calendar.model";

@Component({
  selector: 'app-calendar-event-details',
  templateUrl: './calendar-event-details.component.html',
  styleUrls: ['./calendar-event-details.component.scss']
})
export class CalendarEventDetailsComponent implements OnInit {

  // @ts-ignore
  data: CalendarModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
