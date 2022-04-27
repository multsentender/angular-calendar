import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())

  changeMonth(monts: number) {
    const value = this.date.value.add(monts, 'month')
    this.date.next(value)
  }

  changeDate(date: moment.Moment) {
    const value = this.date.value.set({
      date: date.date(),
      month: date.month()
    })
    this.date.next(value)
  }
}
