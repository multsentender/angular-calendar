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

    const calendar = []
    while(startDate.isBefore(endDate, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(null)
          .map(() => {
            const value = startDate.add(1, 'day').clone()
            const current = moment().isSame(value, 'date')
            const disabled = !now.isSame(value, 'month')

            return {value, current, selected: current, disabled}
          })
      })
    }

    this.calendar = calendar
  }

  onSelect(day: moment.Moment) {
    // console.log(day)
    this.dateService.changeDate(day)
  }
}
