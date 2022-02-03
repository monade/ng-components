import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum TIME_RANGE_STATUS {
  OK,
  KO
}

export interface TimeRange {
  startHour: number;
  startMinutes: number;
  endHour: number;
  endMinutes: number;
  startDate?: Date;
  endDate?: Date;
  status?: TIME_RANGE_STATUS;
  message?: string;
}

@Component({
  selector: 'ng-time-range',
  templateUrl: './ng-time-range.component.html',
  styleUrls: ['./ng-time-range.component.scss']
})
export class NgTimeRangeComponent {

  @Input() minutesRange: number = 15;
  @Input() disabled = false;
  @Input() showDates = false;

  private _timeRange!: TimeRange;
  @Input()
  set timeRange(value: TimeRange) {
    this._timeRange = value;
    if(!this.timeRange.startDate) {
      this.timeRange.startDate = new Date();
    }
    if(!this.timeRange.endDate) {
      this.timeRange.endDate = new Date();
    }
  }
  get timeRange() {
    return this._timeRange;
  }

  set startHour(value: number) {
    this.timeRange.startHour = value;
    this.onChange();
  }
  get startHour() {
    return this.timeRange.startHour;
  }
  set startMinutes(value: number) {
    this.timeRange.startMinutes = value;
    this.onChange();
  }
  get startMinutes() {
    return this.timeRange.startMinutes;
  }

  set endHour(value: number) {
    this.timeRange.endHour = value;
    this.onChange();
  }
  get endHour() {
    return this.timeRange.endHour;
  }
  set endMinutes(value: number) {
    this.timeRange.endMinutes = value;
    this.onChange();
  }
  get endMinutes() {
    return this.timeRange.endMinutes;
  }

  @Output() timeRangeChange = new EventEmitter<TimeRange>();

  onStartHourIncrease() {
    if(this.disabled) {
      return;
    }
    if(this.timeRange.startHour === 23) {
      this.timeRange.startHour = 0;
    }
    else {
      this.timeRange.startHour += 1;
    }
    this.onChange();
  }

  onStartHourDecrease() {
    if(this.disabled) {
      return;
    }
    if(this.timeRange.startHour === 0) {
      this.timeRange.startHour = 23;
    }
    else {
      this.timeRange.startHour -= 1;
    }
    this.onChange();
  }


  onStartMinutesIncrease() {
    if(this.disabled) {
      return;
    }
    this.timeRange.startMinutes += this.minutesRange;
    if(this.timeRange.startMinutes > 59) {
      this.timeRange.startHour += 1;
      if(this.timeRange.startHour === 24) {
        this.timeRange.startHour = 0;
      }

      this.timeRange.startMinutes = Math.abs(60 - this.timeRange.startMinutes);
    }
    this.onChange();
  }

  onStartMinutesDecrease() {
    if(this.disabled) {
      return;
    }
    this.timeRange.startMinutes -= this.minutesRange;
    if(this.timeRange.startMinutes < 0) {
      this.timeRange.startHour -= 1;
      if(this.timeRange.startHour === -1) {
        this.timeRange.startHour = 23;
      }

      this.timeRange.startMinutes = 60 + this.timeRange.startMinutes;
    }
    this.onChange();
  }

  onEndHourIncrease() {
    if(this.disabled) {
      return;
    }
    if(this.timeRange.endHour === 23) {
      this.timeRange.endHour = 0;
    }
    else {
      this.timeRange.endHour += 1;
    }
    this.onChange();
  }

  onEndHourDecrease() {
    if(this.disabled) {
      return;
    }
    if(this.timeRange.endHour === 0) {
      this.timeRange.endHour = 23;
    }
    else {
      this.timeRange.endHour -= 1;
    }
    this.onChange();
  }


  onEndMinutesIncrease() {
    if(this.disabled) {
      return;
    }
    this.timeRange.endMinutes += this.minutesRange;
    if(this.timeRange.endMinutes > 59) {
      this.timeRange.endHour += 1;
      if(this.timeRange.endHour === 24) {
        this.timeRange.endHour = 0;
      }

      this.timeRange.endMinutes = Math.abs(60 - this.timeRange.endMinutes);
    }
    this.onChange();
  }

  onEndMinutesDecrease() {
    if(this.disabled) {
      return;
    }
    this.timeRange.endMinutes -= this.minutesRange;
    if(this.timeRange.endMinutes < 0) {
      this.timeRange.endHour -= 1;
      if(this.timeRange.endHour === -1) {
        this.timeRange.endHour = 23;
      }

      this.timeRange.endMinutes = 60 + this.timeRange.endMinutes;
    }
    this.onChange();
  }

  onDateStartChange(date: Date) {
    this.timeRange.startDate = date;
    this.onChange();
  }

  onDateEndChange(date: Date) {
    this.timeRange.endDate = date;
    this.onChange();
  }

  onChange() {
    const res = {
      startHour: this.timeRange.startHour,
      startMinutes: this.timeRange.startMinutes,
      endHour: this.timeRange.endHour,
      endMinutes: this.timeRange.endMinutes,
      startDate: this.timeRange.startDate,
      endDate: this.timeRange.endDate,
      status: TIME_RANGE_STATUS.OK, //start >= end ? TIME_RANGE_STATUS.KO : TIME_RANGE_STATUS.OK,
      message: "", //start >= end ? "Start time is greater or equal than end time" : ""
    };

    this.timeRangeChange.emit(res);
  }

}
