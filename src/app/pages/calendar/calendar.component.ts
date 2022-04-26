import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DateService } from 'src/app/shared/date.service';

interface Day {
  value: moment.Moment,
  current: boolean,
  selected: boolean,
  disabled: boolean
}

interface Week {
  days: Day[]
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.date.subscribe(this.generate.bind(this))
  }

  public calendar: Week[] = []

  generate(now : moment.Moment) {
    const startDate = now.clone().startOf('month').startOf('week')
    const endDate = now.clone().endOf('month').endOf('week')
    const date = startDate.clone().subtract(1, 'day')

    const calendar = []
    while(date.isBefore(endDate, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(null)
          .map(() => {
            const value = date.add(1, 'day').clone()
            const current = moment().isSame(value, 'date')
            const disabled = !now.isSame(value, 'month')
            const selected = now.isSame(value, 'date')

            return {value, current, selected, disabled}
          })
      })
    }

    this.calendar = calendar
  }
}
