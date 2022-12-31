import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, take} from "rxjs";
import {CalendarModel} from "../../models/calendar.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL: string = `https://api.shahrnik.com/api`

  constructor(private http: HttpClient) { }

  getCalendar(body: any) {
    return this.http.post<CalendarModel[]>(`${this.API_URL}/DidarBa/Calender_Get`, body).pipe(
      take(1),
      map( response => JSON.parse(response.toString()))
    )
  }

}
