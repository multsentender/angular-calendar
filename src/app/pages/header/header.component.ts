import { Component } from '@angular/core';
import { DateService } from 'src/app/shared/date.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dateService: DateService) { }

  go(val: number) {
    this.dateService.changeMonth(val)
  }
}
